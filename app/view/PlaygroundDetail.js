Ext.define('playgrounds.view.PlaygroundDetail', {
	extend: 'Ext.Container',
	xtype: 'playgrounddetail',
	requires: ['playgrounds.view.ReviewEditor', 'playgrounds.view.DataEditor'],
	config: {

		itemId: 'playgrounddetail',

		control: {
			'button[id=addReview]': {
				tap: 'createReview'
			},
			'button[id=editData]': {
				tap: 'editData'
			}
		},

		layout: {
			type: 'vbox'
		},
		items: [
			{
				xtype: 'carousel',
				flex: 2,
			    items: [
			        {
			            style: 'background-image: url(resources/img/pg1.jpg); background-size: cover;'
			        },
			        {
			            style: 'background-image: url(resources/img/pg2.jpg); background-size: cover;'
			        },
			        {
			            style: 'background-image: url(resources/img/pg3.jpg); background-size: cover;'
			        }
			    ]
			},
			{
				xtype: 'container',
				layout: 'hbox',
				items: [
					{
						xtype: 'button',
						text: 'Review',
						style: 'width: 50%; border: 1px solid #fff; border-left: none;',
						id: 'addReview',
						ui: 'confirm'
					},
					{
						xtype: 'button',
						text: 'Edit',
						style: 'width: 50%; border: 1px solid #fff; border-left: none; border-right: none;',
						id: 'editData',
						ui: 'confirm'
					}
				],
			},
			{
				xtype: 'component',
				itemId: 'title',
				styleHtmlContent: true,
				tpl: '<center><h2 style = "margin-bottom: 0px;">{name}</h2></center>'
			},
			{
				xtype: 'component',
				itemId: 'icons',
				tpl: new Ext.XTemplate(document.getElementById('tpl_icons').innerHTML,
            {
                getIcons: function(record){
                    
                    var imgString = '';

                    if(record.icon_bbq == "Yes"){
                    	imgString += '<img src = "resources/img/bbq.png" />';
                    }

                    if(record.icon_disabled == "Yes"){
                    	imgString += '<img src = "resources/img/disabled.png" />';
                    }

                    if(record.icon_fence == "Yes"){
                    	imgString += '<img src = "resources/img/fence.png" />';
                    }

                     if(record.icon_picnic == "Yes"){
                    	imgString += '<img src = "resources/img/picnic.png" />';
                    }

                    if(record.icon_playeq == "Yes"){
                    	imgString += '<img src = "resources/img/playeq.png" />';
                    }

                    if(record.icon_shadedeq == "Yes"){
                    	imgString += '<img src = "resources/img/shadedeq.png" />';
                    }

                    if(record.icon_shelter == "Yes"){
                    	imgString += '<img src = "resources/img/shaded.png" />';
                    }

                    if(record.icon_toilets == "Yes"){
                    	imgString += '<img src = "resources/img/toilets.png" />';
                    }

                    return imgString;

                           /* <img src = "resources/img/bbq.png" />
        <img src = "resources/img/bike.png" />
        <img src = "resources/img/disabled.png" />
        <img src = "resources/img/fence.png" />
        <img src = "resources/img/picnic.png" />
        <img src = "resources/img/sport.png" />
        <img src = "resources/img/toilets.png" />
        <img src = "resources/img/walking.png" />*/
                }
            }
        ),
			},
			{
				xtype: 'segmentedbutton',
				layout: {
					pack: 'center',
					align: 'center',
				},
				listeners: {
					toggle: function(container, button, pressed){
						if(pressed){
							if(button.getText() == 'Information'){
								this.parent.fireEvent('viewInformation');
							}
							else
							{
								this.parent.fireEvent('viewReviews');
							}
						}
					}
				},
				items: [
					{
						text: 'Information',
						ui: 'confirm',
						pressed: true
					},
					{
						text: 'Reviews',
						ui: 'confirm'
					}
				]
			},
			{
				xtype: 'container',
				scrollable: 'vertical',
				itemId: 'detailContainer',
				style: 'background-color: #fff',
				flex: 4,
				hidden: false,
				showAnimation: 'fadeIn',
				items: [
					{
						xtype: 'component',
						itemId: 'name',
						styleHtmlContent: true,
						tpl: document.getElementById('tpl_playground_detail').innerHTML
					}
				]
			},
			{
				xtype: 'list',
				cls: 'reviews',
				flex: 4,
				itemId: 'reviewContainer',
				showAnimation: 'fadeIn',
				styleHtmlContent: true,
				hidden: true,
				itemTpl: document.getElementById('tpl_review').innerHTML,
				data: [
					{name: 'Ben Flink', review: 'Had a great time with the kids, traffic was a little loud but we\'ll definitely be coming back again.'},
					{name: 'Joshua Morony', review: 'Great park but watch out for the platform at the top of the green slide - there\'s a dangerous piece of wood poking out.'}
				]
			}
		]
	},

	createReview: function(){
		var me = this;
		this.fireEvent('createReview', me);
	},

	editData: function(){
		var me = this;
		this.fireEvent('editData', me);
	}

});