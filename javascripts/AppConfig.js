'use strict';

app.run(function ($location, $rootScope, FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);

});


app.config(function ($routeProvider) {
  $routeProvider
    .when("/about", {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
    })
    .when("/blog", {
      templateUrl: 'partials/blog.html',
      controller: 'BlogCtrl',
    })
    .when("/contact", {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl',
    })
    .when("/personal-history", {
      templateUrl: 'partials/personal-history.html',
      controller: 'PersonalHistoryCtrl',
    })
    .when("/projects", {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl',
    })
    .otherwise('/projects');
});