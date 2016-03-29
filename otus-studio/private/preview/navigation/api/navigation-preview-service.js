(function() {
    'use strict';

    angular
        .module('preview.navigation')
        .service('NavigationPreviewService', NavigationPreviewService);

    function NavigationPreviewService() {
        var self = this;

        // Public interface
        self.createGraph = createGraph;

        // Private Interface
        var navigationGraph,
        renderer,
        layouter;

        function createGraph(navigationRules) {
            init();
            iterate(navigationRules, drawNodes);
            iterate(navigationRules, drawEdges);
            draw();
        }

        function init() {
            navigationGraph = new Graph();
        }

        function iterate(navigationRules, drawOptions) {
            for (var navigationRule in navigationRules) {
                drawOptions(navigationRules[navigationRule]);
            }
        }

        function drawNodes(navigationRule) {
            if (navigationRule.hasOwnProperty('origin')) {
                navigationGraph.addNode(navigationRule.origin);
            }
        }

        function drawEdges(navigationRule) {
            if (navigationRule.hasOwnProperty('destinations')) {
                for (var i = 0; i < navigationRule.destinations.length; i++) {
                    navigationGraph.addEdge(navigationRule.origin, navigationRule.destinations[i].to, {
                        directed: true
                    });
                }
            }
        }

        function draw() {
            layouter = new Graph.Layout.Spring(navigationGraph);
            renderer = new Graph.Renderer.Raphael('survey-navigation-graph', navigationGraph, $('#survey-navigation-graph').width(), $('#survey-navigation-graph').height());
            layouter.layout();
            renderer.draw();
        }
    }

}());