const blogHolder = document.getElementById("blog-holder");
const jumboBlog = document.getElementById("blogJumbotron");
const blogSearchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("input-field");

// XHR
const blogDomString = (blogs) => {
	let domString = "";
	for (let i = 0; i < blogs.length; i++){
		let currentBlog = blogs[i];

		// domString +=			`<div class="col-sm-6 col-md-4 blog-card" id="blognumber-${[i]}">`;
		// domString +=		`<div class="col-sm-4>`;
		domString +=		`<div class="panel panel-default col-sm-4 blog-card" id="blog-number${[i]}">`;
		domString +=			`<div class="panel-heading">`;
		domString +=				 `<h4 class="panel-title">${currentBlog.title}</h4>`;
		domString +=				`<h6>${currentBlog.date}</h6>`;
		domString +=			`</div>`;
		// domString +=				`</div>`;
		domString +=			`<div class="panel-body">`;
		domString +=				`<p>${currentBlog.content}</p>`;
		domString +=			`</div>`;
		domString +=		`</div>`;
		// domString +=		`</div>`;

	}
	blogHolder.innerHTML += domString;
}

const addClickListener = () => {

	let blogCards = document.getElementsByClassName("blog-card");
	for (var i = 0; i < blogCards.length; i++) {

	  blogCards[i].addEventListener("click", function (event) {

		let clickedBlog = event.currentTarget.innerHTML;
		jumboBlog.innerHTML = clickedBlog;

	  });
	};
}
// const searchTextListener = (allBlogs) => {
// 	//once you hit enter, THEN it grabs the input value
// 	inputField.addEventListener('keyup', function(event){

// 			var txt = inputField.value;
// 			console.log("get input text", txt)
// 			//by default, filter loops through the array
// 				//thing = the current planet that I'm on, does it fit?
// 			var results = allBlogs.filter(function(thing) {
// 				//if the indexOf actually has something, than it doesn't equal -1 which means return that
// 				return thing.title.indexOf(txt)>-1;
// 			})
// 			// pass in the shortened array to print
// 			blogDomString(results);
// 			console.log(results);
// 	})
// }
const searchButtonListener = (allBlogs) => {
	blogSearchBtn.addEventListener("click", (event) => {

		var txt = inputField.value;
		txt = txt.toLowerCase();
					var results = allBlogs.filter(function(thing) {
				//if the indexOf actually has something, than it doesn't equal -1 which means return that
				return thing.content.indexOf(txt)>-1;
			})
			// pass in the shortened array to print
			blogHolder.innerHTML = "";
			blogDomString(results);
			console.log(results);
	})
}

function executeAfterFileLoads () {
	const blogContent = JSON.parse(this.responseText).blogs;

	blogDomString(blogContent)
	addClickListener();
	// searchTextListener(blogContent);
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