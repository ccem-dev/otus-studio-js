(function() {

    angular
        .module('editor.engine.core')
        .service('EditingEventService', EditingEventService);

    EditingEventService.$inject = ['EditingEventFactory', 'EditingStateFactory'];

    function EditingEventService(EditingEventFactory, EditingStateFactory) {
        var self = this;

        /* Public interface */
        self.observeEditing = observeEditing;
        self.performEditing = performEditing;

        function observeEditing(editingSource) {
            editingState = EditingStateFactory.create(editingSource);
        }

        function performEditing(editingSource) {
            var editingState = EditingStateFactory.create(editingSource),
                editingEvent = EditingEventFactory.create(editingSource, editingState);

            console.log(editingEvent);
        }
    }

}());
