angular.module('CardsAgainstAssembly')
    .directive('card', cardView);

function cardView(){
    var directive = {};
    directive.restrict = "E";
    directive.templateUrl = '_cardView.html';
    directive.scope = {
        question: '@',
        answer: '@',
        'swapMe':'&swapMe'
    }
    return directive;
}