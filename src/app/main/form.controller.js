(function() {
  'use strict';

  angular
    .module('melbournecup')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController($scope) {
    var vm = this;

    vm.name = "Melbourne Cup 2015"

    $scope.horses = [
    	{
        name: "Snow Sky",
        number: 1,
        barrier: 16,
        weight: 58,
        tip: 0,
        previous: "2 3 x 7 x 1 1 6 x 5",
        more: false,
        age: 5,
        nationality: 'GB',
        wins: 33,
        place: 60,
        


},
{
 name: "Criterion",
 number: 2,
barrier: 4,
 weight: 57.5,
 tip: 0,
 previous: "x 3 2 1 3 5 x 6 1 2",
 more: false,
 age: 5,
 nationality: 'NZ',
 wins: 23,
 place: 61,
 


},
{
 name: "Fame Game",
 number: 3,
barrier: 12,
 weight: 57,
 tip: 0,
 previous: "x 6 1 x 0 1 x 2 x 6",
 more: false,
 age: 6,
 nationality: 'JPN',
 wins: 29,
 place: 41,
 


},
{
 name: "Our Ivanhowe",
 number: 4,
barrier: 22,
 weight: 56,
 tip: 0,
 previous: "1 0 1 6 x 7 x 9 2 3",
 more: false,
 age: 6,
 nationality: 'GER',
 wins: 36,
 place: 57,
 


},
{
 name: "Big Orange",
 number: 5,
barrier: 23,
 weight: 55.5,
 tip: 0,
 previous: "1 1 5 x 4 7 1 1 7 x",
 more: false,
 age: 5,
 nationality: 'GB',
 wins: 38,
 place: 46,
 


},
{
 name: "Hartnell",
 number: 6,
barrier: 17,
 weight: 55.5,
 tip: 0,
 previous: "7 x 2 1 1 4 x 4 6 5",
 more: false,
 age: 5,
 nationality: 'GB',
 wins: 35,
 place: 60,
 


},
{
 name: "Hokko Brave",
 number: 7,
barrier: 20,
 weight: 55.5,
 tip: 0,
 previous: "3 8 x 0 5 x 3 6 x 0",
 more: false,
 age: 8,
 nationality: 'JPN',
 wins: 17,
 place: 50,
 


},
{
 name: "Max Dynamite",
 number: 8,
barrier: 2,
 weight: 55,
 tip: 0,
 previous: "1 2 4 4 F 7 2 2 1 x",
 more: false,
 age: 6,
 nationality: 'FR',
 wins: 17,
 place: 44,
 


},
{
 name: "Red Cadeaux",
 number: 9,
barrier: 8,
 weight: 55,
 tip: 0,
 previous: "7 2 6 x 5 2 0 7 3 x",
 more: false,
 age: 10,
 nationality: 'GB',
 wins: 13,
 place: 51,
 


},
{
 name: "Trip To Paris",
 number: 10,
barrier: 14,
 weight: 55,
 tip: 0,
 previous: "x 4 1 1 1 2 1 3 5 2",
 more: false,
 age: 5,
 nationality: 'IRE',
 wins: 32,
 place: 53,
 


},
{
 name: "Who Shot Thebarman",
 number: 11,
barrier: 6,
 weight: 54.5,
 tip: 0,
 previous: "x 5 4 4 2 x 7 5 8 7",
 more: false,
 age: 7,
 nationality: 'NZ',
 wins: 33,
 place: 50,
 


},
{
 name: "Sky Hunter",
 number: 12,
barrier: 7,
 weight: 54,
 tip: 0,
 previous: "x 4 6 x D 1 x 1 x 2",
 more: false,
 age: 6,
 nationality: 'GB',
 wins: 55,
 place: 73,
 


},
{
 name: "The Offer",
 number: 13,
barrier: 13,
 weight: 54,
 tip: 0,
 previous: "6 0 x 8 x 1 5 5 4 1",
 more: false,
 age: 7,
 nationality: 'IRE',
 wins: 30,
 place: 48,
 


},
{
 name: "Grand Marshal",
 number: 14,
barrier: 15,
 weight: 53.5,
 tip: 0,
 previous: "8 9 4 3 1 x 0 7 5 0",
 more: false,
 age: 6,
 nationality: 'GB',
 wins: 28,
 place: 56,
 


},
{
 name: "Preferment",
 number: 15,
barrier: 11,
 weight: 53.5,
 tip: 0,
 previous: "x 0 6 2 8 x 0 1 1 9",
 more: false,
 age: 4,
 nationality: 'NZ',
 wins: 20,
 place: 53,
 


},
{
 name: "Quest For More",
 number: 16,
barrier: 21,
 weight: 53.5,
 tip: 0,
 previous: "2 0 1 x 2 1 1 2 x 0",
 more: false,
 age: 6,
 nationality: 'IRE',
 wins: 32,
 place: 68,
 


},
{
 name: "Almoonqith",
 number: 17,
barrier: 10,
 weight: 53,
 tip: 0,
 previous: "5 4 1 6 x 5 0 6 7 1",
 more: false,
 age: 6,
 nationality: 'USA',
 wins: 24,
 place: 43,
 


},
{
 name: "Kingfisher",
 number: 18,
barrier: 9,
 weight: 53,
 tip: 0,
 previous: "2 6 6 x 4 1 2 x 3 8",
 more: false,
 age: 5,
 nationality: 'IRE',
 wins: 20,
 place: 47,
 


},
{
 name: "Prince Of Penzance",
 number: 19,
barrier: 1,
 weight: 53,
 tip: 0,
 previous: "2 1 2 3 x 8 5 5 8 2",
 more: false,
 age: 6,
 nationality: 'NZ',
 wins: 26,
 place: 61,
 


},
{
 name: "Bondi Beach",
 number: 20,
barrier: 18,
 weight: 52.5,
 tip: 0,
 previous: "1 2 1 2 2",
 more: false,
 age: 4,
 nationality: 'IRE',
 wins: 40,
 place: 100,
 


},
{
 name: "Sertorius",
 number: 21,
barrier: 5,
 weight: 52.5,
 tip: 0,
 previous: "9 8 x 2 1 x 0 0 6 9",
 more: false,
 age: 8,
 nationality: 'AUS',
 wins: 24,
 place: 59,
 


},
{
 name: "The United States",
 number: 22,
barrier: 3,
 weight: 52.5,
 tip: 0,
 previous: "x 3 x 0 x 1 2 2 6 1",
 more: false,
 age: 6,
 nationality: 'IRE',
 wins: 42,
 place: 67,
 


},
{
 name: "Excess Knowledge",
 number: 23,
barrier: 24,
 weight: 51,
 tip: 0,
 previous: "5 x 1 1 x 5 7 2 2 1",
 more: false,
 age: 6,
 nationality: 'GB',
 wins: 28,
 place: 67,
 


},
{
 name: "Gust Of Wind",
 number: 24,
barrier: 19,
 weight: 51,
 tip: 0,
 previous: "x 1 1 4 1 x 9 8 0 4",
 more: false,
 age: 4,
 nationality: 'NZ',
 wins: 33,
 place: 33,
 


},


    ]

  }
})();
