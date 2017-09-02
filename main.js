const blogHolder = document.getElementById("blog-holder");

// XHR
const blogDomString = (blogs) => {
	let domString = "";
	for (let i = 0; i < blogs.length; i++){
		let currentBlog = blogs[i];

		domString +=			`<section class="blog-card">`;
		domString +=				`<div>`;
		domString +=				  `<h4>${currentBlog.title}</h4>`;
		domString +=					`<h6>${currentBlog.date}</h6>`;
		domString +=				`</div>`;
		domString +=				`<div>`;
		domString +=					`<p>${currentBlog.content}</p>`;
		domString +=				`</div>`;
		domString +=			`</section>`;

	}
	blogHolder.innerHTML += domString;

}
function executeAfterFileLoads () {
	const blogContent = JSON.parse(this.responseText).blogs;
	blogDomString(blogContent)

}
const executeAfterCodeBreaks = () => {
	console.log("It's broke yo");
}

let requestBlogPosts = new XMLHttpRequest();
requestBlogPosts.addEventListener("load", executeAfterFileLoads);
requestBlogPosts.addEventListener("error", executeAfterCodeBreaks);
requestBlogPosts.open("GET", "blog-posts.json");
requestBlogPosts.send();