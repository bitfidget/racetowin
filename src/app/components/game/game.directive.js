(function() {
    'use strict';

    angular
    .module('melbournecup')
    .directive('game', game);

    /** @ngInject */
    function game() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/game/game.html',
            scope: {
                race:'@',
                horse:'@',
                jockey:'@',
                speed:'@'
            },
            controller: GameController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function GameController(gameRealtime, $scope) {
            var vm = this;



            vm.state = "JOINING"; //all states - "JOINING", "JOINED", "WAITING", "COUNTDOWN", "PLAYING", "RESULT"

            vm.realtime = gameRealtime.raceData;

            vm.joinRace = function(){
                gameRealtime.joinRace(vm.race,vm.jockey, vm.horse, vm.speed);
            }

            $scope.$on('StartGameEvent', function(event, data){
                console.log(data);
                gameRealtime.joinRace(data.raceName,data.jockeyName, data.horseName, data.speed);
            });

            vm.getStatus = function(){
                if(gameRealtime["raceData"]){
                    if(gameRealtime['raceData']['state']=='START_GAME'){
                        vm.triggerGameStart();
                    }
                    return gameRealtime['raceData']['state'];
                }else{
                    return '';
                }
            }

            vm.triggerGameStart = function(){
                if(vm.state=="PLAYING"){

                }else{
                    vm.state="PLAYING";
                    gameRealtime.startRace();
                }

            }

            vm.getCountDownTime = function(){
                if(gameRealtime["raceData"]){
                    return gameRealtime['raceData']['startsInSeconds'];
                }else{
                    return '';
                }
            }

            // vm.updateDistance = function(){
            //     gameRealtime.updateDistance();
            // }

            vm.setSpeed= function(speed){
                gameRealtime.setSpeed(speed);
            }

            vm.horses = function(){
                //return [1,2,3,4];
                if(gameRealtime["raceData"]){
                    return gameRealtime["raceData"]["horses"];
                }else{
                    return [];
                }
            }

            vm.startTest = function(){
                //start test
                gameRealtime.startRace();
            }



        }
    }

})();
