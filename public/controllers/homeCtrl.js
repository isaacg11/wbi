 (function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay","$location","$anchorScroll"];

  function homeCtrl(homeFactory, $state, $http, $scope, $stamplay, $location, $anchorScroll, duParallax){

    $scope.words = "Hello world";

  	$scope.goToContact = function() {
      $location.hash('contact');
      $anchorScroll();
  	};
  	
      
  	$scope.goToServices = function(){
  		$location.hash('services');
      	$anchorScroll();
  	};

  	$scope.goToReviews = function(){
  		$location.hash('reviews');
      	$anchorScroll();
  	};

  //CLOSING BRACKETS
  }
  })();  