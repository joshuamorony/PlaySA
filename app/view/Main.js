Ext.define('playgrounds.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {

        layout: {
            type: 'card'
        },

        control: {
            'button[id=backButton]': {
                tap: 'onMainBackButtonTap'
            }
        },
        
        listeners: [
            {
                fn: 'onSearchAction',
                event: 'keyup',
                delegate: '#search'            
            },
            {
                fn: 'onSearchReset',
                event: 'clearicontap',
                delegate: '#search'  
            }
        ],

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '<img src = "resources/img/logo2.png" style = "height: 39px; width: auto; margin-top: 3px;" />',
                items: [
                    {
                        xtype: 'button',
                        ui: 'plain',
                        id: 'backButton',
                        iconCls: 'left',
                        hidden: true
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        itemId: 'thumbs',
                        style: 'background-image: url(resources/img/thumb-up.png); width: 32px; height: 32px;',
                        hidden: true
                    },
                    {
                        xtype: 'container',
                        itemId: 'thumbsText',
                        html: '<span style = "color: #fff;">76%</span>',
                        hidden: true
                    }
                ]
            },
            {
                xtype: 'playgroundmap'
            }
        ]
    },

    onSearchAction: function(field, e, eOpts){

        var value = field.getValue(),
            store = Ext.getStore("Playgrounds");

            store.clearFilter();
        
        if(value){
            var searches = value.split(' '),
            regexps = [],
            i;
            
            for(i=0; i < searches.length; i++){
                if(!searches[i]) continue;
                
                regexps.push(new RegExp(searches[i], 'i'));
            }
            
            store.filter(function(record) {
                var matched = [];
                
                for(i=0; i < regexps.length; i++) {
                    var search = regexps[i];
                    didMatch = record.get('name').match(search);
                    
                    matched.push(didMatch);
                }
                
                if(regexps.length > 1 && matched.indexOf(false) != -1){
                    return false;
                }
                else {
                    return matched[0];
                }
            });
        }
    },

    onMainBackButtonTap: function(btn){

        var me = this,
            activeItem = me.getActiveItem();
            
        me.fireEvent('back', me, activeItem, btn);
    },

    onSearchReset: function(field){
        Ext.getStore("Playgrounds").clearFilter();
    }

});
