//jshint strict: false
var path = require("path");

module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-select/dist/select.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js',
      '**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS', 'Chrome_with_debugging'/*, 'Firefox'*/],

    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        chromeDataDir: path.resolve(__dirname, '.chrome')
      }
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      // 'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {

      // the name of the Angular module to create
      moduleName: "my.templates"
    },


    singleRun: false

  });
};
