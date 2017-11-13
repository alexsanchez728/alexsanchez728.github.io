"use strict";

const dombuilder = require("./dom");
const firebaseApi = require("./firebaseApi");

let blogs = [];

// const blogs = require("./blog");
const blogsOrProjects = () => {
	firebaseApi.getBlogs().then((_blogs) => {
		blogs = _blogs;
		dombuilder.blogDomString(blogs);
	}).catch((err) => {
		console.log("error in blogsOrProjects", err);
	});
};

// $("#search-btn").click((event) => {
// 	let allBlogs = blogs.getBlogs();
// 	filterResults(allBlogs);
// });

// $("#input-field").keypress((event) => {
// 	let allBlogs = blogs.getBlogs();
// 	if(event.key === "Enter") {
// 	filterResults(allBlogs);
// 	}
// });

// const filterResults = (allBlogs) => {
// 	let txt = $("#input-field").val();
// 	txt = txt.toLowerCase();
// 	let results = allBlogs.filter((thing) => {
// 		return thing.tags.indexOf(txt)>-1;
// 	});
// 	$("#blog-holder").html = "";
// 	dombuilder.blogDomString(results);
// 	};

const init = () => {
	blogsOrProjects();
};

module.exports = {init};