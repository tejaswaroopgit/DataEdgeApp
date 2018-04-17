var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        access: { restricted: true },
        controller:'homeController'
     
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/home', {
        templateUrl: 'partials/home.html',
      access: {restricted: true}
    })
      .when('/consultantRegister', {
        templateUrl: 'partials/consultantRegister/consultantRegister.html',
        controller: 'addEditConsultantsCtrl',
        access: { restricted: true }
      })
      .when('/consultantList', {
          templateUrl: 'partials/consultantRegister/consultantListPage.html',
          controller:'consultantRegisterCtrl',
          access: { restricted: true }
      })
      .when('/clientsList', {
          templateUrl: 'partials/clients/clientsListpage.html',
          controller: 'clientsCtrl',
          access: { restricted: true }
      })
      .when('/addEditClients', {
          templateUrl: 'partials/clients/clientsAddEdit.html',
          controller: 'clientsCtrl',
          access: { restricted: true }
      })
    .otherwise({
      redirectTo: '/'
    });
});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});