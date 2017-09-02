var blogPosts = [];
var blogHolder = document.getElementById("blog-holder");

// XHR
function blogDomString(blogs){
		var domString = "";
	for (var i = 0; i < blogs.length; i++){
		var currentBlog = blogs[i];

		domString +=			'<section class="blog-card">';
		domString +=				'<div>';
		domString +=				  '<h4>' + currentBlog.title +'</h4>';
		domString +=					'<h6>' + currentBlog.date +'</h6>';
		domString +=				'</div>';
		domString +=				'<div>';
		domString +=					'<p>' + currentBlog.content + '</p>';
		domString +=				'</div>';
		domString +=			'</section>';

	}
	blogHolder.innerHTML += domString;

}
function executeAfterFileLoads() {
	var blogContent = JSON.parse(this.responseText).blogs;
	blogDomString(blogContent)

}
function executeAfterCodeBreaks () {
	console.log("shits broke yo");
}

var requestBlogPosts = new XMLHttpRequest();
requestBlogPosts.addEventListener("load", executeAfterFileLoads);
requestBlogPosts.addEventListener("error", executeAfterCodeBreaks);
requestBlogPosts.open("GET", "blog-posts.json");
requestBlogPosts.send();