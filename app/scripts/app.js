'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SideAndNavigation', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('sidemenu', {
                url: "/sidemenu",
                abstract: true,
                templateUrl: "/templates/sideMenus.html"
            })
            .state('sidemenu.home', {
                url: "/home",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/home.html"
                    }
                }
            })
            .state('sidemenu.menuOneA', {
                url: "/menuOneA",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/menuOneA.html"
                    }
                }
            })
            .state('sidemenu.menuOneB', {
                url: "/menuOneB",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/menuOneB.html"
                    }
                }
            })
            .state('sidemenu.menuOneC', {
                url: "/menuOneC",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/menuOneC.html"
                    }
                }
            })
            .state('sidemenu.menuTwoA', {
                url: "/menuTwoA",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/menuTwoA.html"
                    }
                }
            })
            .state('sidemenu.menuTwoB', {
                url: "/menuTwoB",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/menuTwoB.html"
                    }
                }
            })
            .state('sidemenu.menuTwoC', {
                url: "/menuTwoC",
                views: {
                    'mainContent' :{
                        templateUrl: "templates/menuTwoC.html"
                    }
                }
            })

        $urlRouterProvider.otherwise("/sidemenu/home");
})


.controller('MainNavigationCtrl', function($scope, $ionicNavBarDelegate, $ionicSideMenuDelegate) {

        $scope.getPreviousTitle = function() { return $ionicNavBarDelegate.$getByHandle('mainNavBar').getPreviousTitle() };

        $scope.toggleRight = function () {  return $ionicSideMenuDelegate.$getByHandle('mainSideMenu').toggleRight()} ;


})

.controller('RightMenuCtrl', function($scope, $state, $ionicNavBarDelegate) {

        var homeMenu = {stateName : 'sidemenu.home', labelName: 'Home' };
        var pageOneMenu = {stateName : 'sidemenu.menuOneA', labelName: 'Menu One' };
        var pageTwoMenu = {stateName : 'sidemenu.menuTwoA', labelName: 'Menu Two' };

        $scope.subMenus = [homeMenu,pageOneMenu,pageTwoMenu];

        $scope.activeSubMenuStateName = 'sidemenu.home';

        $scope.setActiveSubMenu = function(subMenuStateName) {

        $scope.activeSubMenuStateName=subMenuStateName;

          return $state.go(subMenuStateName);

         };


});
