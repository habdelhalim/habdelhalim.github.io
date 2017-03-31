/**
 * Created by hasan on 4/1/17.
 */
(function () {
  "use strict";

  var module = angular.module('profile.directive', []);
  module.directive('profileImage', function () {
    return {
      restrict: 'E',
      scope: {
        profile: '='
      },
      template: '<a href="{{profile.publicProfileUrl}}" class="thumbnail" rel="Hasan Abdel Halim\'s profile"> <img src="/static/img/profile.jpg" alt="Hasan Abdel Halim"> </a>'
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

  module.directive('jobItem', function () {
    return {
      restrict: 'E',
      scope: {
        item: '='
      },
      template: '{{item}}'
    }
  });

  module.directive('skills', function () {
    return {
      restrict: 'E',
      scope: {
        skills: '='
      },
      templateUrl: 'static/js/profile/profile.skills.html'
    }
  });

  module.directive('aboutMe', function () {
    return {
      restrict: 'E',
      scope: {
        profile: '='
      },
      templateUrl: 'static/js/profile/profile.aboutme.html'
    }
  });

  module.directive('education', function () {
    return {
      restrict: 'E',
      scope: {
        educations: '='
      },
      templateUrl: 'static/js/profile/profile.education.html'
    }
  });

  module.directive('language', function () {
    return {
      restrict: 'E',
      scope: {
        languages: '='
      },
      templateUrl: 'static/js/profile/profile.language.html'
    }
  });

})();
