(function () {

    angular
        .module("homeModule")
        .config(function($routeProvider) {
            $routeProvider
            .when("/home", {
                templateUrl: "/app/components/home/home.html",
                controller: "homeController"
            })
            .otherwise({redirectTo: "/home"});
        });

}());