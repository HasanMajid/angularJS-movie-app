var myNinjaApp = angular.module("MovieApp", []);

myNinjaApp.controller("MovieSearchController", function ($scope, $http) {
  $scope.search = function (searchText) {
    const url =
      "https://www.freetestapi.com/api/v1/movies?search=" + searchText;

    $http.get(url).then(
      function (response) {
        $scope.movies = response.data;
      },
      function (error) {
        console.log("Error getting movies");
        console.log(error);
      }
    );
  };
  $scope.movies = [];
});
// Before application runs
myNinjaApp.config(function () {});

// As application runs
myNinjaApp.run(function () {});
