"use strict";

const blogDomString = (blogs) => {
	let domString = "";
	for (let i = 0; i < blogs.length; i++){
		let currentBlog = blogs[i];

    domString +=		`<div class="col-sm-4">`;
    domString +=			`<div class="panel panel-default">`;
    domString +=				`<div class="panel-heading">`;
    domString +=					`<h4 class="panel-title ">${currentBlog.title}</h4>`;
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
};

const projectsDomString = (projects) => {
	let domStrang = "";
	projects.forEach((project) => {
		domStrang +=	`<div class="col-sm-4">`;
		domStrang +=		`<div class="panel panel-default">`;
		domStrang +=			`<div class="panel-heading">`;
		domStrang +=				`<h4 class="panel-title text-center">${project.title}</h4>`;
		domStrang +=				`<img src="${project.path}" alt="project screenshot" class="product-img center-block">`;
		domStrang +=			`</div>`;
		domStrang +=			`<div class="panel-body project-panel">`;
		domStrang +=				`<p>${project.description}</p>`;
		domStrang +=				`<a target=_blank href=${project.link}>link</a>`;
		domStrang +=			`</div>`;
		domStrang +=		`</div>`;
		domStrang +=	`</div>`;
	});
	$("#blog-holder").empty();
	$("#blog-holder").append(domStrang);
};

module.exports = { blogDomString, projectsDomString};