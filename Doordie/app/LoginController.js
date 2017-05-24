(function () {
    angular.module('Doordie')
        .controller('LoginController', LoginController);

    LoginController.$inject = ["$scope"];

    function LoginController($scope) {
        $scope.testLogin = "testing login";
    }

})();