angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);


function wdiCard(){
  var directive = {
    scope: {
      question: '@'
    },
    restrict: 'E',
    templateUrl: './templates/cardDirective.html',
    replace: true
  };


  return directive;
}
