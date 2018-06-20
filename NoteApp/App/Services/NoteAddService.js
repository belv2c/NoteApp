app.service("NoteAddService", function ($http, $q, $rootScope) {

    const addNote = function (note) {
        return $q((resolve, reject) => {
            $http.post(`http://localhost:49935/api/notes`, JSON.stringify(note)).then(function (results) {
                console.log("wow");
                resolve(results);
            }).catch(function (err) {
                reject("error in addNote in Service", err);
            });
        });
    };
    return { addNote };
});