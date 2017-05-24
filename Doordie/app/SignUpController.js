(function () {
    angular.module('Doordie')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ["$scope"];

    function SignUpController($scope) {
        $scope.testSignUp = "testing SignUp";
    }

})();