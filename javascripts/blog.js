"use strict";

const dombuilder = require("./dom");

let blogContent = [];

$.get("../db/blog-posts.json").done((data) => {
	blogContent = data.blogs;
	dombuilder.blogDomString(blogContent);
}).fail((error) => {
	console.log(error);
});

const getBlogs = () => {
	return blogContent;
};

module.exports = {getBlogs};