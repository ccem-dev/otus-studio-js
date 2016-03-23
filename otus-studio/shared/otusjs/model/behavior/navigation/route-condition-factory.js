(function() {
    'use strict';

    angular
        .module('otusjs.model')
        .factory('RouteConditionFactory', RouteConditionFactory);

    function RouteConditionFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(name) {
            return new RouteCondition(name.replace(' ', '_'));
        }

        return self;
    }

    function RouteCondition(name) {
        var self = this;

        Object.defineProperty(self, 'extends', {
            value: 'StudioObject',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(self, 'objectType', {
            value: 'RouteCondition',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(self, 'name', {
            value: name,
            writable: true,
            enumerable: true
        });

        Object.defineProperty(self, 'rules', {
            value: [],
            writable: true,
            enumerable: true
        });

        /* Public interface */
        self.addCondition = addCondition;
        self.removeCondition = removeCondition;

        function addCondition(rule) {
            var ruleNotExist = (self.rules.indexOf(rule) === -1);
            if (ruleNotExist) self.rules.push(rule);
        }

        function removeCondition(rule) {
            var indexToRemove = self.rules.indexOf(rule);
            self.rules.splice(indexToRemove, 1);
        }
    }

}());
