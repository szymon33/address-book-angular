'use strict';

addressBook.controller('ContactsCreateController', function($scope, localStorageService, $location){
  let contactsInBook = localStorageService.get('contacts');
  $scope.contacts = contactsInBook || [];
  $scope.$watch('contacts', function () {
    localStorageService.set('contacts', $scope.contacts);
  }, true);

  let Contact = function() {
    this.autoincrement = function(collection) {
      let counter = 0;
      for (let item of collection) {
        if (item.id > counter) {
          counter = item.id;
        }
      }
      return(counter+1);
    };

    this.id = this.autoincrement($scope.contacts);
  };

  $scope.contact = new Contact();

  $scope.saveContact = function(contact){
    $scope.contacts.push(contact);
    $location.path("/contacts");
  };
});
