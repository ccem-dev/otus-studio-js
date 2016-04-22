(function() {
    'use strict';

    angular
        .module('otusjs.modelBuilder')
        .service('ModelBuilderService', ModelBuilderService);

    ModelBuilderService.$inject = ['BuilderFactory'];

    function ModelBuilderService(BuilderFactory) {
        var self = this;

        /* Public interface */
        self.build = build;
        self.executeBuilding = executeBuilding;

        function build(buildWork) {
            var builder = BuilderFactory.create(buildWork.target);

            builder.runValidations(buildWork);
            builder.execute(buildWork);
            // builder.verifyWork() ?

            return builder.getWorkResult();
        }

        function executeBuilding(data) {
            var builder = BuilderFactory.createQuestionBuilder();

            builder.runValidations(buildWork);
            builder.execute(buildWork);
            // builder.verifyWork() ?

            return builder.getWorkResult();
        }
    }

}());
