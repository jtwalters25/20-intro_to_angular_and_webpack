'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'This is Do it Bigville';

  cowsayCtrl.spoke = function(pastInput) {
    $log.debug('cowsayCtrl.spoke()');
    return cowsay.say({ text: pastInput || 'Mooose', f: 'moose' });
  };

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({ text: input || 'Moooove', f:'cow' });
  };

  cowsayCtrl.logger = function(input, pastInput) {
    $log.debug('cowsayCtrl.logger()');
    $log.log(pastInput);
  };
}
