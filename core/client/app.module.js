/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    angular.module('quizmaster', [
        'ui.router',
        'ngSanitize',
        'ngResource',
        'ngMaterial'
    ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue', {
                    default: '200'
                })
                .accentPalette('red')
                .warnPalette('red');
        });


} ());