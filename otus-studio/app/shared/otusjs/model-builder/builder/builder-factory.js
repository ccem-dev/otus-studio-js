(function() {
    'use strict';

    angular
        .module('otusjs.modelBuilder')
        .factory('BuilderFactory', BuilderFactory);

    BuilderFactory.$inject = [
        'BuilderSelectorService',
        'BuilderMapService'
    ];

    function BuilderFactory(BuilderSelectorService, BuilderMapService) {
        var self = this;

        /* Public interface */
        self.create = create;
        self.createQuestionBuilder = createQuestionBuilder;

        function create(editingTarget) {
            var builderName = BuilderSelectorService.getBuilderName(editingTarget);
            var builder = BuilderMapService.getBuilder(builderName);

            return builder;
        }

        function createQuestionBuilder() {
            return BuilderMapService.getBuilder('QuestionBuilderService');
        }

        return self;
    }

}());
