Ext.define('playgrounds.view.ReviewEditor', {
	extend: 'Ext.form.Panel',
	requires: 'Ext.form.FieldSet',
	xtype: 'revieweditor',

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
		itemId: 'revieweditor',
		items: [
			{
				xtype: 'segmentedbutton',
				layout: {
					pack: 'center',
					align: 'center',
				},
				items: [
					{
						text: '<img src = "resources/img/thumb-up.png" />',
						ui: 'confirm',
						pressed: true
					},
					{
						text: '<img src = "resources/img/thumb-down.png" />',
						ui: 'decline'
					}
				]
			},
			{
				xtype: 'textareafield',
				name: 'body',
				label: 'Comment',
				labelAlign: 'top',
				placeHolder: 'How was your experience?'
			},
            {
            	xtype: 'button',
            	text: 'Upload Photo'
            },
            {
                xtype: 'checkboxfield',
                label: 'Alert Council',
                labelWidth: '60%',
                value: 'alert'                  
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