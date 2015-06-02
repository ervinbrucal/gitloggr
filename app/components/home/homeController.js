(function() {

    var homeModule = angular.module("homeModule", []);
    
    var homeController = function($scope, githubFactory) {
        $scope.username = "";
        $scope.authtoken = "";
        $scope.message = "test";
        
        $scope.exportToCSV = function(username, authtoken) {
            githubFactory.authenticateUser(username, authtoken)
            .then(setUser, displayError);
        };

        var setUser = function(data) {
            $scope.user = data
        };
    
        var displayError = function(response) {
            console.log(response.data);
            UIkit.notify(response.data.message);
        }
    };
    
    
    homeModule.controller("homeController", homeController);
    
}());