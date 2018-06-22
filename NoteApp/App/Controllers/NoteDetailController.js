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


        //$scope.deleteNote = function () {
        //    NoteService.deleteNote($routeParams.id).then(function (results) {
        //        console.log(results);
        //    }).catch(function (err) {
        //        console.log("error in deleteNote in controller", err);
        //    });
        //};

        $scope.navigateToNoteList = function () {
            $location.path(`/noteadd`);
        };

    }
]);