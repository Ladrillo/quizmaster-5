(function () {
    "use strict";

    angular.module('quizmaster')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider

                .state('quizlist', {
                    url: '/quizzes',
                    templateUrl: 'components/quizlist/quiz.list.client.template.html',
                    resolve: {
                        quizzesResource: 'quizzesResource',
                        quizzes: function (quizzesResource) {
                            return quizzesResource.query();
                        },

                        testsResource: 'testsResource',
                        testInCreation: function (testsResource, $stateParams) {
                            return {};
                        }
                    },
                    controller: 'quizListController',
                })

                .state('quiznew', {
                    url: '/quizzes/new',
                    templateUrl: 'components/quizedit/quiz.edit.client.template.html',
                    resolve: {
                        subjectsResource: 'subjectsResource',
                        subjects: function (subjectsResource) {
                            return subjectsResource.query().$promise;
                        },

                        keywordsResource: 'keywordsResource',
                        keywords: function (keywordsResource) {
                            return keywordsResource.query().$promise;
                        }
                    },
                    controller: 'quizEditController',
                })

                .state('quizedit', {
                    url: '/quizzes/:id',
                    templateUrl: 'components/quizedit/quiz.edit.client.template.html',
                    resolve: {
                        subjectsResource: 'subjectsResource',
                        subjects: function (subjectsResource) {
                            return subjectsResource.query().$promise;
                        },

                        keywordsResource: 'keywordsResource',
                        keywords: function (keywordsResource) {
                            return keywordsResource.query().$promise;
                        }
                    },
                    controller: 'quizEditController'
                })

                .state('test', {
                    url: '/tests/run/:id',
                    templateUrl: 'components/test/test.client.template.html',
                    resolve: {
                        testsResource: 'testsResource',
                        testInProgress: function (testsResource, $stateParams) {
                            return testsResource.get({ id: $stateParams.id }).$promise;
                        }
                    },
                    controller: 'testsController'
                })

                .state('teststyled', {
                    url: '/tests/runstyle/:id',
                    templateUrl: 'components/teststyled/test.client.template.html',
                    resolve: {
                        testsResource: 'testsResource',
                        testInProgress: function (testsResource, $stateParams) {
                            return testsResource.get({ id: $stateParams.id }).$promise;
                        }
                    },
                    controller: 'testsController'
                })

                .state('testedit', {
                    url: '/tests/:id',
                    templateUrl: 'components/quizlist/quiz.list.client.template.html',
                    resolve: {
                        testsResource: 'testsResource',
                        testInCreation: function (testsResource, $stateParams) {
                            return testsResource.get({ id: $stateParams.id }).$promise;
                        },
                        quizzesResource: 'quizzesResource',
                        quizzes: function (quizzesResource) {
                            return quizzesResource.query();
                        }
                    },
                    controller: 'quizListController'
                })

                .state('testlist', {
                    url: '/tests',
                    templateUrl: 'components/testlist/test.list.client.template.html',
                    resolve: {
                        testsResource: 'testsResource',
                        tests: function (testsResource) {
                            return testsResource.query();
                        }
                    },
                    controller: 'testListController',
                });

        }]);

} ());




