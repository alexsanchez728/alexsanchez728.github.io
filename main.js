// VARIABLE DECLARATIONS
var blogPosts = [];
var blogHolder = document.getElementById("blog-holder");
var domString = "";

//Post blogs -- most recent posts on the top

addBlog("Working in Groups through GitHub", "Posted: 8/13/17", "At first it was scary to be working in the same files as other people. There was a challenge in trying to not step on peoples’ coding toes as each person worked. We spent a lot of time planning our project to avoid conflicts as long as we could. But when we had to start building our JS and CSS in the same files as each other the conflicts started to emerge. <br><br> Our first couple merge conflict took us hours to figure out. The most difficult part was learning the commands and how to use them properly. Understanding the concepts of what git fetch, git merge master and checking out remote branches was a struggle at first. But it was mostly a problem because we didn't read and re-read the instructions on how to deal with merge conflicts in the documentation for the project that was given to us. And GitHub has some helpful instructions on how to take care of them too. <br><br> All in all, after the first major conflicts we didn’t have many major issues! When code needed to be tested, we checked out our teammate’s branch and gave them feedback, we helped each other as problems arose and it went smoothly. I did realize that while I work much quicker when I work alone when it comes to working on projects working in groups in person really helps projects move quicker. Had we not worked in person over the course of 4 days it would have taken so much longer: waiting on slack messages and emails to communicate would have left a lot of time between work actually being done. <br><br> Overall, I really enjoyed working through GitHub for this project. Having cards to reference as we worked really helped to organize all of our thoughts. Also letting everybody tackle their work in their own way was fun and working in groups meant that we got more experience reading and understanding the code other's have written");
addBlog("More GitHub", "Posted: 8/13/17", "This week we learned how to use GitHub's project board to make group work possible. Our first assignment was a combination of working together to build a project board so that every person had a task. So we practiced how to break down a project and make sure everybody knew the procedures when it came to creating, testing, and then merging a Pull Request into master.");
addBlog("JavaScript week 3", "Posted: 8/13/17", "The temperature converter: accept an input from the user, let them choose if they want the result converted to Fahrenheit or Celsius. Give them a “Convert!” button and a button to clear the fields to go again. <br><br> For this one our group came in expecting the worst. Someone in E5 mentioned to us that this was his first “crying in the shower” project. So we knew prepared. This might be a toughie. <br><br> I don’t remember if we exactly delegated tasks for each bit of the assignment but looking back I see Eric focused on getting the input fields and especially the clear/reset button working. Jessica and Brooke focused more on getting the functions to do what we wanted them to. And I spent a lot of time trying to wrap my brain around ternary statements so we could use them to color the returned temperature depending on if the temperature was hot, cold, or anywhere in the middle! <br><br> I don’t mean to say I didn’t touch any work that wasn’t a ternary statement, we all contributed to each part of the assignment but it definitely felt like we had each decided to solve and understand one problem for the group to then come back and explain how we did what we did to the rest of the group. <br><br> Like the command line assignment we had the first week! That’s what it felt like! We all knew what we had to do, we did our research and reconvened when we had a good grasp on each issue so it could be explained to the  without all the struggle we went through individually. <br><br> I do think our group is well put together, we are all hardworking and committed to fully understanding the topic at hand. We get pretty excited for each other when we do something cool or learn something new. We feel proud for the each other when we do something. And when it comes to explaining something we’ve learned to each other I’d say we’re pretty good at that too.");
addBlog("JavaScript Week 2", "Posted: 8/13/17", "We had just finished our first lesson with for loops and if statements. This group exercise was to  use what we had learned to do arithmetic on a value given by a user. Doing math on the value as long as it’s value was more than 0. <br><br> The coin counter: start with any amount of money and now, in the optimal case, what would be the least amount of quarters, dimes, nickels, and pennies to make up that sum of money? Man this one was a hassle. <br><br> Long story short, we had two versions of this project by the end. both worked fine but our first version did not multiply the input value by 100 to get rid of the floating point value, which led to rounding errors in some cases. Basically our first version revolved around an arithmetical solution to the problem while our second version definitely utilized the power of JavaScript to solve the problem. <br><br> Aside from learning how to use if statements and if else statements and for loops I got a lesson in: You’re method of solving a problem is not always THE method to solve the problem. <br><br> So stop and ask friends “is this how you would go about this? What would you do.” And while choosing one clear path to move forward on is good, taking the time to scope out other possible roads before you start can pay off. Also rounding numbers and using decimals in js is trouble. Multiply to avoid using floating point numbers because whole numbers are our friends.");
addBlog("JavaScript week 1", "Posted: 8/13/17", " We officially started js in class this week. I’m glad I did the Treehouse prework that covered js because if I had to be dropped into this class with no prior knowledge of how js operated I would have been incredibly lost. Getting exposed to it in class and being taught about it again really reinforced the “how” and “why” of js’s inner workings.");

 


for (var i = 0; i < blogPosts.length; i++){

	var currentBlog = blogPosts[i];

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

// Add a blog post through a function that accepts 3 arguments to push an array blogPosts
function addBlog(title, date, content) {
  blogPosts.push({
      title: title,
      date: date,
      content: content
  });
}