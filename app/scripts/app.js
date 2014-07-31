'use strict';
/* global app:true */

var app = angular
    .module('angNews', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ]).constant('FIREBASE_URL', 'https://sweltering-fire-6468.firebaseio.com/');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        });
});
