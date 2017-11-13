"use strict";

// const dombuilder = require("./dom");
const blogger = require("./blog");
const projectPage = require("./projects");
// const firebaseApi = require("./firebaseApi");


// const blogs = require("./blog");
const blogsOrProjects = () => {
	if (document.querySelector("title").innerHTML === "Blog") {
		blogger.checkOutTheseBlogs();
		blogger.blogEvents();
	} else if (document.querySelector("title").innerHTML === "Projects") {
		projectPage.checkOutTheseProjects();
	}
};



const init = () => {
	blogsOrProjects();
};

module.exports = {init};