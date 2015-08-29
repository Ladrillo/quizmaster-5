(function () {
    "use strict";

    angular.module('quizmaster')
        .service('notFunny', function () {
            this.sarcasmCorrect = [
                "I hope that didn't wear you out.",
                "You got lucky this time.",
                "You truly are a genius.",
                "Maybe you want a medal now.",
                "Now go and tell your friends about it."
            ];
            this.sarcasmIncorrect = [
                "My six-year-old nephew could do better.",
                "Nice going.",
                "Better luck next time.",
                "You are wasting your time.",
                "Are you sure you are up to this?"
            ];
        });


} ());