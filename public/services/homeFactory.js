(function() {
  'use strict';
  angular.module('stamplay')
  .factory('homeFactory', homeFactory);
  homeFactory.$inject = ['$http', '$q'];

  function homeFactory($http, $q) {
    return true;
  }
  })();