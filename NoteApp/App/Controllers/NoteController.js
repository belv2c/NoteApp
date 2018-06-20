app.controller("NoteController", ["$scope", "$http", "$location", "NoteService",
    function ($scope, $http, $location, NoteService) {
        $scope.message = "this is a test";

        var getAllNotes = function () {
            NoteService.getAllNotes().then(function (results) {
                $scope.notes = results;
            }).catch(function (error) {
                console.log("error in getAllNotes", error);
            });
        }();

        //const addNote = function () {
        //    NoteService.addNote($scope.note).then(function (results2) {
        //        console.log("This is from addnote", results2);
        //    }).catch(function (err) {
        //        console.log("error in addDepartment in controller", err);
        //    });
        //};

        $scope.navigateToHome = function () {
            $location.path(`/Home`);
        };

        $scope.navigateToNoteForm = function () {
            $location.path(`/noteadd`);
        };

    }
])