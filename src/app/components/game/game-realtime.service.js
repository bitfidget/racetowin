(function() {
  'use strict';

  angular
    .module('melbournecup')
    .factory('gameRealtime', gameRealtimeConnector);

  /** @ngInject */
  function gameRealtimeConnector( $firebaseObject, firebaseBasePath, $interval) {
	var basePath = firebaseBasePath;


    var userHorseName = "";
    var userRaceName = "";
    var minUsers = 2; //minum number of users - 1

    var selectedRace = null; // data object
    //var selectedHorse = null; //data object

    var timer = null;
    var countDownTimer = null;
    var currentSpeed = 0;

    var service = {
        joinRace:joinRace,
        raceData: null,
        startRace: startRace,
        updateDistance: updateDistance,
        updateSpeed: updateSpeed,
        setSpeed: setSpeed,
        selectedHorse:null
    };


    return service;


	function joinRace(raceName, jockeyName, horseName, speed){

        userRaceName = raceName;
        service.raceData = $firebaseObject(new Firebase(basePath+ 'races/' + userRaceName) );
        service.raceData.$loaded(
                                    function(data){
                                        console.log(data);
                                        addUserToRace(jockeyName, horseName, speed);
                                    },
                                    function(error){
                                        //handle error
                                    }
                                );
    }

    function addUserToRace(jockeyName, horseName, speed){
        userHorseName = horseName;
        if(service.raceData["horses"]){

        }else{
            //if no one joined the race create a horse list
            service.raceData["horses"] = {}
            service.raceData.startsInSeconds = 4;
            //first person who joins in becomes the host of game
            service.raceData.host = horseName;
            //all states "INITIALISED", "WAITING_FOR_USERS", "WAITING_MINIMUM_USERS_JOINED",
            //             "CONTDOWN_STARTED", "RACE_STARTED", "RESULTS"
            service.raceData.state = 'INITIALISED';
        }


        service.raceData["horses"][horseName] = {'jockey':jockeyName, 'speed':speed, 'distance':0};
        service.raceData.$save().then(
            function(success){
                userJoined();
                service.selectedHorse = $firebaseObject(new Firebase(basePath+ 'races/' + userRaceName + '/horses/' + horseName) );

            },
            function(error){

            }
        );


    }

    function userJoined(){
        if(Object.keys(service.raceData.horses).length>minUsers){
            service.raceData.state = "START_COUNT_DOWN";
            service.raceData.$save();
            countDownTimer = $interval(function(){
                updateServerTimer();
            },1000);
        }

    }

    function updateServerTimer(){
        service.raceData.startsInSeconds = parseInt(service.raceData.startsInSeconds)-1;
        service.raceData.$save();
        if(service.raceData.startsInSeconds<1){
            $interval.cancel(countDownTimer);
            service.raceData.state = "START_GAME";
            service.raceData.$save();
        }
    }

    function updateDistance(){
        var _distance = parseFloat(service.selectedHorse.distance);
        if(_distance<100){

            service.selectedHorse.distance = parseFloat(service.selectedHorse.speed) + _distance;
            service.selectedHorse.$save();
        }else{
            $interval.cancel(timer);
        }

    }

    function startRace(){
        timer = $interval(function(){
            updateDistance();
        },1000);
    }

    function updateSpeed(speedDelta){
        var _speed = parseFloat(service.selectedHorse.speed);
        service.selectedHorse.speed = _speed + speedDelta;
        service.selectedHorse.$save();
    }

    function setSpeed(speed){
        service.selectedHorse.speed = speed;
        service.selectedHorse.$save();
    }


  }
})();
