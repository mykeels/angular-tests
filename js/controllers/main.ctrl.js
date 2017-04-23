app.controller("MainCtrl", function ($scope) {
    $scope.text = "";
    $scope.getReverseLines = function (text) {
        return text.split('\n').map(function (line) {
            return line.split(' ').reverse().filter(function (word) {
                return word && word != '';
            }).join(' ');
        });
    }
});