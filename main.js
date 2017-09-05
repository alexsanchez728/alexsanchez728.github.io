const blogHolder = document.getElementById("blog-holder");
const jumboBlog = document.getElementById("blogJumbotron");
const blogSearchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("input-field");

// XHR
const blogDomString = (blogs) => {
	let domString = "";
	for (let i = 0; i < blogs.length; i++){
		let currentBlog = blogs[i];

    domString +=		`<div class="col-sm-4">`
    domString +=			`<div class="panel panel-default">`
    domString +=				`<div class="panel-heading">`
    domString +=					`<h4 class="panel-title">${currentBlog.title}</h4>`
   	domString +=					`<h6>${currentBlog.date}</h6>`
    domString +=        `</div>`
    domString +=        `<div class="panel-body">`
    domString +=          `<p>${currentBlog.content}</p>`    
    domString +=        `</div>`
    domString +=    	`</div>`
    domString +=		`</div>`
	}
	blogHolder.innerHTML += domString;
	addClickListener();
}

const addClickListener = () => {

	let blogCards = document.getElementsByClassName("panel");
	for (let i = 0; i < blogCards.length; i++) {

	  blogCards[i].addEventListener("click", (event) => {

		let clickedBlog = event.currentTarget.innerHTML;
		jumboBlog.innerHTML = clickedBlog;

	  });
	};
}

// Enter to search doesn't work because the button is in a form
// Is there a way to disable default actions so I can bind the enter key here? 
// const inputFieldListener = (allBlogs) => {
// 	inputField.addEventListener("keypress", (event) => {
// 		if (event.key ===  "Enter") {
// 		filterResults(allBlogs);
// 		}
// 	})
// }
const searchButtonListener = (allBlogs) => {
	blogSearchBtn.addEventListener("click", () => {
		filterResults(allBlogs);
	})
}
const filterResults = (allBlogs) => {
	let txt = inputField.value;
	txt = txt.toLowerCase();
	let results = allBlogs.filter((thing) => {
		return thing.tags.indexOf(txt)>-1;
	})
	blogHolder.innerHTML = "";
	blogDomString(results);
	console.log(results);
	}

function executeAfterFileLoads () {
	const blogContent = JSON.parse(this.responseText).blogs;

	blogDomString(blogContent)
	searchButtonListener(blogContent);
}
const executeAfterCodeBreaks = () => {
	console.log("It's broke yo");
}

let requestBlogPosts = new XMLHttpRequest();
requestBlogPosts.addEventListener("load", executeAfterFileLoads);
requestBlogPosts.addEventListener("error", executeAfterCodeBreaks);
requestBlogPosts.open("GET", "blog-posts.json");
requestBlogPosts.send();