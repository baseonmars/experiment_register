angular.module("AddTextByDragging", ['experimentRegister'])
  .config(['experimentsProvider', function (experiments) {
    experiments.set(
      'Add text by dragging',
      'Add a paragraph module to the page by dragging.');
  }])
  .controller('AddTextByDraggingController', function ($scope) {

  });