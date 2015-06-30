// Code goes here
(function () {
    'uses strict';
    angular.module('myApp')
        .controller('mainController', ['$http', 'dataFetch', mainController]);

    function mainController($http, dataFetch) {
        var mctrl = this;
        mctrl.data = [];
        mctrl.person = [];
        readData();

        mctrl.sendIndex = function (index) {
            mctrl.person = mctrl.data[index];
        };
        function readData() {
            dataFetch.getData()
                .success(function (data) {
                    mctrl.data = data;
                    console.log(mctrl.data);
                    mctrl.loading = $http.pendingRequests.length <= 0;
                })
                .error(function (error) {
                    console.log('Error fetchin data');
                });
        }
    }
})();