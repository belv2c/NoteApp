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


        //$scope.update = function () {
        //    NoteService.update($scope.note.noteId).then(function () {
        //                    $location.path(`notedetail`);
        //    }).catch(function (err) {
        //        console.log("error in updateEmployee in controller", err);
        //    });
        //};


        $scope.editNote = function (note) {
            console.log("this works");
            $http.put(`api/notes/${$scope.note.NoteId}`, JSON.stringify(note)).then(function (results) {
                console.log(results);
                $location.path("/notes");
            });
        };

        $scope.deleteNote = function () {
            NoteService.deleteNote($scope.note.NoteId).then(function (results) {
                $location.url(`/notes`);
            }).catch(function (err) {
                console.log("error in deleteComputer in controller", err);
            });
        };

        $scope.navigateToNoteList = function () {
            $location.path(`/notes`);

        };

    }
]);