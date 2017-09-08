var Controller = function() {
    var controller = {
        self: null,

        initialize: function() {
            self = this;
            new SQLiteStorageService().done(function(service) {
                self.storageService = service;
                console.log("Initiated SQLite DB");
                self.bindEvents();
                console.log("Binding events");
                // render search view after storage service is initialized
                self.renderSearchView();
                console.log('Rendered home page.');
            }).fail(function(error) {
                alert(error);
            });
        },

        bindEvents: function() {
            // Add button click here
        },

        renderSearchView: function() {
            // Render first view
            var $projectTemplate = null;
            $("#content").load("./views/search-project-view.html", function(data) {
                    $projectTemplate = $('.task').remove();
                });
            }
        }
        controller.initialize();
        return controller;
}