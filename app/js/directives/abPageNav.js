addressBook.directive('abPageNav', () => {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "views/directives/abPageNav.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
