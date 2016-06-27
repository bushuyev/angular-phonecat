describe('testComp', function () {
  'use strict';

  beforeEach(function () {
    module("my.templates");
    module('testModule');
  });

  beforeEach(module(function ($provide) {

    $provide.value('securityService', {
      ifNotLoggedInRedirectToLogin: function () {
        return true;
      }
    });

    $provide.value('$routeParams', {});
    $provide.value('Phone', {});

  }));


  var element;
  var scope;

  beforeEach(inject(function ($rootScope, $compile, $httpBackend, $templateCache) {
    scope = $rootScope.$new();

    element = $compile('<comp-test></comp-test>')(scope)[0];
    scope.$digest();

  }));

    it('test testComp', function () {
      angular.element(element).find("#myselect  .ui-select-toggle").click();


      angular.element(element).find("#myselect span")[5].click();
      scope.$apply();
      element.querySelector('#action-button').click();

    });

});