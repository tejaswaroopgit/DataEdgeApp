myApp.factory('searchService', function ($http) {
    return {
        searchConsultant: function (searchObj,success,error) {
            console.log(searchObj.location);
            var location = searchObj.location;
            var domain = searchObj.domain;
            var visa = searchObj.visa;
            $http({
                url: '/consultants/searchConsultants/'+location +'/'+domain+'/'+visa,
                method: "GET"
               // params: { location: searchObj.location, domain: searchObj.domain, visa: searchObj.visa }
            }).then(success,error)

        }
    }
})


//+searchObj.location/ searchObj.domain/searchObj.visa


myApp.controller('searchCtrl', function ($scope, $location, consultantService, searchService) {

    var searchObj = {
        domain: null,
        visa: null,
        location: null
    };

    console.log(searchObj)

    $scope.searchConsultants = function (searchObj) {
        searchService.searchConsultant(searchObj, function (success) {
            console.log(success.data)
        });
    }
  

})
