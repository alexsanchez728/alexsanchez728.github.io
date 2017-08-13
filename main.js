// VARIABLE DECLARATIONS
var blogPosts = [];
var blogHolder = document.getElementById("blog-holder");
var domString = "";

//Post blogs; most recent on the top of the array

addBlog("Working in Groups through GitHub", "Posted: 8/13/17", "");
addBlog("More GitHub", "Posted: 8/13/17", "");
addBlog("JavaScript week 3", "Posted: 8/13/17", "  The temperature converter: accept an input from the user, let them choose if they want the result converted to Fahrenheit or Celsius. Give them a “Convert!” button and a button to clear the fields to go again. <br><br> For this one our group came in expecting the worst. We mentioned to someone in E5 about  this one and he said this was his first “crying in the shower” moment. So we knew, this might be a toughie. <br><br> I don’t remember if we exactly delegated tasks for each bit of the assignment but looking back I see Eric focused on getting the input fields and especially the clear/reset button working. Jessica and Brooke focused more on getting the functions to do what we wanted them to. And I spent a lot of time trying to wrap my brain around ternary statements so we could use them to color the returned temperature. Red when the number was above 90F/32C, blue when it was under 32F/0C and green when it was anywhere in the middle! <br><br> I don’t mean to say I didn’t touch any work that wasn’t a ternary statement, we all contributed to each part of the assignment but it definitely felt like we had each decided to solve and understand 1 problem for the group to then come back and explain how we did what we did to the rest of the group. <br><br> Like the command line assignment we had the first week! That’s what it felt like because we all knew what we had to do, we did our research and reconvened when we had a good grasp on each issue so it could be explained to the  without all the struggle we went through individually. <br><br> I do think our group is well put together, we are all hardworking and committed to fully  understanding the topic at hand. None of us are the best at anything yet but we get pretty excited for each other when we do something cool or learn something new. And when it comes to explaining something we’ve learned to each other I’d say we’re pretty good at that too.");
addBlog("JavaScript Week 2", "Posted: 8/13/17", "The coin counter: start with any amount of money and now, in the optimal case, what would be the least amount of quarters, dimes, nickels, and pennies to make up that sum of money? Man this one was a hassle. Well, not the hardest assignment in the world but it was a tough one lemme tell ya: <br><br> I struggled because the original way I saw this problem was the only way I could conceive to solve this problem. I didn’t ask my team how they would solve it, I just started writing on the board and that’s what we went with, in the end this led to problems in the code. That was my mistake. I thought I was right and didn’t consider other methods of solving it. Going with my idea also meant that I was explaining it to my team, and in explaining it I was reinforcing in my brain that my way worked. I was digging myself into a hole. <br><br> My idea had merit but it was not the cleanest, easiest to understand, nor the most DRY solution. But it did solve the problem, in most cases at least. <br><br> The first thing my brain said when I saw this project was “This sounds like an algebra problem. We’ll solve it like that!” So I grabbed the white board, wrote down a example amount of money to start with and started going into it: divide our starting cash by .25, take the remainder, multiply for the amount of quarters, subtract that from the starting amount <br><br> divide the remaining balance by .10 get the remainder, multiply, subtract and repeat for nickels and pennies. It was long. Then next to that example math on the board we started on translating that math into javascript. I jumped straight to if statements. Which meant 1 if statement per coin. All told, it ended up being around 50 lines of code. Not great, there were too many variables to keep track of and it didn’t even guarantee that it would work 100% of the time. <br><br> The group deliberated, and after a day of not having the function work all the time we started reexamining, and it was another group member, Jessica who started to rewrite the code for this project. It was half the length of the original and used a lot fewer variable names. AND it correctly spit out the correct amount of quarters, dimes, nickels, and pennies Every Time! <br><br> Reflection time! You’re method of solving a problem is not always THE method to solve the problem. Stop and ask friends, “is this how you would go about this? What would you do.” And while choosing one clear path to move forward on is good, taking the time to scope out other possible roads before you start can pay off. Also rounding numbers and using decimals in js is trouble. Multiply to avoid using floating point numbers because whole numbers are our friends in js.");
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