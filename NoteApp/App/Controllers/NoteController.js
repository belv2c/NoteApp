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
        
        $scope.navigateToNoteList = function () {
            $location.path('/notes');
        };

        $scope.navigateToNoteForm = function () {
            $location.path(`/noteadd`);
        };

        //$scope.navigateToNoteDetail = function () {
        //    $location.path(`/notedetail`);
        //};

        $scope.navigateToNoteDetail = function (noteId) {
            $location.path(`/notedetail/${noteId}`);
        };

    }
])