(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const firebaseApi = require("./firebaseApi");

const apiKeys = () => {
    return new Promise((resolve, reject) => {
        $.ajax("./db/apiKeys.json").done((data) => {
            resolve(data.apiKeys);
        }).fail((error) => {
            reject(error);
        });
    });
};

const retrieveKey = () => {
    return new Promise((resolve, reject) => {
    apiKeys().then((results) => {
        firebaseApi.setKey(results.firebaseKeys);
        firebase.initializeApp(results.firebaseKeys);
		resolve();
    });

    }).catch((error) => {
        console.log("error", error);
    });
};

module.exports = { retrieveKey };
},{"./firebaseApi":5}],2:[function(require,module,exports){
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
},{"./dom":3,"./firebaseApi":5}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

const blogger = require("./blog");
const projectPage = require("./projects");
// const firebaseApi = require("./firebaseApi");


const blogsOrProjects = () => {
	if (document.querySelector("title").innerHTML === "Blog") {
		blogger.checkOutTheseBlogs();
	} else if (document.querySelector("title").innerHTML === "Projects") {
		projectPage.checkOutTheseProjects();
	}
};

const init = () => {
	blogsOrProjects();
};

module.exports = {init};
},{"./blog":2,"./projects":7}],5:[function(require,module,exports){
"use strict";

let firebaseKey = "";

const setKey = (key) => {
    firebaseKey = key;
};


// added an argument to query on whether the use selected the blog page or the project page
const getContent = (choice) => {
    let toDisplay = [];
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/${choice}.json`).then((results) => {
            if (results != null) {
                Object.keys(results).forEach((key) => {
                    results[key].id = key;
                    toDisplay.push(results[key]);
                });
            }
            resolve(toDisplay);
        }).catch((err) => {
            console.log("error in blerg", err);
            reject(err);
        });
    });
};

module.exports = {setKey, getContent};
},{}],6:[function(require,module,exports){
"use strict";

let apiKeys = require("./apiKeys");
let events = require("./events");

apiKeys.retrieveKey().then(() => {
  events.init();
}).catch((err) => {
  console.log(err);
});

},{"./apiKeys":1,"./events":4}],7:[function(require,module,exports){
"use strict";

const dombuilder = require("./dom");
const firebaseApi = require("./firebaseApi");

let projects = [];

const checkOutTheseProjects = () => {
    firebaseApi.getContent("projects").then((_projects) => {
        projects = _projects;
        dombuilder.projectsDomString(projects);
    }).catch((error) => {
        console.log("error in checkoutTheseProjects", error);
    });
};

module.exports = {checkOutTheseProjects};
},{"./dom":3,"./firebaseApi":5}]},{},[6]);
