app.controller("HomeController", ["$scope", "$http", "HomeService",
    function ($scope, $http, HomeService) {
        $scope.message = "this is a test";

        var getAllNotes = function () {
            HomeService.getAllNotes().then(function (results) {
                $scope.notes = results;
            }).catch(function (error) {
                console.log("error in getAllNotes", error);
            });
        }();

        const addNewNote = function () {
            HomeService.addNewNote($scope.note).then(function (results) {
                console.log(results);
            }).catch(function (err) {
                console.log("error in addDepartment in controller", err);
            });
        };

    }
])