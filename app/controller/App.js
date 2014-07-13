Ext.define('playgrounds.controller.App', {
	extend: 'Ext.app.Controller',
	util: playgrounds.util.Utility,
	config: {

		refs: {
			main: 'main',
			playgroundList: 'playgroundlist',
			playgroundDetail: 'playgrounddetail'			
		},

		control: {
			
			main: {
				back: 'onMainBackButtonTap'
			},

			playgroundList: {
				select: 'onPlaygroundSelect'
			},

			playgroundDetail: {
				viewInformation: 'onViewInformation',
				viewReviews: 'onViewReviews',
				createReview: 'onCreateReview',
				editData: 'onEditData'
			}
		}
	},	

	launch: function(){
		var me = this;
	},

    onMainBackButtonTap: function(me, activeItem){

        var me = this,
            main = me.getMain(),
            playgroundmap = main.down('playgroundmap');

        playgrounds.util.Utility.showActiveItem(main, playgroundmap, 'right', activeItem);
        //Hide the back button and show the add button again
        main.down('[id=backButton]').hide();
        main.down('#thumbs').hide();
		main.down('#thumbsText').hide();
        
    },

	onPlaygroundSelect: function(list, record){

		console.log("Playground select");

		var main = this.getMain(),
			playgroundDetail = main.down('playgrounddetail');

		if(!playgroundDetail){
			playgroundDetail = main.add({
				xtype: 'playgrounddetail'
			});
		}

		//Now we will apply the selected record to the view
		playgroundDetail.getComponent('detailContainer').getComponent('name').setData(record.data);
		playgroundDetail.getComponent('title').setData(record.data);
		playgroundDetail.getComponent('icons').setData(record.data);

		//Deselect list item
		setTimeout(function(){list.deselect(record);},500);

		playgrounds.util.Utility.showActiveItem(main, playgroundDetail, 'left');

		main.down('#thumbs').show();
		main.down('#thumbsText').show();
		main.down('[id=backButton]').show();

	},

	onViewInformation: function(){
		var playgroundDetail = this.getPlaygroundDetail(),
			reviewContainer = playgroundDetail.down('#reviewContainer'),
			infoContainer = playgroundDetail.down('#detailContainer');

		infoContainer.setHidden(false);
		reviewContainer.setHidden(true);	
	},

	onViewReviews: function(){
		var playgroundDetail = this.getPlaygroundDetail(),
			reviewContainer = playgroundDetail.down('#reviewContainer'),
			infoContainer = playgroundDetail.down('#detailContainer');

		infoContainer.setHidden(true);
		reviewContainer.setHidden(false);	
	},

	onCreateReview: function(){
		var main = this.getMain(),
			playgroundDetail = this.getPlaygroundDetail();
			reviewEditor = playgroundDetail.down('revieweditor');

		//We don't want to add the view until it is needed
		if(!reviewEditor){
			reviewEditor = playgroundDetail.add({
				xtype: 'revieweditor'
			});
		}

		reviewEditor.show();		
	},

	onEditData: function(){
		var main = this.getMain(),
			playgroundDetail = this.getPlaygroundDetail();
			dataEditor = playgroundDetail.down('dataeditor');

		//We don't want to add the view until it is needed
		if(!dataEditor){
			dataEditor = playgroundDetail.add({
				xtype: 'dataeditor'
			});
		}

		dataEditor.show();		
	}

});