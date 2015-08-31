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
                        }
                    },
                    controller: 'quizListController',
                })

//                 .state('quiznew', {
//                     url: '/quizzes/new',
//                     templateUrl: 'components/quizedit/quiz.edit.client.template.html',
//                     resolve: {
//                         quizInProgress: function () {
//                             return {
//                                 subjects:[],
//                                 keywords: [],
//                                 instructions: "",
//                                 stem: "",
//                                 truthies: [],
//                                 falsies: [],
//                                 regexps:[]};
//                         },
//
//                         subjectsResource: 'subjectsResource',
//                         subjects: function (subjectsResource) {
//                             return subjectsResource.query(function (data) {
//                                 return data;
//                             });
//                         },
//
//                         keywordsResource: 'keywordsResource',
//                         keywords: function (keywordsResource) {
//                             return keywordsResource.query(function (data) {
//                                 return data;
//                             });
//                         }
//                     },
//                     controller: 'quizEditController',
//                 })

                .state('quizedit', {
                    url: '/quizzes/:id',
                    templateUrl: 'components/quizedit/quiz.edit.client.template.html',
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
                })

                .state('testedit', {
                    url: '/test/:id',
                    templateUrl: 'components/testedit/test.edit.client.template.html',
                    resolve: {
                        testsResource: 'testsResource',
                        testInProgress: function (testsResource, $stateParams) {
                            return testsResource.get({ id: $stateParams.id });
                        }
                    },
                    controller: 'testEditController'
                });

        }]);

} ());




