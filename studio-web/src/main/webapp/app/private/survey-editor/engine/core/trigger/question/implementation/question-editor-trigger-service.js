(function() {

    angular
        .module('editor.engine.core')
        .service('QuestionEditorTriggerService', QuestionEditorTriggerService);

    QuestionEditorTriggerService.$inject = ['EventService'];

    function QuestionEditorTriggerService(EventService) {
        var self = this,
            sourceComponentType = 'question-editor';

        /* Public interface */
        self.getTrigger = getTrigger;
        self.getSourceComponentType = getSourceComponentType;

        function getTrigger(editingSource) {
            return new QuestionEditorTrigger(EventService, editingSource);
        }

        function getSourceComponentType() {
            return sourceComponentType;
        }
    }

    function QuestionEditorTrigger(EventService, editingSource) {
        var self = this;

        self.name = 'QuestionEditorTrigger';
        self.tree = 'question';
        self.sourceComponentType = 'question-editor';
        self.editingSource = editingSource;

        watchDomComponent();

        function watchDomComponent() {
            var jqElement = angular.element(self.editingSource.component);

            jqElement.on('click', function setFocusTrigger() {
                EventService.performEvent(self.editingSource);
            });
        }
    }

}());
