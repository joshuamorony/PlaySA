Ext.define('playgrounds.store.PlaygroundsAll', {
	extend: "Ext.data.Store",
	requires: ['playgrounds.model.Playground'],
	config: {
		autoLoad: true,
		model: 'playgrounds.model.Playground',
		storeId: 'Playgrounds',

		proxy: {
			type: 'ajax',
			url: 'playground_data_new.json',	
			reader: {
				type: 'json',
				rootProperty: 'data'
			}		
		},
		listeners: {
			/*load: function(){
				var all = this.data.all;
				Ext.getStore("Playgrounds").setData(all.slice(0,30));
			}*/
		}
	}
});