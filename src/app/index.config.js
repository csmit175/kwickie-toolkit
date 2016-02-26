(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
