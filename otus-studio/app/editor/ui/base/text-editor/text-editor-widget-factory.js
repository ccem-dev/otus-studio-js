(function() {
    'use strict';

    angular
        .module('editor.ui')
        .factory('OtusTextEditorWidgetFactory', OtusTextEditorWidgetFactory);

    OtusTextEditorWidgetFactory.$inject = [
        'UpdateQuestionEventFactory'
    ];

    function OtusTextEditorWidgetFactory(UpdateQuestionEventFactory) {
        var self = this;

        self.create = create;

        function create(bind) {
            bind.scope.widget = new OtusTextEditorWidget(bind, UpdateQuestionEventFactory);
            return bind.scope.widget;
        }

        return self;
    }

    function OtusTextEditorWidget(bind, UpdateQuestionEventFactory) {
        var self = this;

        /* Type definitions */
        self.name = 'OtusTextEditor';
        self.input = angular.element(bind.element.children()[0]);

        /* Instance definitions */
        self.ngModel = bind.scope.ngModel;

        /* User definitions */
        self.placeholder = bind.scope.placeholder;

        bind.element.on('keyup', function(event) {
            self.ngModel.ptBR.formattedText = event.target.innerHTML;
            self.ngModel.ptBR.plainText = event.target.innerText;
            UpdateQuestionEventFactory.create().execute(self);
        });

        self.input.on('focus', function(event) {
        });
    }

}());
