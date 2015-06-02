(function() {

    var homeModule = angular.module("homeModule", []);
    
    var homeController = function($scope, githubFactory) {
        $scope.username = "";
        $scope.authtoken = "";

        $scope.message = "test";

        $scope.exportToCSV = function(username, authtoken) {
            githubFactory.authenticateUser(username, authtoken)
            .then(function(response) {
                $scope.user = response
            });
        };

    };
    
    homeModule.controller("homeController", homeController);
    
}());