(function () {
    "use strict";

    angular.module('quizmaster')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('words', {
                    url: '/words',
                    templateUrl: 'components/wordedit/word.edit.client.template.html',
                    controller: 'wordsController'
                })
                .state('quizzes', {
                    url: '/quizzes',
                    templateUrl: 'components/quizlist/quiz.list.client.template.html',
                    controller: 'quizzesController'
                })
                .state('quizedit', {
                    url: '/quizzes/:id',
                    templateUrl: 'components/quizedit/quiz.edit.client.template.html',
                    controller: 'quizController'
                });
        }]);

} ());