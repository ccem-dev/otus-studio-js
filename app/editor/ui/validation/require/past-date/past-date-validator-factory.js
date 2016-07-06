(function() {
    'use strict';

    angular
        .module('editor.ui')
        .factory('PastDateValidatorFactory', PastDateValidatorFactory);

    function PastDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            return new PastDateValidator();
        }

        return self;
    }

    function PastDateValidator() {
        var self = this;

        /* Public Methods */
        self.getTemplate = getTemplate;

        function getTemplate(){
          return '<otus:past-date-validator></otus:past-date-validator>';
        }
        //TODO
    }

}());
