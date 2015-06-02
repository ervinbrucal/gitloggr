
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

        return {
            authenticateUser : authenticateUser
        };
    };
    
    
    
    var homeModule = angular.module("homeModule");
    homeModule.factory("githubFactory", githubFactory);

}());