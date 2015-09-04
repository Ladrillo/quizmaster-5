(function () {
    "use strict";

    angular.module('quizmaster')
        .controller('testsController', [
            '$scope',
            '$resource',
            '$stateParams',
            '$state',
            'subjectsResource',
            'keywordsResource',
            'quizzesResource',
            'testsResource',
            'testInProgress',
            'notFunny',
            testsController]);

    function testsController(
        $scope,
        $resource,
        $stateParams,
        $state,
        subjectsResource,
        keywordsResource,
        quizzesResource,
        testsResource,
        testInProgress,
        notFunny) {

        $scope.testInProgress = testInProgress;
        $scope.quizesList = testInProgress.quizzes;
        $scope.doingTest = true;

        // ----- MAIN FUNCTION FOR GENERATING TEST START
        (function generateTest() {

            // initialize test object
            $scope.test = {};

            // create a shuffled set of to-do quizes
            $scope.test.toDoQuizes = (function () {
                return shuffleArray($scope.quizesList);
            } ());

            // the test needs fields, for calculations
            $scope.gameOver = false;
            $scope.test.currentQuizIndex = 0;
            $scope.test.currentQuiz = $scope.test.toDoQuizes[$scope.test.currentQuizIndex];
            $scope.test.totalNumberOfQuizes = $scope.test.toDoQuizes.length;
            // $scope.test.submitedQuizes = [];
            $scope.test.submitedQuizes = 0;
            // $scope.test.submitedNumberOfQuizes = $scope.test.submitedQuizes.length;
            $scope.test.immediateFeedback = true;

            // update current quiz action
            $scope.test.updateCurrentQuiz = function () {
                if (this.toDoQuizes.length - 1 === this.currentQuizIndex) {
                    this.currentQuizIndex = 0;
                }
                else {
                    this.currentQuizIndex += 1;
                }
                this.currentQuiz = this.toDoQuizes[this.currentQuizIndex];
            };

            // let's calculate points in percentage
            $scope.test.points = 0;
            $scope.test.score = 0;
            $scope.test.maxPoints = $scope.quizesList.length;
            $scope.test.updateScore = function () {
                $scope.test.score = (100 * $scope.test.points) / $scope.test.maxPoints;
            };

            // ----- FUNCTION FOR INITIALIZING THE QUIZES -----
            (function initializeQuiz() {

                // ----- MAIN LOOP TO POPULATE QUIZ OBJECT -----
                for (var qi in $scope.test.toDoQuizes) {
                    var qz = $scope.test.toDoQuizes[qi];

                    // first we create the shuffled answers array
                    (function shuffledAnswers() {
                        qz.shuffledAnswers = shuffleArray([].concat(qz.truthies, qz.falsies));
                    } ());

                    // then we create an empty selected answers array
                    qz.selectedAnswers = [];

                    // these describe state and will need them later
                    qz.submited = false;
                    qz.untouched = true;

                    // conditional to change CSS of clicked button
                    qz.isAnswerSelected = function (item) {
                        return this.selectedAnswers.indexOf(item) === -1;
                    };

                    // these have to do with the all false button
                    qz.allFalseClicked = false;
                    qz.allFalse = function () {
                        this.selectedAnswers = [];
                        this.allFalseClicked = true;
                    };

                    // update selection method
                    qz.updateSelection = function (item) {
                        var idx = this.selectedAnswers.indexOf(item);
                        if (idx === -1) {
                            this.selectedAnswers.push(item);
                        }
                        else {
                            this.selectedAnswers.splice(idx, 1);
                        }
                        this.selectedAnswers.length !== 0 ? this.allFalseClicked = false : this.allFalseClicked = true;
                    };

                    // check if selection is correct
                    qz.isSelectionCorrect = function () {
                        return jQuery(this.selectedAnswers).not(this.truthies).length === 0 && jQuery(this.truthies).not(this.selectedAnswers).length === 0;
                    };

                    // checks if game over
                    qz.checkGameOver = function () {
                        if ($scope.test.submitedQuizes === $scope.test.totalNumberOfQuizes) {
                            $scope.gameOver = true;
                        }
                    };

                    // submits current quiz
                    qz.submit = function () {
                        this.submitted = true;
                        if (this.isSelectionCorrect()) {
                            $scope.test.points += 1;
                            $scope.test.updateScore();
                            this.feedback = "Correct!";
                            this.sarcasm = $scope.randomSarcasmCorrect();
                        }
                        else {
                            this.feedback = "Sorry, that's incorrect.";
                            this.sarcasm = $scope.randomSarcasmIncorrect();
                        }
                        $scope.test.submitedQuizes += 1;
                        this.checkGameOver();
                    };



                    // ----- MAIN LOOP TO POPULATE QUIZ OBJECT END -----
                }

            } ()); // ----- END OF QUIZ OBJECT IS CREATED


            // returning the finished object
            return $scope.test;

        } ());
        // ----- MAIN FUNCTION FOR GENERATING TEST END

        // getting not funny comments
        $scope.notFunnyIncorrect = notFunny.sarcasmIncorrect;
        $scope.notFunnyCorrect = notFunny.sarcasmCorrect;

        $scope.randomSarcasmIncorrect = function () {
            var idx = Math.floor(Math.random() * ($scope.notFunnyIncorrect.length - 1));
            return $scope.notFunnyIncorrect[idx];
        };

        $scope.randomSarcasmCorrect = function () {
            var idx = Math.floor(Math.random() * ($scope.notFunnyCorrect.length - 1));
            return $scope.notFunnyCorrect[idx];
        };

        // randomizing helper function
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }


        // debugging info to console

        // $scope.getPrintObject = function (object) {
        //     return JSON.stringify(object);
        // };

        // console.log($scope.getPrintObject($scope.test));
        // console.log($scope.test);



    }


} ());