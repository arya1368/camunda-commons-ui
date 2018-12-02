'use strict';

var angular = require('camunda-bpm-sdk-js/vendor/angular');
var moment = require('moment-jalaali');
require('angular-translate');

var filtersModule = angular.module('cam.commons.filter.date', [
  'pascalprecht.translate'
]);



filtersModule.provider('camDateFormat', function() {
  var variants = {
    normal: 'jD jMMMM jYYYY LT',
    short: 'jD jMMMM jYYYY',
    long: 'dddd، jD jMMMM jYYYY LT'
  };

  this.setDateFormat = function(newFormat, variant) {
    variant = variant || 'normal';
    variants[variant] = newFormat;
  };

  this.$get = function() {
    return function(variant) {
      variant = variant || 'normal';
      return variants[variant];
    };
  };
});



filtersModule.config([
  '$filterProvider',
  function(
    $filterProvider
  ) {

    $filterProvider.register('camDate', [
      '$translate',
      'camDateFormat',
      function(
      $translate,
      camDateFormat
    ) {

        return function(date, variant) {
          if (!date) {
            return '';
          }
          return moment(date).format(camDateFormat(variant));
        };

      }]);
  }]);

module.exports = filtersModule;
