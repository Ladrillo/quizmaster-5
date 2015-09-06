(function () {
    "use strict";

    angular.module('quizmaster')
        .service('selectService', function () {

            this.setTestInCreation = function (obj) {
                this.testInCreation = obj;
            };

            this.getTestInCreation = function () {
                return this.testInCreation;
            };

            this.flushTestInCreation = function () {
                this.testInCreation = undefined;
            };


        });


} ());