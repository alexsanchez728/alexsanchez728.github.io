"use strict";

let firebaseKey = "";

const setKey = (key) => {
    firebaseKey = key;
};

const getBlogs = () => {
    let blogs = [];
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((results) => {
            if (results != null) {
                Object.keys(results).forEach((key) => {
                    results[key].id = key;
                    blogs.push(results[key]);
                });
            }
            resolve(blogs);
        }).catch((err) => {
            reject(err);
        });
    });
};

module.exports = {setKey, getBlogs};