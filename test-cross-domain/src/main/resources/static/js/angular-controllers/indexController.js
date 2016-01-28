app.controller('indexController', function ($scope, $http, $element, $document) {

    $scope.apiEnpoint = "http://localhost:8080"

    $scope.testCrossDomain = function () {

        var url = sprintf("%s/api/cors",$scope.apiEnpoint);
        var method = "get";
        var req = {
            method: method,
            url: url,
            headers: {
                'Content-Type': "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json'
            }
        };

        $http(req).then($scope.successTestCrossDomain, $scope.errorTestCrossDomain);
    };


    $scope.successTestCrossDomain = function (response) {
        console.log("successTestCrossDomain");
        console.log(response);
    };


    $scope.errorTestCrossDomain = function (response) {
        console.log("errorTestCrossDomain");
        console.log(response);

    };

});
