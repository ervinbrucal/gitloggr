(function() {

    var homeModule = angular.module("homeModule");
    
    var homeController = function($scope, githubFactory) {
        $scope.username = "";
        $scope.authtoken = "";
        
        $scope.exportToCSV = function(username, authtoken) {
            githubFactory.authenticateUser(username, authtoken)
            .then(setUser, displayError);
        };

        var setUser = function(data) {
            console.log(data);
            $scope.commits = null
            $scope.login = data.login;
            $scope.avatar_url = data.avatar_url;
            $scope.repos_url = data.repos_url;
            
            githubFactory.getRepos(data.repos_url)
                .then(function(responseRepos){
                    console.log("repos", responseRepos);
                    $scope.repos = responseRepos;
                });
            
        };
        
        var organizeCommits = function(data) {
            var commits = [];
            
            for(var i=0; i < data.length; i++) {
                    commits.push(
                        {
                            date : new Date(data[i].commit.committer.date),
                            message : data[i].commit.message
                        }
                    );
            }
            
            return commits;
        }
        
        var setCommits = function(data) {
            
            if (data.length) {
                $scope.commits = organizeCommits(data);
            }
        }
    
        var displayError = function(response) {
            console.log(response.data);
            UIkit.notify(response.data.message);
        }
        
        $scope.update = function(selectedRepo) {
            $scope.commits = null
            githubFactory.getCommits(selectedRepo, $scope.login)
                .then(setCommits, displayError)
        }
    };
    
    homeModule.controller("homeController", homeController);
    
}());