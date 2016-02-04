'use strict';

let addressBook = angular.module('addressBook', ['ngRoute', 'ngMessages', 'LocalStorageModule'])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('addressBook');
}]);
