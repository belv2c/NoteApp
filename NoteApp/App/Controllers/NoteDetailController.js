app.controller("NoteDetailController", ["$scope", "$http", "$location", "$routeParams", "NoteService",
    function ($scope, $http, $location, $routeParams, NoteService) {

        var getNoteById = function () {
            NoteService.getNoteById($routeParams.noteId).then(function (results) {
                $scope.notes = results.data;
                console.log("note", results.data[0]);
            }).catch(function (err) {
                console.log("error in getNoteById in controller", err);
            });
        }();

        $scope.update = (note) => {
            NoteService.update(note).then(function (results) {
                $location.url(`notedetail`);
            }).catch(function (err) {
                console.log("error in updateNote in controller", err);
            })
        };

        $scope.deleteNote = function () {
            NoteService.deleteNote($scope.note.NoteId).then(function (results) {
                $location.url(`notes`);
            }).catch(function (err) {
                console.log("error in deleteComputer in controller", err);
            });
        };

        $scope.navigateToNoteList = function () {
            $location.path(`/noteadd`);
        };

    }
]);