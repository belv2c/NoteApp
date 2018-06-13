var app = angular.module("NoteApp", ["ngRoute", "ui.bootstrap"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "/app/partials/home.html",
            controller: "HomeController"
        })

        .otherwise('/');
}]);