 (function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay","$location","$anchorScroll"];

  function homeCtrl(homeFactory, $state, $http, $scope, $stamplay, $location, $anchorScroll, duParallax){

    jQuery(document).ready(function(){
      jQuery('.materialboxed').materialbox();
    });

    jQuery(function(){
        jQuery(".element").typed({
            strings: ["Beautiful Websites.^2000", 
                      "Mobile Apps.^2000",
                      "Affordable Solutions.^2000",
                      "Bring Ideas To Life.",
                      ],
            typeSpeed: 0,
            loop: true
        });
    });

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