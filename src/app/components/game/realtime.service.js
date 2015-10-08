(function() {
  'use strict';

  angular
    .module('melbournecup')
    .factory('realtime', realtimeConnector);

  /** @ngInject */
  function realtimeConnector($log, $firebaseObject) {
	var basePath = "https://horserace.firebaseio.com/";
    var ref_race_1 = new Firebase("https://horserace.firebaseio.com/race_1");
	// var syncObject = $firebaseObject(ref);
    //
	// var players= [
	// 	{name:'name1',speed:60,distance:20},
	// 	{name:'name2',speed:62,distance:10},
	// 	{name:'name3',speed:58,distance:30},
	// 	{name:'name4',speed:59,distance:25},
	// 	{name:'name5',speed:62,distance:23}
	// ];

    var selectedRace = null;

    var service = {
    //   getPlayers: getPlayers,
	//   horses: players,
	  setDistance: setDistance,
	  race: $firebaseObject(new Firebase(basePath+ 'race_1') ),
	  raceRooms: $firebaseObject(new Firebase(basePath+ 'rooms_predefined') ),
	//   setSelectedRace: setSelectedRace,
	  getRoomData: getRoomData,
      selectedRace: selectedRace
    };


    return service;


	// function getPlayers(){
	// 	return players;
	// }

	function setDistance(name, delta){
		//service.raceRooms[name].distance += delta;
		//service.raceRooms.$save()

        service.selectedRace.horses[name].distance += delta;
        service.selectedRace.$save();
	}

	// function setSelectedRace(raceName){
    //     service.selectedRace = raceName
	// }

	function getRoomData(roomName){
        service.selectedRace = $firebaseObject(new Firebase(basePath+ '/rooms_predefined/' + roomName) );
		return service.selectedRace;
	}


  }
})();
