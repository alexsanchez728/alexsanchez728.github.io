"use strict";

const blogger = require("./blog");
const projectPage = require("./projects");
// const firebaseApi = require("./firebaseApi");


const blogsOrProjects = () => {
	if (document.querySelector("title").innerHTML === "Blog") {
		blogger.checkOutTheseBlogs();
	} else if (document.querySelector("title").innerHTML === "Projects") {
		projectPage.checkOutTheseProjects();
	}
};

const init = () => {
	blogsOrProjects();
};

module.exports = {init};