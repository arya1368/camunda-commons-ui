// Karma configuration
// Generated on Tue Jul 22 2014 15:20:17 GMT+0200 (CEST)

module.exports = function(config) {
  'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'node_modules/chai/chai.js', included: false},
      {pattern: 'node_modules/chai-spies/chai-spies.js', included: false},

      {pattern: 'node_modules/requirejs-text/text.js', included: false},
      {pattern: 'node_modules/jquery/dist/jquery.js', included: false},
      {pattern: 'node_modules/angular*/*.js', included: false},
      {pattern: 'node_modules/camunda-bpm-sdk-js/dist/camunda-bpm-sdk-angular.js', included: false},
      {pattern: 'vendor{/**,}/*.js', included: false},

      {pattern: 'test/loadingSpec.js', included: false},
      {pattern: 'lib/**/test/*Spec.js', included: false},
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'lib/**/*.html', included: false},
      // at last!
      'test/karma-test-main.js'
    ],


    // list of files to exclude
    exclude: [
      'lib/**/*.spec.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputFile: 'test/karma-results.xml',
      suite: ''
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
      'Chrome',
      // 'Firefox',
      // 'IE'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
