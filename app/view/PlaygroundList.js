Ext.define('playgrounds.view.PlaygroundList', {
    extend: 'Ext.dataview.List',
    xtype: 'playgroundlist',
    requires: ['playgrounds.view.PlaygroundDetail'],

    config: {
        //The emptyText will be displayed when there are no list items
        emptyText: 'No Playgrounds',
       
        styleHtmlContent: true,
        store: "Playgrounds",
        itemTpl: '{name}',
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

    onSearchReset: function(field){
        Ext.getStore("Playgrounds").clearFilter();
    }

});
