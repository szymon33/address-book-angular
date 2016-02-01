var addressBook = angular.module('addressBook', ['ngRoute', 'ngMessages', 'LocalStorageModule'])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('addressBook');
}]);
