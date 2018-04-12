myApp.factory('consultantService', function ($http) {

    return {
        registerConsultant: function () {
            alert("entered the service..!!")
        },

        getConsultantDetails : function () {
            alert("enterd the get clients service..!!")
        }
    }

})

myApp.controller('consultantRegisterCtrl', function ($scope, $location, consultantService) {

    $scope.getConsultantsDetails=function(){
        
        consultantService.getConsultantDetails();
    }

    $scope.getConsultantsDetails();
 
})

myApp.controller('addEditConsultantsCtrl', function ($scope, $location, consultantService) {

    $scope.submitConsultantDetails = function () {
        alert();
        consultantService.registerConsultant();
        $location.path('/consultantList')

    }

    $scope.cancel = function () {
        alert();
        $location.path('/consultantList')
    }

})