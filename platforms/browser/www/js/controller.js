var Controller = function() {
		var controller = {
			self: null,
			initialize: function() {
				self = this;
				console.log('Initializing controller');
				self.bindEvents();
				console.log("Binding events");
				self.renderSearchView();
				console.log('Rendered home page.');
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