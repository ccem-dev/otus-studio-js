(function() {
    'use strict';

    angular
        .module('editor.engine.core')
        .service('SurveyEditorService', SurveyEditorService);

    SurveyEditorService.$inject = ['SurveyLoaderService', 'ModelService'];

    function SurveyEditorService(SurveyLoaderService, ModelService) {
        var self = this,
            currentSurvey = null;
        self.currentQuestionList = [];

        /* Public interface */
        self.initializeNewSurvey = initializeNewSurvey;
        self.getCurrentSurvey = getCurrentSurvey;
        self.editData = editData;

        function initializeNewSurvey() {
            currentSurvey = SurveyLoaderService.newSurvey();
            self.currentQuestionList = [];
            console.info('New survey initialized.');

            // surveyMemoryCache = new MemoryManagement();
            // generalEditingMemoryCache = new MemoryManagement(GENERAL_MEM_SIZE);
        }

        function closeSurvey() {
            EditorEngineService.close();
            console.info('Current survey closed.');
        }

        function saveSurvey() {
            EditorEngineService.save();
            console.info('Current survey saved.');
        }

        function loadSurvey() {
            // A persisted survey object should be load here.
            // var survey = SurveyLoader.loadSurvey();
            // initializeEditing(survey);
            console.info('Survey loaded.');
        }

        function getCurrentSurvey() {
            return currentSurvey;
        }

        function editData(editingEvent) {
            // console.log(editingEvent);
            console.log('editData from SurveyEditorService');
            ModelService.update(editingEvent, currentSurvey);
            console.log(currentSurvey);
            // generalEditingMemoryCache.storeState(editingEvent);
        }
    }

}());
