(function() {

    var homeModule = angular.module("homeModule", ['ngRoute']);
    
    //routes
    homeModule.config(function($routeProvider){
        $routeProvider.when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        })
        .otherwise({redirectTo: "/home"});
    });

}());