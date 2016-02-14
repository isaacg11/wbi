 (function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay","$location","$anchorScroll"];

  function homeCtrl(homeFactory, $state, $http, $scope, $stamplay, $location, $anchorScroll, duParallax){

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    jQuery(document).ready(function(){
      jQuery('.materialboxed').materialbox();
    });

  //TYPED.JS
    jQuery(function(){
        jQuery(".element").typed({
            strings: ["Bring Ideas To Life.^2000", 
                      "Custom Websites.^2000",
                      "Mobile Apps.^2000",
                      "Whatever You Need.",
                      ],
            typeSpeed: 0,
            loop: false
        });
    });

  //PAGE SCROLL
  	$scope.goToQuote = function() {
      $location.hash('quote');
      $anchorScroll();
  	};


    var options = [
      {selector: '.img-Reviews', offset: 0, callback: 'Materialize.fadeInImage(".img-Reviews")'}
    ];
    Materialize.scrollFire(options);
  	
  //CLOSING BRACKETS
  }
  })();  