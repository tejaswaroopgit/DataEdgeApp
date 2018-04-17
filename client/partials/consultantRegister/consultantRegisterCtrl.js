myApp.factory('consultantService', function ($http) {

    return {
        registerConsultant: function () {
           
        },

        getConsultantDetails: function (success, error) {
            $http({
                url: '/consultants/getConsultantDetails',
                method:"GET"
            }).then(success,error)
           
        }
    }

})

myApp.controller('consultantRegisterCtrl', function ($scope, $location, consultantService) {

    $scope.consultant = []

    $scope.getConsultantsDetails = function () {

        consultantService.getConsultantDetails(function (success) {
            console.log(success.data)
            $scope.consultant = success.data

            $scope.curPage = 1,
                $scope.itemsPerPage = 100,
                $scope.maxSize = 5;

            $scope.numOfPages = function () {
                return Math.ceil($scope.consultant.length / $scope.itemsPerPage);

            };

            $scope.$watch('curPage + numPerPage', function () {
                var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                    end = begin + $scope.itemsPerPage;

                $scope.filteredItems = $scope.consultant.slice(begin, end);
            });
        })

     
    }
    $scope.getConsultantsDetails();


});

   


myApp.controller('addEditConsultantsCtrl', function ($scope, $location, consultantService) {

    $scope.submitConsultantDetails = function () {
      
        consultantService.registerConsultant();
        $location.path('/consultantList')

    }

    $scope.cancel = function () {
       
        $location.path('/consultantList')
    }

})