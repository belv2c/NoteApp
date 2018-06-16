app.controller("NoteController", ["$scope", "$http", "NoteService",
    function ($scope, $http, NoteService) {
        $scope.message = "this is a test";

        var getAllNotes = function () {
            NoteService.getAllNotes().then(function (results) {
                $scope.notes = results;
            }).catch(function (error) {
                console.log("error in getAllNotes", error);
            });
        }();

        const addNote = function () {
            NoteService.addNote($scope.note).then(function (results) {
                console.log(results);
            }).catch(function (err) {
                console.log("error in addDepartment in controller", err);
            });
        };

    }
])