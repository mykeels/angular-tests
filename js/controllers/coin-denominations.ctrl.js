app.controller("CoinDenominationsCtrl", function ($scope) {
    $scope.coins = [1, 2, 5, 10, 20, 50, 100, 200];
    $scope.amount = 5;
    $scope.findCombinations = function (amount, coins, checkFromIndex) {
        checkFromIndex = checkFromIndex || 0;
        coins = coins || [];
        amount = amount || 0;
        if (amount == 0) return 1;
        else if (amount < 0 || coins.length == checkFromIndex) return 0;
        else {
            var withFirstCoin = $scope.findCombinations(amount - coins[checkFromIndex], coins, checkFromIndex);
            var withoutFirstCoin = $scope.findCombinations(amount, coins, checkFromIndex + 1);
            return withFirstCoin + withoutFirstCoin;
        }
    }
});