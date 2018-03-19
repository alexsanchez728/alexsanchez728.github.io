'use strict';

app.controller("BlogCtrl", function( $scope, DatabaseServices) {

  $scope.blogs = [];
  $scope.chosenBlog =[];
  $scope.showBlog = false;

  const checkOutTheseBlogs = () => {
    
    DatabaseServices.getContent("blogs").then((_blogs) => {
      
      // trying to replace any double spaces with a [return]
      // _blogs.forEach(blog => {
        
      //   var thisBlog = blog;
      //   thisBlog.content.replace(/(\s{2})/g, '+');
      //   console.log(thisBlog.content);
    
      // });

      $scope.blogs = _blogs;

    }).catch((err) => {
      console.log("error in blogsOrProjects", err);
    });  
  };  
  checkOutTheseBlogs();
  
  $scope.moreInfo = ((blog) => {
    $scope.chosenBlog = angular.copy(blog);
    $scope.showBlog = true;    
  });

});