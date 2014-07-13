Ext.define('playgrounds.util.Utility', {

	singleton: true,

	config: {
		baseUrl: 'http://www.example.com/'
	},

	// This function helps us to control transitions between pages
	showActiveItem: function(parentPanel, childPanel, direction, activeItem){
		if(parentPanel && childPanel){
					console.log("switching views");
			parentPanel.animateActiveItem(childPanel, {
				type: 'slide', 
				direction: direction,
				listeners: {
					animationend: function(){
						if(activeItem){
							//Having unused components lying around the place can slow
							//down our application. If an activeItem is supplies to this
							//function we destroy it after the animation has finished.
							console.log("Destroying inactive view");
							activeItem.destroy();
						}
					}
				}
			});
		}

		return this;
	}

});