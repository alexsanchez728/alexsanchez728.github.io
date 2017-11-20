"use strict";

let firebaseKey = "";

const setKey = (key) => {
    firebaseKey = key;
};


// added an argument to query on whether the use selected the blog page or the project page
const getContent = (choice) => {
    let toDisplay = [];
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/${choice}.json`).then((results) => {
            if (results != null) {
                Object.keys(results).forEach((key) => {
                    results[key].id = key;
                    toDisplay.push(results[key]);
                });
            }
            resolve(toDisplay);
        }).catch((err) => {
            console.log("error in blerg", err);
            reject(err);
        });
    });
};

module.exports = {setKey, getContent};