 Stamplay.init('sbisaac');

 (function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay","$location","$anchorScroll"];

  function homeCtrl(homeFactory, $state, $http, $scope, $stamplay, $location, $anchorScroll, duParallax){

  //INITIALIZE SIDENAV
    jQuery(".button-collapse").sideNav();

  //ON STATE CHANGE, SCROLL TO TOP
    document.body.scrollTop = document.documentElement.scrollTop = 0;

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

  //INITIALIZE MODAL
    $scope.openMdl1 = function(){
      jQuery('#modal1').openModal();
    };

    $scope.openMdl2 = function(){
      jQuery('#modal2').openModal();
    };

    $scope.openMdl3 = function(){
      jQuery('#modal3').openModal();
    };

    $scope.openMdl4 = function(){
      jQuery('#modal4').openModal();
    };

  //FADE IN IMAGES
    var options = [
      {selector: '.img-Reviews', offset: 0, callback: 'Materialize.fadeInImage(".img-Reviews")'}
    ];
    Materialize.scrollFire(options);
  
  //SIGNUP USING HOME PG FORM
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

  //SIGNUP USING HOME PG FORM
    $scope.contactModal = function(){

      var contactInfo = { 
        email: $scope.emailModal,
        text: $scope.messageModal 
      };

      console.log(contactInfo);

      Stamplay.Object('message').save(contactInfo).then(function(){
        window.location.reload(true);
      });
    };

  //CLOSING BRACKETS
  }
  })();  