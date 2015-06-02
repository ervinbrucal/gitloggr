(function() {

    var homeModule = angular.module("homeModule");
    
    var commitFactory  = function(dateFactory) {
        
        var organizeCommitsByDate = function(data) {
            
            var commitsMap = {}
            for(var i=0; i < data.length; i++) {
                
                var dateCommitted = new Date(data[i].commit.committer.date);
                var currFilterDate = dateFactory.formatShortDate(dateCommitted);
                var commitMessage = data[i].commit.message;
                
                if (!commitsMap[currFilterDate]) {
                    commitsMap[currFilterDate] = []
                }
                
                commitsMap[currFilterDate].push(commitMessage)
            }
            
            return commitsMap;
        }
        
        return {
            groupByDate : organizeCommitsByDate
        };
        
    };
    
    homeModule.factory("commitFactory", commitFactory);
    
}());