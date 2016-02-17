 Stamplay.init('rocketbit');

 (function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay","$location","$anchorScroll"];

  function homeCtrl(homeFactory, $state, $http, $scope, $stamplay, $location, $anchorScroll, duParallax){

    jQuery(".button-collapse").sideNav();

  //ON STATE CHANGE, SCROLL TO TOP
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
                      "Launch Within Days.",
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

  //FADE IN IMAGES
    var options = [
      {selector: '.img-Reviews', offset: 0, callback: 'Materialize.fadeInImage(".img-Reviews")'}
    ];
    Materialize.scrollFire(options);
  
  //SIGNUP
    $scope.contact = function(){

      var contactInfo = {
        name: $scope.name,
        phone: $scope.phone, 
        email: $scope.email
      };

      $scope.name = "";
      $scope.phone = "";
      $scope.email = "";

      Stamplay.Object('signup').save(contactInfo).then(function(){
        Materialize.toast('Success!', 3000);
      });
    };

  //CLOSING BRACKETS
  }
  })();  