"use strict";

const dombuilder = require("./dom");
const blogs = require("./blog");

$("#search-btn").click((event) => {
	let allBlogs = blogs.getBlogs();
	filterResults(allBlogs);
});

$("#input-field").keypress((event) => {
	let allBlogs = blogs.getBlogs();
	if(event.key === "Enter") {
	filterResults(allBlogs);
	}
});

const filterResults = (allBlogs) => {
	let txt = $("#input-field").val();
	txt = txt.toLowerCase();
	let results = allBlogs.filter((thing) => {
		return thing.tags.indexOf(txt)>-1;
	});
	$("#blog-holder").html = "";
	dombuilder.blogDomString(results);
	};