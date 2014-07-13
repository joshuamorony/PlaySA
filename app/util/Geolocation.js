Ext.define('playgrounds.util.Geolocation', {

	singleton: true,

	onSuccess: function(position) {



		var store = Ext.getStore("Playgrounds");
		store.load({
			//scope: this,
			callback: function(records, operation, success){

			//store.suspendEvents(true);
			store.each(function(location){

				var lat2 = parseFloat(location.get('lat')) || 0;
				var lon2 = parseFloat(location.get('lng')) || 0;

				if(lat2 && lon2){

					var distance = playgrounds.util.Geolocation.getDistance(position.coords.latitude, position.coords.longitude, lon2, lat2);

					location.set('distance',distance);
				}

			}, this);
			//store.resumeEvents();
			//store.filter('distance',/\d/);
			store.sort('distance', 'ASC');
			//list.setMasked(false);

			}
		});

	},

	getDistance: function(lat1, lon1, lat2, lon2){
		var R = 6371;
		var dLat = this.deg2rad(lat2-lat1);
		var dLon = this.deg2rad(lon2-lon1);
		var lat1 = this.deg2rad(lat1);
		var lat2 = this.deg2rad(lat2);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        //km to miles
        //return d*0.621371192;
        return d;
	},

	onError: function(error) {
		//Ext.Msg.alert('GPS Failure', 'Distance will not be tracked');
	},

	deg2rad: function(deg) {
		return deg * (Math.PI/180);
	}

});

