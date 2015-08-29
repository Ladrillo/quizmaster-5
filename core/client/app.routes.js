(function () {
    "use strict";

    angular.module('quizmaster')
        .config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');


            $stateProvider

                .state('words', {
                    url: '/words',
                    templateUrl: 'components/wordedit/word.edit.client.template.html',
                    controller: 'wordsController'
                })

                .state('quizlist', {
                    url: '/quizzes',
                    templateUrl: 'components/quizlist/quiz.list.client.template.html',
                    resolve: {
                        quizzesResource: 'quizzesResource',
                        quizzes: function (quizzesResource) {
                            return quizzesResource.query();
                        }
                    },
                    controller: 'quizListController',
                })

                .state('quiznew', {
                    url: '/quizzes/new',
                    templateUrl: 'components/quiznew/quiz.new.client.template.html',
                    controller: 'quizNewController'
                })

                .state('quizedit', {
                    url: '/quizzes/:id',
                    templateUrl: 'components/quizedit/quiz.edit.client.template.html',
                    resolve: {
                        quizzesResource: 'quizzesResource',
                        quizInProgress: function (quizzesResource, $stateParams) {
                            return quizzesResource.get({ id: $stateParams.id });
                        }
                    },
                    controller: 'quizEditController'
                })

                .state('test', {
                    url: '/tests/:id',
                    templateUrl: 'components/test/test.client.template.html',
                    resolve: {
                        testsResource: 'testsResource',
                        testInProgress: function (testsResource, $stateParams) {
                            return testsResource.get({ id: $stateParams.id }).$promise;
                        }
                    },
                    controller: 'testsController'
                });
        }]);

} ());




