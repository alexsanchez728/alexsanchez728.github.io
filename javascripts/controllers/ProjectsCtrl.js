'use strict';

app.controller("ProjectsCtrl", function ($scope, DatabaseServices) {

  $scope.projects = [];

  const checkOutTheseProjects = () => {
    DatabaseServices.getContent("projects").then((_projects) => {
      $scope.projects = _projects;
    }).catch((error) => {
      console.log("error in checkoutTheseProjects", error);
    });
  };

  checkOutTheseProjects();

  $scope.showLiveWebLink = (project) => {
    if ("live" in project)
      return true;

    return false;

  };

  $scope.showProjectDescription = (index) => {
    document.getElementById("project-description" + index).classList.toggle("hide");
    document.getElementById("project" + index).classList.toggle("toggle-opacity");
  };
});