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

 

    //var updateNote = function (note) {
    //    return $q((resolve, reject) => {
    //        $http.put(`http://localhost:49935/api/notes`, JSON.stringify(note)).then(function (results) {
    //            resolve(results);
    //        }).catch(function (err) {
    //            reject("error in getNoteById in Service", err);
    //        });
    //    });
    //}

    //const deleteNote = function (noteId) {
    //    return $q((resolve, reject) => {
    //        $http.delete(`http://localhost:49935/api/notes/${noteId}`).then(function (results) {
    //            resolve(results);
    //        }).catch(function (err) {
    //            reject("error in deleteNote in Service", err);
    //        });
    //    });
    //};

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

    const getNoteById = function (noteId) {
        return $http.get(`/api/notes/${noteId}`);
    };

    //var getNoteById = function (noteId) {
    //    return $q((resolve, reject) => {
    //        $http.get(`http://localhost:49935/api/notes/${noteId}`).then(function (results) {
    //            resolve(results[0]);
    //        }).catch(function (err) {
    //            reject("error in getNoteById in Service", err);
    //        });
    //    });
    //};


    return { getAllNotes, addNote, getNoteById };
});