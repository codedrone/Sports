var commentApp = angular.module('commentApp', ['mainCtrl', 'commentService']).config(function($interpolateProvider) {
    // To prevent the conflict of `[[` and `]]` symbols
    // between Blade template engine and AngularJS templating we need
    // to use different symbols for AngularJS.

    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});