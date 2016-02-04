'use strict';

addressBook.controller('ContactsCreateController', ($scope, localStorageService, $location) => {
  let contactsInBook = localStorageService.get('contacts');
  $scope.contacts = contactsInBook || [];
  $scope.$watch('contacts', () => {
    localStorageService.set('contacts', $scope.contacts);
  }, true);

  class Contact {
    constructor(contacts) {
      this.id = this._autoincrement(contacts);
    }

    _autoincrement(collection) {
      let counter = 0;
      for (let item of collection) {
        if (item.id > counter) {
          counter = item.id;
        }
      }
      return(counter+1);
    };
  };

  $scope.contact = new Contact($scope.contacts);

  $scope.saveContact = function(contact) {
    $scope.contacts.push(contact);
    $location.path("/contacts");
  };
});
