(function(){
    
    angular
        .module("homeModule")
        .factory("dateFactory", dateFactory);
    
    function dateFactory($filter) {
        
        var service = {
            formatShortDate : formatShortDate
        }
        
        return service;
        
        //format date to 'MM-dd-yyyy'
        function formatShortDate(dateGiven) {
            return $filter('date')(dateGiven, 'MM-dd-yyyy');
        };
        
    };
    
}());
