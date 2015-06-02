(function() {

    var homeModule = angular.module("homeModule");
    
    var homeController = function($scope, githubFactory, $filter) {
        $scope.username = "breisa.moralde@orangeandbronze.com";
        $scope.authtoken = "b2b46f5d269a17350a1d23da798715839b136e6c";
        
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
            var commits = new Map();
            
            for(var i=0; i < data.length; i++) {
                
                var dateCommitted = new Date(data[i].commit.committer.date);
                var currFilterDate = $filter('date')(dateCommitted, 'MM-dd-yyyy');
                var commitMessage = data[i].commit.message;
                
                if (!commits.get(currFilterDate)) {
                    commits.set(currFilterDate, new Array())
                }
                
                commits.get(currFilterDate).push(commitMessage)
            }
            
            $scope.userCommits = commits;
            console.log("scope", $scope.userCommits)

        }
    
        var displayError = function(response) {
            console.log(response.data);
            UIkit.notify(response.data.message);
        }
        
        $scope.update = function(selectedRepo) {
            $scope.commits = null
            githubFactory
                .getCommits(selectedRepo, $scope.login)
                .then(organizeCommits, displayError)                
        }
    };
    
    homeModule.controller("homeController", homeController);
    
}());