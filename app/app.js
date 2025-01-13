var myNinjaApp = angular.module("MovieApp", []);

myNinjaApp.controller("MovieSearchController", function ($scope) {
  $scope.search = function (searchText) {
    const url =
      "https://www.freetestapi.com/api/v1/movies?search=" + searchText;

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        $scope.movies = data;
      })
      .catch((error) => {
        console.log("Error fetching data");
        console.log(error);
      });
  };
  $scope.movies = [];
});
// Before application runs
myNinjaApp.config(function () {});

// As application runs
myNinjaApp.run(function () {});
