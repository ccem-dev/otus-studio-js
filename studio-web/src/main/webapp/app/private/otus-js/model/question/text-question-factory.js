(function() {
    'use strict';

    angular
        .module('otusjs')
        .factory('TextQuestionFactory', TextQuestionFactory);

    function TextQuestionFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(oid, prototype) {
            return new TextQuestion(oid, prototype);
        }

        return self;
    }

    function TextQuestion(oid, prototype) {
        var self = this;

        Object.defineProperty(this, 'extends', {
            value: prototype.objectType,
            writable: false
        });

        Object.defineProperty(this, 'objectType', {
            value: 'TextQuestion',
            writable: false
        });

        Object.defineProperty(this, 'oid', {
            value: prototype.oid,
            writable: false
        });

        Object.defineProperty(this, 'dataType', {
            value: 'LocalDate',
            writable: false
        });

        Object.defineProperty(this, 'label', {
            value: prototype.label,
            writable: true
        });
    }

}());