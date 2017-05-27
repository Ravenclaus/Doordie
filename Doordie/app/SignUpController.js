﻿app.controller("SignUpController", ["$scope", "$http", "$location",
    function ($scope, $http, $location) {

        $scope.signUp = function () {
            console.log("yay bin");
            $http({
                url: "/api/Account/Register",
                method: "POST",
                data: {
                    "Email": $scope.Email,
                    "Password": $scope.Password,
                    "ConfirmPassword": $scope.ConfirmPassword
                }
            })
            .then(function (result) {
                console.log(result);
            });

        }
    }]);