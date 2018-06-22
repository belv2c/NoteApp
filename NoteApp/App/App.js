var app = angular.module("NoteApp", ["ngRoute"]);

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

        .when("/noteadd",
        {
            templateUrl: "/App/Partials/noteadd.html",
            controller: "NoteAddController"
        })

        .when("/notedetail/:noteId",
        {
            templateUrl: "/App/Partials/notedetail.html",
            controller: "NoteController"
        })

        .when("/notes/:noteId",
        {
            templateUrl: "/App/Partials/note.html",
            controller: "NoteController"
        })

        .when("/notedetail/:noteId",
        {
            templateUrl: "/App/Partials/notedetail.html",
            controller: "NoteDetailController"
        })

        .otherwise('/');
}]);
