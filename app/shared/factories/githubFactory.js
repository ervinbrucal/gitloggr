
(function() {

    var githubFactory = function($http) {

        //authenticates a user given a username and authtoken
        var authenticateUser = function(username, authtoken) {
            console.log("authenticating username: ", username, " authtoken: ", authtoken);

            var url = "https://api.github.com/user"

            var credentials = btoa(username + ':' + authtoken);
            var authorization = {'Authorization': 'Basic ' + credentials};
            var header = { headers: authorization}

            return $http.get(url, header)
                .then( function(response) {
                    return response.data;
                }
            );

        };
        
        var getRepos = function(repoUrl) {
            console.log("retrieving repo list");
            return $http.get(repoUrl).then(
                function(response) {
                    console.log("repos:", response.data);
                    return response.data;
                }
            );
        }
        
        var getCommits = function(commitsUrlFragment, authorName) {
            var commitUrl = "https://api.github.com/repos/" + commitsUrlFragment + "/commits?author=" + authorName
            console.info("GitHub commit URL:", commitUrl);
            return $http.get(commitUrl)
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            authenticateUser : authenticateUser,
            getRepos : getRepos,
            getCommits: getCommits
        };
    };
    
    
    
    var homeModule = angular.module("homeModule");
    homeModule.factory("githubFactory", githubFactory);

}());