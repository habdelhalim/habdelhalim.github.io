/**
 * Created by hasan on 3/31/17.
 */
(function () {
    "use strict";

    var module = angular.module('profile.controller', []);

    module.controller('ProfileController', ['$scope', 'ProfileService',
        function ($scope, ProfileService) {
            $scope.profile = ProfileService.get();

            $scope.profile.para = function () {
                return this.summary.split('\n\n');
            };

            var positions = $scope.profile['positions'].values;

            function Position(arr) {
                this.pos = arr;
                this.title = this.pos.title;
                this.company = this.pos.company.name.toUpperCase();
                this.isCurrent = this.pos.isCurrent;
                this.startDate = this.pos.startDate?.year;
                this.endDate = this.pos.endDate?.year;
                this.summary = this.pos.summary.split('\n\n')[0];
                this.items = this.pos.summary.split('\n\n').filter(function (itm) {
                    return itm[0] == '-';
                }).map(function (str) {
                    return str.replace('-', '');
                });
            }

            $scope.positions = positions.map(function (arr) {
                return new Position(arr);
            });

        }]);
})();
