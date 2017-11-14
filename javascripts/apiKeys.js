"use strict";

const firebaseApi = require("./firebaseApi");

const apiKeys = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/apiKeys.json").done((data) => {
            resolve(data.apiKeys);
        }).fail((error) => {
            reject(error);
        });
    });
};

const retrieveKey = () => {
    return new Promise((resolve, reject) => {
    apiKeys().then((results) => {
        firebaseApi.setKey(results.firebaseKeys);
        firebase.initializeApp(results.firebaseKeys);
		resolve();
    });

    }).catch((error) => {
        console.log("error", error);
    });
};

module.exports = { retrieveKey };