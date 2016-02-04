'use strict';

addressBook.controller('ContactsShowController', ($scope, $routeParams, localStorageService, $location) => {
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

  $scope.deleteContact = function(contact){
    let index = $scope.contacts.indexOf(contact);
    if (index > -1) $scope.contacts.splice(index, 1);
    $location.path('/contacts');
  };
});
