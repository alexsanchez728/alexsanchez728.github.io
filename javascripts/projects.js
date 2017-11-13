"use strict";

const dombuilder = require("./dom");
const firebaseApi = require("./firebaseApi");

let projects = [];

const checkOutTheseProjects = () => {
    firebaseApi.getContent("projects").then((_projects) => {
        projects = _projects;
        dombuilder.projectsDomString(projects);
    }).catch((error) => {
        console.log("error in checkoutTheseProjects", error);
    });
};

module.exports = {checkOutTheseProjects};