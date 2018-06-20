app.controller("NoteAddController", ["$scope", "$http", "$location", "$routeParams", "NoteService",
    function ($scope, $http, $location, $routeParams, NoteService) {

        $http.get("/api/notes").then(function (result) {
            $scope.notes = result.data;
            console.log(result.data);
        }).catch(function (err) {
            console.log(err);
        });

        $scope.addNote = function () {
            NoteService.addNote($scope.note).then(function () {
                $scope.navigateToNoteList();
            }).catch(function (err) {
                console.log("Error in NoteAddController", err);
            });
        };

        $scope.navigateToNoteList = function () {
            $location.path('/note');
        };

    }
]);