angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    scope: {
      myQuestion: '@'
    },
    restrict: 'EA',
    replace: true,
    templateUrl: 'templates/cardDirective.html',
    controller: WdiCardController,
    controllerAs: 'wdiCardCtrl'
  }
  return directive;
};

function WdiCardController(){
  var vm = this;
  
}
