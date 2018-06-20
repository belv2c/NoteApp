app.controller("NoteAddController", ["$scope", "$http", "$location", "$routeParams", "NoteAddService",
    function ($scope, $http, $location, $routeParams, NoteAddService) {


        $scope.addNote = function () {
            NoteAddService.addNote($scope.note).then(function () {
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