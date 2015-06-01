var authFactory = function($http) {

    //authenticates a user given a username and password
    //sends the request to github
    var authenticateUser = function(username, authtoken) {
        console.log("authenticating username: ", username, " authtoken: ", authtoken);
        
        var url = "https://api.github.com/user"
        
        var credentials = btoa(username + ':' + authtoken);
        var authorization = {'Authorization': 'Basic ' + credentials};
        var header = { headers: authorization}
        
        return $http.get(url, header)
            .then( function(response) {
                console.log("Response",response)
                return response.data;
            }
        );

    };
    
    //-----------------------------------------------------------
    
    return {
        authenticateUser : authenticateUser
    };
};
