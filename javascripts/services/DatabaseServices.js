'use strict';

app.service("DatabaseServices", function ($http, $q, FIREBASE_CONFIG) {

  const getContent = (choice) => {
    let toDisplay = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/${choice}.json`).then((results) => {
        let fbResults = results.data;
        if (fbResults != null) {
          Object.keys(fbResults).forEach((key) => {
            fbResults[key].id = key;
            toDisplay.push(fbResults[key]);
          });
        }
        resolve(toDisplay);
      }).catch((err) => {
        console.log("error in getContent", err);
        reject(err);
      });
    });
  };


  return {
    getContent
  };
});