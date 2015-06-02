(function() {

    var homeModule = angular.module("homeModule", []);
    
    var homeController = function($scope, githubFactory) {
        $scope.username = "";
        $scope.authtoken = "";
        
        $scope.exportToCSV = function(username, authtoken) {
            githubFactory.authenticateUser(username, authtoken)
            .then(setUser, displayError);
        };

        var setUser = function(data) {
            console.log(data);
            $scope.login = data.login;
            $scope.avatar_url = data.avatar_url;
            $scope.repos_url = data.repos_url;
            
            githubFactory.getRepos(data.repos_url)
                .then(function(responseRepos){
                    console.log("repos", responseRepos);
                    $scope.repos = responseRepos;
                });
            
        };
    
        var displayError = function(response) {
            console.log(response.data);
            UIkit.notify(response.data.message);
        }
        
        $scope.update = function(selectedRepo) {
            console.log(selectedRepo)
        }
    };
    
    homeModule.controller("homeController", homeController);
    
}());