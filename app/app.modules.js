(function() {
    "use strict";

    var homeModule = angular.module("homeModule", ['ngRoute']);
    
    //routes
    homeModule.config(function($routeProvider){
        $routeProvider
        .when("/home", {
            templateUrl: "/app/components/home/home.html",
            controller: "homeController"
        })
        .otherwise({redirectTo: "/home"});
    });

}());