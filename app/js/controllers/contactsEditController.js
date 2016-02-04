'use strict';

addressBook.controller('ContactsEditController', ($scope, $routeParams, localStorageService, $location) => {
  let contactsInBook = localStorageService.get('contacts');
  $scope.contacts = contactsInBook || [];
  $scope.$watch('contacts', () => {
    localStorageService.set('contacts', $scope.contacts);
  }, true);

  let findContact = function(id) {
    for (let contact of $scope.contacts) {
      if (contact.id == id) return contact;
    }
  };

  $scope.contact = findContact($routeParams.id);

  $scope.saveContact = function(contact) {
    $location.path("/contacts/" + contact.id);
  };
});
