(function () {
    "use strict";

    angular.module('quizmaster')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/quizzes');

            $stateProvider
                .state('quiznew', {
                    url: '/quizzes/new',
                    views: {
                        main: {
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
                        },
                        sidebar: {
                            templateUrl: 'shared/mainsidebar/main.sidebar.html'
                        }
                    }
                })

                .state('quizlist', {
                    url: '/quizzes',
                    views: {
                        main: {
                            templateUrl: 'components/quizlist/quiz.list.client.template.html',
                            resolve: {
                                quizzesResource: 'quizzesResource',
                                quizzes: function (quizzesResource) {
                                    return quizzesResource.query();
                                },
                            },
                            controller: 'quizListController'
                        },
                        sidebar: {
                            templateUrl: 'shared/mainsidebar/main.sidebar.html'
                        }
                    }
                })

                .state('quizedit', {
                    url: '/quizzes/:id',
                    views: {
                        main: {
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
                        },
                        sidebar: {
                            templateUrl: 'shared/mainsidebar/main.sidebar.html'
                        }
                    }
                })

                .state('test', {
                    url: '/tests/run/:id',
                    views: {
                        main: {
                            templateUrl: 'components/test/test.client.template.html',
                            resolve: {
                                testsResource: 'testsResource',
                                testInProgress: function (testsResource, $stateParams) {
                                    return testsResource.get({ id: $stateParams.id }).$promise;
                                }
                            },
                            controller: 'testsController'
                        },
                        sidebar: {
                            templateUrl: 'shared/emptysidebar/empty.sidebar.html'
                        }
                    }
                })

                .state('testedit', {
                    url: '/tests/:id',
                    views: {
                        main: {
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
                        },
                        sidebar: {
                            templateUrl: 'shared/mainsidebar/main.sidebar.html'
                        }
                    }
                })

                .state('testlist', {
                    url: '/tests',
                    views: {
                        main: {
                            templateUrl: 'components/testlist/test.list.client.template.html',
                            resolve: {
                                testsResource: 'testsResource',
                                tests: function (testsResource) {
                                    return testsResource.query();
                                }
                            },
                            controller: 'testListController',
                        },
                        sidebar: {
                            templateUrl: 'shared/mainsidebar/main.sidebar.html'
                        }
                    }
                });

        }]);

} ());




