app.controller("CountSundaysCtrl", function ($scope) {
    $scope.startDate = null;
    $scope.endDate = null;

    $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $scope.start = {
        selectedMonth: "January",
        selectedYear: 1970,
        getDate: function () {
            return getDateFromObject(this);
        }
    }
    $scope.end = {
        selectedMonth: "January",
        selectedYear: 1970,
        getDate: function () {
            return getDateFromObject(this);
        }
    }
    $scope.years = (function () {
        var ret = [];
        for (var i = 1970; i <= (new Date()).getFullYear(); i++) {
            ret.push(i)
        }
        return ret;
    })();

    var sundaysInMonth = function ( m, y ) {
        var days = new Date( y,m,0 ).getDate();
        var sundays = [ (8 - (new Date( m +'/01/'+ y ).getDay())) % 7 ];
        for ( var i = sundays[0] + 7; i < days; i += 7 ) {
            sundays.push( i );
        }
        return sundays;
    }

    var calculateMonths = function (start, end) {
        var months = [];
        var d = new Date(start);
        while (d <= end) {
            months.push(new Date(d));
            d.setMonth(d.getMonth() + 1)
        }
        return months
    }

    var getDateFromObject = function (obj, months) {
        if (!obj) return null;
        if (!months) months = $scope.months;
        else {
            obj.selectedMonth = obj.selectedMonth || "January";
            obj.selectedYear = obj.selectedYear || 1970;
        }
        if (months.indexOf(obj.selectedMonth) < 0) return new Date(obj.selectedYear);
        else  return new Date(obj.selectedYear, months.indexOf(obj.selectedMonth));
    }

    $scope.calculateFiveSundayMonths = function (start, end) {
        return calculateMonths(start, end).filter(function (d) {
            return sundaysInMonth(d.getMonth() + 1, d.getFullYear()).length == 5
        });
    }

    $scope.getResult = function () {
        return $scope.calculateFiveSundayMonths($scope.start.getDate(), $scope.end.getDate()).length;
    }
});