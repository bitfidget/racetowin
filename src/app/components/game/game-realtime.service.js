(function() {
  'use strict';

  angular
    .module('melbournecup')
    .factory('gameRealtime', gameRealtimeConnector);

  /** @ngInject */
  function gameRealtimeConnector($log, $firebaseObject, firebaseBasePath, $interval) {
	var basePath = firebaseBasePath;


    var userHorseName = "";
    var userRaceName = "";

    var selectedRace = null; // data object
    //var selectedHorse = null; //data object

    var timer = null;
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
            service.raceData.startsInSeconds = 20;
            //first person who joins in becomes the host of game
            service.raceData.host = horseName;
            //all states "INITIALISED", "WAITING_FOR_USERS", "WAITING_MINIMUM_USERS_JOINED",
            //             "CONTDOWN_STARTED", "RACE_STARTED", "RESULTS"
            service.raceData.state = 'INITIALISED';
        }


        service.raceData["horses"][horseName] = {'jockey':jockeyName, 'speed':speed, 'distance':0};
        service.raceData.$save().then(
            function(success){
                service.selectedHorse = $firebaseObject(new Firebase(basePath+ 'races/' + userRaceName + '/horses/' + horseName) );

            },
            function(error){

            }
        );


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
        console.log('start race');
        timer = $interval(function(){
            updateDistance();
            console.log("--- : " + service.selectedHorse.distance);

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
