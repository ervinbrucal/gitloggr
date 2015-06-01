var homeController = function($scope, authService) {
    $scope.message = "this is a home controller";
    $scope.username = "";
    $scope.password = "";
    
    $scope.exportToCSV = function(username, password) {
        console.log("exporting to csv");
        var response = authService.authenticateUser(username, password);
        
    };
    
};