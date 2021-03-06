﻿app.service("NoteService", function ($http, $q, $rootScope) {

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


    //const update = function (noteId) {
    //    return $q((resolve, reject) => {
    //        $http.put(`http://localhost:49935/api/${noteId}`, JSON.stringify(noteId)).then(function (results) {
    //            resolve(results);
    //        }).catch(function (err) {
    //            reject("error in update in Service", err);
    //        });
    //    });
    //};

    //const update = function (note) {
    //    return $q((resolve, reject) => {
    //        $http.put(`http://localhost:49935/api/notes/${note.NoteId}`, JSON.stringify(note)).then(function (results) {
    //            resolve(results);
    //        }).catch(function (err) {
    //            reject("error in update in Service", err);
    //        });
    //    });
    //};

    const deleteNote = function (noteId) {
        return $q((resolve, reject) => {
            $http.delete(`http://localhost:49935/api/notes/${noteId}`).then(function (results) {
                resolve(results);
            }).catch(function (err) {
                reject("error in deleteNote in Service", err);
            });
        });
    };

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


    return { getAllNotes, addNote, deleteNote, getNoteById };
});