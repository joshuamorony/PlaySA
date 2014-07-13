Ext.define('playgrounds.store.Playgrounds', {
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
		}
	}
});