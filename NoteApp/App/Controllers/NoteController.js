app.controller("NoteController", ["$scope", "$http", "$location", "$routeParams", "NoteService",
    function ($scope, $http, $location, $routeParams, NoteService) {
        $scope.message = "this is a test";

        var getAllNotes = function () {
            NoteService.getAllNotes().then(function (results) {
                $scope.notes = results;
            }).catch(function (error) {
                console.log("error in getAllNotes", error);
            });
        }();

        $scope.deleteNote = function () {
            NoteService.deleteNote($routeParams.id).then(function (results) {
                console.log(results);
                $scope.navigateToNoteList();
            }).catch(function (err) {
                console.log("error in deleteNote in controller", err);
            });
        };

        $scope.navigateToNoteList = function () {
            $location.path('/notes');
        };

        $scope.navigateToNoteForm = function () {
            $location.path(`/noteadd`);
        };

    }
])