sap.ui.controller("carlos.free.view.First", {

    handleListSelect: function(oEvent) {
        this.navigation.navTo("idViewApp--idViewSecond", oEvent.getParameter("listItem").getBindingContext());
    }


});