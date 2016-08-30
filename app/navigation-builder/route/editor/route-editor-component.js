(function() {
  'use strict';

  angular
    .module('otusjs.studio.navigationBuilder.routeBuilder')
    .component('otusRouteEditor', {
      templateUrl: 'app/navigation-builder/route/editor/route-editor.html',
      controller: component,
      bindings: {
        originNode: '<',
        destinationNode: '<',
        onCancel: '&',
        onConfirm: '&'
      }
    });

  component.$inject = [
    'otusjs.studio.navigationBuilder.routeBuilder.RouteBuilderService'
  ];

  function component(RouteBuilderService) {
    var self = this;
    self.routeConditions = [];

    /* Public methods */
    self.$onInit = onInit;
    self.deleteRule = deleteRule;
    self.cancel = cancel;
    self.save = save;

    function onInit() {
      _initializeLabels();
      RouteBuilderService.startRouteBuilding();
      self.condition = RouteBuilderService.selectedRouteCondition();
    }

    function deleteRule(ruleIndex) {
      RouteBuilderService.selectedRouteCondition().rules.splice(ruleIndex, 1);
    }

    function cancel() {
      self.onCancel();
    }

    function save() {
      RouteBuilderService.saveRouteBuilding();
    }

    function _initializeLabels() {
      self.label = {
        dialog: {
          title: 'Criar nova Rota'
        },
        button: {
          cancel: 'Cancelar',
          save: 'Salvar Rota',
          createRouteCondition: 'Criar grupo de Regras',
          deleteRouteCondition: 'Excluir grupo atual'
        },
        origin: 'Origem',
        destination: 'Destino',
        originNode: self.originNode.label,
        destinationNode: self.destinationNode.label,
        message: {
          emptyConditions: 'Você ainda não criou condições de rota. Clicando em CRIAR GRUPO DE REGRAS',
        }
      };
    }
  }
})();