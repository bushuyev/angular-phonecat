'use strict';


angular.
module('testModule').
component('compTest', {
  templateUrl: 'comp-test/comp-test.template.html',

  controller: ['$routeParams', 'Phone',
    function TestController() {
      this.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
      ];

      this.selected = this.itemArray[0];

      this.action = function(){
        console.log('action: '+JSON.stringify(this.selected));
      }
    }
  ]
});
