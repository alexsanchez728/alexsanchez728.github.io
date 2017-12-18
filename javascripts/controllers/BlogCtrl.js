'use strict';

app.controller("BlogCtrl", function( $scope, DatabaseServices) {

  $scope.blogs = [];
  $scope.chosenBlog =[];
  $scope.showBlog = false;

  const checkOutTheseBlogs = () => {
  
    DatabaseServices.getContent("blogs").then((_blogs) => {
  
      $scope.blogs = _blogs;

    }).catch((err) => {
      console.log("error in blogsOrProjects", err);
    });
  };
  checkOutTheseBlogs();
  
  $scope.moreInfo = ((blog) => {
    $scope.chosenBlog = angular.copy(blog);
    $scope.showBlog = true;
    // ("#blogJumbotron").html(blog);
    
  });

}); // end controller