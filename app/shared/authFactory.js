var authFactory = function($http) {

    //authenticates a user given a username and password
    //sends the request to github
    var authenticateUser = function(username, password) {
        console.log("authenticating username: ", username, " password: ", password);
        
        var url = "https://api.github.com/user"
        
        var credentials = btoa(username + ':' + password);
        var authorization = {'Authorization': 'Basic ' + credentials};
        var header = { headers: authorization}
        
        $http.get(url, header).then(
            function(response) {
                console.log (response.data);
            }
        );

    };
    
    return {
        authenticateUser : authenticateUser
    };
};
