
(function() {

    angular
        .module("homeModule")
        .factory("githubFactory", githubFactory);
    
    function githubFactory($http) {
        
        var service = {
            authenticateUser : authenticateUser,
            getRepos : getRepos,
            getCommits: getCommits
        };
        
        return service;
        
        //authenticates a user given a username and authtoken
        function authenticateUser(username, authtoken) {
            console.log("authenticating username: ", username, " authtoken: ", authtoken);

            var url = "https://api.github.com/user"

            var credentials = btoa(username + ':' + authtoken);
            var authorization = {'Authorization': 'Basic ' + credentials};
            var header = { headers: authorization }

            return $http.get(url, header)
                .then( function(response) {
                    return response.data;
                }
            );
        }
        
        function getRepos(repoUrl) {
            
            console.log("retrieving repo list");
            
            repoUrl = repoUrl + "?type=all";
            
            return $http.get(repoUrl).then(
                function(response) {
                    return response.data;
                }
            );
        }
        
        function getCommits(commitsUrlFragment, authorName) {
            var commitUrl = "https://api.github.com/repos/" + 
                commitsUrlFragment + "/commits?author=" + authorName
            
            return $http.get(commitUrl)
                .then(function(response) {
                    return response.data;
                });
        }
    } 
    

}());