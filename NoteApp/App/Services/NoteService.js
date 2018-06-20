app.service("NoteService", function ($http, $q, $rootScope) {

    const getAllNotes = function () {
        var noteList = [];
        return $q((resolve, reject) => {
            $http.get(`http://localhost:49935/api/notes`).then(function (results) {
                var notes = results.data;
                Object.keys(notes).forEach(function (key) {
                    noteList.push(notes[key]);
                });
                console.log(noteList);
                resolve(noteList);
            }).catch(function (err) {
                reject("error in getAllNotes in Service", err);
            });
        });
    };

    return { getAllNotes };
});