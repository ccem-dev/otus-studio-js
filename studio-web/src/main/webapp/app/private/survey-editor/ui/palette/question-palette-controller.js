(function() {

    angular
        .module('editor.ui')
        .service('QuestionPaletteController', QuestionPaletteController);

    function QuestionPaletteController() {
        var self = this,
            isOpened = false;

        /* Public interface */
        self.changeState = changeState;
        self.addText = addText;

        /* Public interface implemenation */
        function changeState() {
            isOpened = !isOpened;
        }

        function addText() {}

    }

}());
