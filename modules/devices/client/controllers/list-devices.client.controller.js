(function () {
  'use strict';

  angular
    .module('devices')
    .controller('DevicesListController', DevicesListController);

  DevicesListController.$inject = ['$scope', 'DevicesService', 'Socket'];

  function DevicesListController($scope, DevicesService, Socket) {
    var vm = this;

    vm.devices = DevicesService.query();

    // Make sure the Socket is connected
    if (!Socket.socket) {
      Socket.connect();
    }
    
    Socket.on('device.created', function(device) {
      vm.devices = DevicesService.query();
    });
    
    // Remove the event listener when the controller instance is destroyed
    $scope.$on('$destroy', function () {
      Socket.removeListener('device.created');
    });
  }
})();
