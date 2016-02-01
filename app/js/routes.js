// configure all app routes
addressBook.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the contacts index
      redirectTo: '/contacts'
    })

    // routes for the contacts
    .when('/contacts', {
      templateUrl : 'views/contacts/index.html',
      controller  : 'ContactsIndexController'
    })

    .when('/contacts/new', {
      templateUrl: 'views/contacts/new.html',
      controller: 'ContactsCreateController'
    })

    .when('/contacts/:id', {
      templateUrl: "views/contacts/show.html",
      controller: "ContactsShowController"
    })

    .when('/contacts/:id/edit', {
      templateUrl: "views/contacts/edit.html",
      controller: "ContactsEditController"
    })

    // routes for pages
    .when('/about', {
      templateUrl : 'views/pages/about.html',
      controller  : 'PagesAboutController'
    })
});
