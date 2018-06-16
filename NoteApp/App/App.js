﻿var app = angular.module("NoteApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "/App/Partials/home.html",
            controller: "HomeController"
        })

        .when("/notes",
        {
            templateUrl: "/App/Partials/note.html",
            controller: "NoteController"
        })
        .otherwise('/');
}]);
