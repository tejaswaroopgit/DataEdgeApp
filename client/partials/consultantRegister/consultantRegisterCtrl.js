myApp.factory('consultantService', function ($http) {

    return {
        registerConsultant: function () {
           
        },

        getConsultantDetails : function () {
           
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
      
        consultantService.registerConsultant();
        $location.path('/consultantList')

    }

    $scope.cancel = function () {
       
        $location.path('/consultantList')
    }

})