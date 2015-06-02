(function(){
    
    var homeModule = angular.module("homeModule");
    
    var dateFactory = function($filter) {
        
        //format date to 'MM-dd-yyyy'
        var formatShortDate = function(dateGiven) {
            return $filter('date')(dateGiven, 'MM-dd-yyyy');
        };
        
        return {
            formatShortDate : formatShortDate
        };
    };
    
    homeModule.factory("dateFactory", dateFactory);
    
}());
