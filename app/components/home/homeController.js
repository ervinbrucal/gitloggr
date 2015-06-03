(function() {

    angular
        .module("homeModule")
        .controller("homeController", homeController)
    
    function homeController($scope, githubFactory, commitFactory) {
        $scope.username = ""
        $scope.authtoken = ""
        $scope.exportToCSV = exportToCSV
        $scope.update = update
        
        function exportToCSV(username, authtoken) {
            githubFactory.authenticateUser(username, authtoken)
            .then(setUser, displayError);
        };
        
        function update(selectedRepo) {
            $scope.commits = null
            githubFactory
                .getCommits(selectedRepo, $scope.login)
                .then(setCommits, displayError)                
        }

        function setUser(data) {
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
        
        function displayError(response) {
            console.log(response.data);
            UIkit.notify(response.data.message);
        }
        
        function setCommits(data) {
            $scope.userCommits = commitFactory.groupByDate(data);
        };
        
    }
    
}());