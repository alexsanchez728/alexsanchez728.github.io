var blogs = [];

var blog5 = {
  title: "Blog 5",
  date: "Posted: 7/24/17",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus.</p>"
};
var blog4 = {
  title: "Blog 4",
  date: "Posted: 7/22/17",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus."
};
var blog3 = {
  title: "Blog 3",
  date: "Posted: 7/17/17",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus.</p>"
};
var blog2 = {
  title: "Blog 2",
  date: "Posted: 7/12/17",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus."
};
var blog1 = {
  title: "Blog 1",
  date: "Posted: 7/10/17",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et egestas est. Donec ut viverra ligula, ultrices vestibulum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis, odio a accumsan sodales, ipsum erat scelerisque augue, at egestas enim orci vel libero. Integer ultrices nisi fermentum, auctor ante quis, volutpat ante. Praesent tortor leo, eleifend eget condimentum vitae, semper quis mauris. Aenean fermentum volutpat est, at dignissim dui ornare condimentum. Proin a lorem sapien. Curabitur vehicula commodo nulla in molestie. Nam diam urna, ultrices sit amet congue et, ornare vel tortor. Duis mollis mi ut lectus fringilla laoreet. Quisque viverra at lorem egestas faucibus.</p>"
};

blogs.push(blog5);
blogs.push(blog4);
blogs.push(blog3);
blogs.push(blog2);
blogs.push(blog1);

var blogHolder = document.getElementById("blog-holder");

for (var i = 0; i < blogs.length; i++){

	var currentBlog = blogs[i];
	var domString = "";

	domString +=			'<section class="blog-card">';
	domString +=				'<div>';
	domString +=				  '<h4>' + currentBlog.title +'</h4>';
	domString +=					'<h6>' + currentBlog.date +'</h6>';
	domString +=				'</div>';
	domString +=				'<div>';
	domString +=					'<p>' + currentBlog.content + '</p>';
	domString +=				'</div>';
	domString +=			'</section>';

	blogHolder.innerHTML += domString;




}