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

        //$scope.navigateToHome = function () {
        //    $location.path(`/Home`);
        //};

        $scope.navigateToNoteForm = function () {
            $location.path(`/noteadd`);
        };

    }
])