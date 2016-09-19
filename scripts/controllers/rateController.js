angular.module('CardsAgainstAssembly')
  .controller('rateController', rateController);

// rateController.$inject = ['$scope']
function rateController(){
  var vm = this;
  vm.rate = 7;
  vm.max = 10;
  vm.isReadonly = false;

  vm.hoveringOver = function(value) {
    vm.overStar = value;
    vm.percent = 100 * (value / vm.max);
  };

  // etc... keep filling in the controller so that it has all of the
  // attributes that the demo has
}
