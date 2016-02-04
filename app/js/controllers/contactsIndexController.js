'use strict';

addressBook.controller('ContactsIndexController', function($scope, localStorageService, $location){
  let contactsInBook = localStorageService.get('contacts');
  $scope.contacts = contactsInBook || [];

  $scope.showContact = function(contact) {
    $location.path("/contacts/" + contact.id);
  };
});
