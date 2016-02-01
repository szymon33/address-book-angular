addressBook.controller('ContactsCreateController', function($scope, localStorageService, $location){
  var contactsInBook = localStorageService.get('contacts');
  $scope.contacts = contactsInBook || [];
  $scope.$watch('contacts', function () {
    localStorageService.set('contacts', $scope.contacts);
  }, true);

  var Contact = function() {
    this.autoincrement = function(collection) {
      var counter = 0;
      for (var i = 0, len = collection.length; i < len; i++) {
        var item = collection[i];
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
