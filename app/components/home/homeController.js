var homeController = function($scope, authService) {
    $scope.username = "";
    $scope.authtoken = "";
    
    $scope.message = "test";
//    $scope.user = "";
    
    $scope.exportToCSV = function(username, authtoken) {
        authService.authenticateUser(username, authtoken)
        .then(function(response) {
            $scope.user = response
        });
    };
    
};