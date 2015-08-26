(function () {
    "use strict";

    angular.module('quizmaster')
        .config(function ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('words', {
                    url: '/words',
                    templateUrl: 'components/words/words.client.template.html',
                    controller: 'wordsController'
                })
                .state('quiz', {
                    url: '/quiz',
                    templateUrl: 'components/quiz/quiz.client.template.html',
                    controller: 'quizController'
                })
                .state('quizzes', {
                    url: '/quizzes',
                    templateUrl: 'components/quizzes/quizzes.client.template.html',
                    controller: 'quizzesController'
                })
                .state('quizedit', {
                    url: '/quizzes/:id',
                    templateUrl: 'components/quiz/quiz.client.template.html',
                    controller: 'quizController'
                });
        });

} ());