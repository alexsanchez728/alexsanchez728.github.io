"use strict";

const blogDomString = (blogs) => {
	let domString = "";
	for (let i = 0; i < blogs.length; i++){
		let currentBlog = blogs[i];

    domString +=		`<div class="col-sm-4">`;
    domString +=			`<div class="panel panel-default">`;
    domString +=				`<div class="panel-heading">`;
    domString +=					`<h4 class="panel-title">${currentBlog.title}</h4>`;
   	domString +=					`<h6>${currentBlog.date}</h6>`;
    domString +=        `</div>`;
    domString +=        `<div class="panel-body">`;
    domString +=          `<p>${currentBlog.content}</p>`;   
    domString +=        `</div>`;
    domString +=    	`</div>`;
    domString +=		`</div>`;
	}
	$("#blog-holder").empty();
	$("#blog-holder").append(domString);
	addClickListener();
};

const addClickListener = () => {

	  $("body").on("click", ".panel", (event) => {
		let clickedBlog = event.currentTarget.innerHTML;
		$("#blogJumbotron").html(clickedBlog);
	  });
};

module.exports = {blogDomString};