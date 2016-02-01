addressBook.controller('ContactsShowController', function($scope, $routeParams, localStorageService, $location){
  var contactsInBook = localStorageService.get('contacts');
  $scope.contacts = contactsInBook || [];
  $scope.$watch('contacts', function () {
    localStorageService.set('contacts', $scope.contacts);
  }, true);

  var findContact = function(id) {
    for(var i = 0, len = $scope.contacts.length; i < len; i++) {
      var item = $scope.contacts[i];
      if (item.id == id) return item;
    }
  };

  $scope.contact = findContact($routeParams.id);

  $scope.deleteContact = function(contact){
    var index = $scope.contacts.indexOf(contact);
    if (index > -1) $scope.contacts.splice(index, 1);
    $location.path('/contacts');
  };
});
