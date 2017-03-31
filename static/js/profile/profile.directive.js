/**
 * Created by hasan on 4/1/17.
 */
(function () {
  "use strict";

  var module = angular.module('profile.directive', []);
  module.directive('jobItem', function () {
    return {
      restrict: 'E',
      scope: {
        item: '='
      },
      template: '{{item}}'
    }
  });

  module.directive('job', function () {
    return {
      restrict: 'E',
      scope: {
        position: '='
      },
      templateUrl: 'static/js/profile/profile.job.html'
    }
  });

})();
