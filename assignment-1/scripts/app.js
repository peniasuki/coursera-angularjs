(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  console.log("Arranco");
  $scope.checkMessage = "";
  $scope.lunchMenu = "";
  // $scope.name = "Yaakov";

  // $scope.upper = function () {
  //   var upCase = $filter('uppercase');
  //   $scope.name = upCase($scope.name);

  $scope.checkIfTooMuch = function () {
    var lunchPieces = cleanArray($scope.lunchMenu.trim().split(','));
    if (lunchPieces.length == 0) {
      $scope.checkMessage = "Please enter data first";
    } else if (lunchPieces.length <= 3) {
      $scope.checkMessage = "Enjoy!"
    } else {
      $scope.checkMessage = "Too much!"
    }
    console.log($scope.lunchMenu.split(','));
    console.log($scope.lunchMenu.split(',').indexOf(""));
    console.log(cleanArray(lunchPieces));
    };
  function cleanArray(arrayToClean) {
    while (arrayToClean.indexOf("") > -1) {
      arrayToClean.splice(arrayToClean.indexOf(""), 1);
    }
    return arrayToClean;
  } 
  };
})();
