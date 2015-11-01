(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('CreditsController', CreditsController);

  /** @ngInject */
  function CreditsController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    $scope.horses = [
    {
      namefirst: 'Alastair',
      namelast: 'Pearson',
      email: 'Alastair.Pearson@au.pwc.com',
      nickname: '20 Hands',
      team: 'Insight Analytics',
      image: 'al'
      },
      {
      namefirst: 'Becky',
      namelast: 'Hunt',
      email: 'Becky.Hunt@au.pwc.com',
      nickname: 'No Time For Trotting',
      team: 'Insight Analytics',
      image: 'becky'
      },
      {
      namefirst: 'Kriss',
      namelast: 'Heimanis',
      email: 'Kriss.Heimanis@au.pwc.com',
      nickname: 'Grumpy Dumpling',
      team: 'Experience Centre',
      image: 'kriss'
      },
      {
      namefirst: 'Nathan',
      namelast: 'Scully',
      email: 'Nathan.Scully@au.pwc.com',
      nickname: 'The Swooper',
      team: 'Experience Centre',
      image: 'nathan'
      },
      
      {
      namefirst: 'Matt',
      namelast: 'Carrigan',
      email: 'Matt.Carrigan@au.pwc.com',
      nickname: 'Numbles',
      team: 'Insight Analytics',
      image: 'matt'
      },
      {
      namefirst: 'Celestine',
      namelast: 'Bond',
      email: 'Celestine.Bond@au.pwc.com',
      nickname: 'All The Things',
      team: 'Insight Analytics',
      image: 'cel'
      },
      {
      namefirst: 'Cameron',
      namelast: 'Maxwell',
      email: 'Cameron.Maxwell@au.pwc.com',
      nickname: 'Agent 86',
      team: 'Insight Analytics',
      image: 'camm'
      },
      {
      namefirst: 'Cameron',
      namelast: 'Cuthbert',
      email: 'Cameron.Cuthbert@au.pwc.com',
      nickname: 'Chobani Champ',
      team: 'Insight Analytics',
      image: 'camc'
      },
      {
      namefirst: 'Peter',
      namelast: 'Shi',
      email: 'Peter.Shi@au.pwc.com',
      nickname: 'Zen',
      team: 'Insight Analytics',
      image: 'pete'
      },
      {
      namefirst: 'Ruaridh',
      namelast: 'Williamson',
      email: 'Ruaridh.Williamson@au.pwc.com',
      nickname: 'Race Day',
      team: 'Insight Analytics',
      image: 'ruari'
      },
      {
      namefirst: 'Billy',
      namelast: 'Jaya',
      email: 'Billy.Jaya@au.pwc.com',
      nickname: 'On Air',
      team: 'Insight Analytics',
      image: 'billy'
      },
      {
      namefirst: 'Justin',
      namelast: 'Wong',
      email: 'Justin.Wong@au.pwc.com',
      nickname: 'Time',
      team: 'Insight Analytics',
      image: 'justin'
      },
      {
      namefirst: 'Ruan',
      namelast: 'Jordaan',
      email: 'Ruan.Jordaan@au.pwc.com',
      nickname: 'Slam Dunk',
      team: 'Insight Analytics',
      image: 'ruan'
      },
      {
      namefirst: 'Clare',
      namelast: 'Flanagan',
      email: 'Clare.Flanagan@au.pwc.com',
      nickname: 'Hoarse Whisperer',
      team: 'Williams Lea',
      image: 'clare'
      },
      {
      namefirst: 'Rory',
      namelast: 'Anderson',
      email: 'Rory.Anderson@au.pwc.com',
      nickname: 'Mista',
      team: 'Insight Analytics',
      image: 'rory'
      },
      {
      namefirst: 'Jakob',
      namelast: 'Govendir',
      email: 'Jakob.Govendir@au.pwc.com',
      nickname: 'Mario',
      team: 'Insight Analytics',
      image: 'jakob'
      }



    ]

  }
})();
