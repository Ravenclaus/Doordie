var app = angular.module("Doordie", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/",
        {
            templateUrl: "app/Partials/Login.html",
            controller: "LoginController"
        })
        .when("/home",
        {
            templateUrl: "app/home.html",
            controller: "homeController"
        })
        .when("/signup",
        {
            templateUrl: "app/Partials/SignUp.html",
            controller: "SignUpController"
        })
}])