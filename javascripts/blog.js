"use strict";

const dombuilder = require("./dom");
const firebaseApi = require("./firebaseApi");

let blogs = [];

const checkOutTheseBlogs = () => {

	firebaseApi.getContent("blogs").then((_blogs) => {

		blogs = _blogs;
		dombuilder.blogDomString(blogs);
		blogEvents();

	}).catch((err) => {
		console.log("error in blogsOrProjects", err);
	});	
};

const blogEvents = () => {

	$("#search-btn").click(() => {

		filterResults(blogs);
	});


	$("#input-field").keypress((event) => {

		if (event.key === "Enter") {
			event.preventDefault();
			filterResults(blogs);
		}
	});


	const filterResults = (allBlogs) => {

		let txt = $("#input-field").val();
		txt = txt.toLowerCase();

		let results = blogs.filter((thing) => {

			return thing.tags.indexOf(txt) > -1;
		});

		$("#blog-holder").html = "";
		dombuilder.blogDomString(results);
	};

	$("body").on("click", ".panel", (event) => {

		let clickedBlog = event.currentTarget.innerHTML;
		$("#blogJumbotron").html(clickedBlog);
	});
}; // end blogEvents()



module.exports = { checkOutTheseBlogs};