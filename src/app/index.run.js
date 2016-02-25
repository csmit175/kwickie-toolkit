(function() {
  'use strict';

  angular
    .module('kwickieToolkit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
