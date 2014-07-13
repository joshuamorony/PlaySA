Ext.define('playgrounds.view.DataEditor', {
	extend: 'Ext.form.Panel',
	requires: 'Ext.form.FieldSet',
	xtype: 'dataeditor',

	config: {

        control: {
            'button[id=save_note]': {
                tap: 'onSaveNoteTap'
            }
        },

		layout: 'fit',
		floating: true,
		modal: true,
		centered: true,
		hideOnMaskTap: true,
		fullscreen: true,
		scrollable: 'vertical',
		showAnimation: 'pop',
		style: 'width: 80%; height: 80%; background-color: #fff;',
		itemId: 'dataeditor',
		items: [
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/bbq.png" /> <span style = "position: relative; bottom: 10px;">BBQ Facilities</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/disabled.png" /> <span style = "position: relative; bottom: 10px;">Disabled Access</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/fence.png" /> <span style = "position: relative; bottom: 10px;">Fenced</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/picnic.png" /> <span style = "position: relative; bottom: 10px;">Picnic Area</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/playeq.png" /> <span style = "position: relative; bottom: 10px;">Play Equipment</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/shaded.png" /> <span style = "position: relative; bottom: 10px;">Shaded Area</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/shadedeq.png" /> <span style = "position: relative; bottom: 10px;">Shaded Equipment</span>',
                labelWidth: '70%'                 
            },
            {
                xtype: 'checkboxfield',
                label: '<img src = "resources/img/toilets.png" /> <span style = "position: relative; bottom: 10px;">Toilets</span>',
                labelWidth: '70%'                 
            },
            {
            	xtype: 'numberfield',
            	label: 'Climbing Equipment',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'Balancing Equipment',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'Activity Sets',
            	labelWidth: '70%'
            },
            {
            	xtype: 'selectfield',
            	label: 'Sandpit',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'Drink Fountains',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'Seats',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'Tables',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'BBQ Facilities',
            	labelWidth: '70%'
            },
            {
            	xtype: 'numberfield',
            	label: 'Toilets',
            	labelWidth: '70%'
            },
			{
				id: 'save_note',
				xtype: 'button',
				docked: 'bottom',
				ui: 'confirm',
				text: 'Submit'
			}
		]
	},

    onSaveNoteTap: function(){
        var me = this;
        me.fireEvent('saveNote', me);
    }  

});