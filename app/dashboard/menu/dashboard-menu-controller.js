(function() {
    'use strict';

    angular
        .module('studio.dashboard')
        .controller('DashboardMenuController', DashboardMenuController);

    DashboardMenuController.$inject = [
        'LogoutDialogService',
        'DashboardStateService',
        '$mdSidenav'
    ];

    function DashboardMenuController(LogoutDialogService, DashboardStateService, $mdSidenav) {
        var self = this;

        /* Public interface */
        self.getSelectedSystemArea = getSelectedSystemArea;
        self.open = open;
        self.close = close;
        self.openHome = openHome;
        self.openFormTemplates = openFormTemplates;
        self.logout = logout;

        function getSelectedSystemArea() {
            return DashboardStateService.currentState;
        }

        function open() {
            $mdSidenav('left').toggle();
        }

        function close() {
            $mdSidenav('left').close();
        }

        function openHome() {
            DashboardStateService.goToHome();
            close();
        }

        function openFormTemplates() {
            DashboardStateService.goToFormTemplates();
            close();
        }

        function logout() {
            close();
            LogoutDialogService.showDialog()
                .onConfirm(DashboardStateService.logout);
        }
    }

}());