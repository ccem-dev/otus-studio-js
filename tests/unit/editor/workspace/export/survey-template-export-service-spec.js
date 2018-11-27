// describe('SurveyExportService', function() {
//
//     var Mock = {};
//
//     /* @BeforeScenario */
//     beforeEach(function() {
//         angular.mock.module('studio');
//
//         mockSurveyTemplate();
//
//         inject(function(_$injector_) {
//             /* @InjectMocks */
//             service = _$injector_.get('SurveyExportService', {
//                 'WorkspaceService': mockWorkspaceService(_$injector_)
//             });
//         });
//     });
//
//     describe('service.exportSurvey method', function functionName() {
//
//         it('should return correct string for download', function functionName() {
//             var returnedJSON = service.exportSurvey(Mock.WorkspaceService.getSurvey().toJSON());
//
//             expect(returnedJSON).toEqual(Mock.SURVEY_TEMPLATE_RESULT);
//         });
//
//         it('should call encodeURIComponent', function functionName() {
//             spyOn(window, 'encodeURIComponent');
//
//             service.exportSurvey(Mock.WorkspaceService.getSurvey().toJSON());
//
//             expect(window.encodeURIComponent).toHaveBeenCalledWith(jasmine.any(String));
//         });
//
//     });
//
//     function mockSurveyTemplate() {
//         Mock.survey = {
//             oid: 'survey.oid',
//             name: 'survey.name',
//             version: 'survey.version',
//             toJSON: function() {
//                 return '{}';
//             }
//         };
//
//         Mock.SURVEY_TEMPLATE_RESULT = 'data:text/json;charset=utf-8,';
//         Mock.SURVEY_TEMPLATE_RESULT += encodeURIComponent(Mock.survey.toJSON());
//     }
//
//     function mockWorkspaceService($injector) {
//         Mock.WorkspaceService = $injector.get('WorkspaceService');
//
//         Mock.WorkspaceService.workspace = {
//             project: {
//                 'survey': Mock.survey
//             }
//         };
//
//         return Mock.WorkspaceService;
//     }
//
// });
