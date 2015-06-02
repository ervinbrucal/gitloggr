(function() {

    var homeModule = angular.module("homeModule", []);
    
    var homeController = function($scope, githubFactory) {
        $scope.username = "breisa.moralde@orangeandbronze.com";
        $scope.authtoken = "";
        
        $scope.exportToCSV = function(username, authtoken) {
            githubFactory.authenticateUser(username, authtoken)
            .then(setUser, displayError);
        };

        var setUser = function(data) {
            console.log(data);
            $scope.name = data.name;
            $scope.repos_url = data.repos_url;
            
            githubFactory.getRepos(data.repos_url).then( 
                function(responseRepos){
                    console.log(responseRepos);
                }
            );
            
        };
    
        var displayError = function(response) {
            console.log(response.data);
            UIkit.notify(response.data.message);
        }
    };
    
    homeModule.controller("homeController", homeController);
    
}());