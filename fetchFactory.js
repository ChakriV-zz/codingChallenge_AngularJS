(function () {
    'uses strict';
    angular.module('myApp')
        .factory('dataFetch', ['$http', dataFetch]);

    function dataFetch($http) {
        var self = {};
        var urlBase = 'http://private-a73e-aquentuxsociety.apiary-mock.com/members';
        self.getData = function () {
            return $http.get(urlBase);
        };
        return self;
    }
})();