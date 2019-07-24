xdescribe('StaticVariableService Suite', function () {

  var service;
  var Mock = {};
  var Injections = [];

  beforeEach(function () {
    angular.mock.module('studio');

    mockData();

    angular.mock.inject(function (_$injector_) {

      Injections.WorkspaceService = _$injector_.get('WorkspaceService');
      Injections.AddStaticVariableEventFactory = _$injector_.get('resources.core.AddStaticVariableEventFactory');
      Injections.RemoveStaticVariableEventFactory = _$injector_.get('resources.core.RemoveStaticVariableEventFactory');
      Injections.UpdateStaticVariableEventFactory = _$injector_.get('resources.core.UpdateStaticVariableEventFactory');
      Injections.WorkspaceService.workspace = mockWorkspace();
      Mock.item = _$injector_.get('SurveyFactory').create('TEST');

      service = _$injector_.get('resources.business.StaticVariableService', Injections);

      spyOn(Injections.WorkspaceService, "getSurvey");
      spyOn(Injections.AddStaticVariableEventFactory, "create");
      spyOn(Injections.RemoveStaticVariableEventFactory, "create");
      spyOn(Injections.UpdateStaticVariableEventFactory, "create");
    });
  });

  describe('basic suit unit test', function () {
    it('serviceExistence check', function () {
      expect(service).toBeDefined();
    });
  })

  describe('createStructureToStaticVariable method', function () {
    it('should call getSurvey method', function () {
      service.createStructureToStaticVariable();
      expect(Injections.WorkspaceService.getSurvey).toHaveBeenCalledTimes(1);
    });

    it('should call createStaticVariable method', function () {
      service.createStructureToStaticVariable();
      expect(Injections.WorkspaceService.getSurvey().createStaticVariable).toHaveBeenCalledTimes(1);
    });
  });

  describe('createVariable method', function () {
    it('should call execute method', function () {
      service.createVariable(Mock.variable);
    });
  });

  describe('removeVariable method', function () {
    it('should call execute method', function () {
      service.removeVariable(Mock.variable);
    });
  });

  describe('updateVariable method', function () {
    it('should call execute method', function () {
      service.updateVariable(Mock.variable);
    });
  });

  describe('getStaticVariableList method', function () {
    it('should call execute method', function () {
      service.getStaticVariableList();
    });
  });

  function mockWorkspace() {
    return Mock.workspace = {
      isdb: {
        userEdits: {
          store: jasmine.createSpy()
        }
      },
      project: {
        survey: jasmine.createSpy()
      },
      sessions: {
        workspaceOwner: jasmine.createSpy()
      }
    }
  }

  function mockData() {
    Mock.variable = {
      name: 'CSJ10',
      description: 'Participante com diabetes:',
      sending: 1,
      customize: true,
      customizations: [
        {
          value: 0,
          label: 'Não'
        },
        {
          value: 1,
          label: 'Sim'
        }
      ]
    };
  }

});
