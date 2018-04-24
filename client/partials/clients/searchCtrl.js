myApp.factory('searchService', function ($http) {
    return {
        searchConsultant: function (searchObj, success, error) {
            console.log(typeof( searchObj.location) + typeof( searchObj.domain) + searchObj.visa);
            var location = searchObj.location;
            var domain = searchObj.domain;
            var visa = searchObj.visa;

            if (location == undefined ) {
                console.log("if location loop entered...!!")
                location = "null";
            }
            if (domain == undefined) {
                console.log("if domain loop entered...!!")
                domain = "null";
            }
            if (visa == undefined ) {
                console.log("if visa loop entered...!!")
                visa = "null";
            }
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

        console.log(searchObj.location + searchObj.domain + searchObj.visa)
        searchService.searchConsultant(searchObj, function (success) {
            console.log(success.data)
            $scope.searchLists = success.data;
        });
        $scope.searchObj = {
            domain: null,
            location: null,
            visa: null
        }
    }
  

})
