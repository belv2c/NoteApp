app.controller("NoteAddController", ["$scope", "$http", "$location", "$routeParams", "NoteService",
    function ($scope, $http, $location, $routeParams, NoteService) {

        $scope.addNote = function () {
            NoteService.addNote($scope.note).then(function () {
                $scope.navigateToNoteList();
            }).catch(function (err) {
                console.log("Error in NoteAddController", err);
            });
        };

        $scope.navigateToNoteList = function () {
            $location.path('/notes');
        };

    }
]);