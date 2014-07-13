var gMap;

Ext.define('playgrounds.view.PlaygroundMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'playgroundmap',

    config: {

        layout: {
            type: 'vbox'
        },
        
        items: [
            {
                xtype: 'map',
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 14
                },
                useCurrentLocation: false,
                flex: 3
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items:[
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/default.png); width: 32px; height: 37px;',
                        cls: 'iconSelected',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/bbq.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
 
                            var playgroundsStore = Ext.getStore("Playgrounds");

                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");

                                playgroundsStore.filter(function(record){
                                    return record.get('bbq') > 0;
                                });

                                Ext.Msg.alert('BBQ Facilities', 'Now filtering for playgrounds with barbecue facilities. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                                playgroundsStore.clearFilter();
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/disabled.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){

                            var playgroundsStore = Ext.getStore("Playgrounds");

                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");

                                playgroundsStore.filter(function(record){
                                    return record.get('access_d') == "Yes";
                                });

                                Ext.Msg.alert('Disabled Access', 'Now filtering for playgrounds with disabled access. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                                playgroundsStore.clearFilter();
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/fence.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
                            console.log(this.getCls());

                            var playgroundsStore = Ext.getStore("Playgrounds");

                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");

                                playgroundsStore.filter(function(record){
                                    return record.get('fences') == "Yes";
                                });

                                Ext.Msg.alert('Disabled Access', 'Now filtering for playgrounds with disabled access. Tap again to remove.');

                                Ext.Msg.alert('Fencing', 'Now filtering for playgrounds with fencing. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                                playgroundsStore.clearFilter();
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/picnic.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
                            console.log(this.getCls());
                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");
                                Ext.Msg.alert('Picnic Facilities', 'Now filtering for playgrounds with picnic facilities. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/playeq.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
                            console.log(this.getCls());
                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");
                                Ext.Msg.alert('Play Equipment', 'Now filtering for playgrounds with play equipment. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/shaded.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
                            console.log(this.getCls());
                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");
                                Ext.Msg.alert('Shaded Area', 'Now filtering for playgrounds with shade available. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/shadedeq.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
                            console.log(this.getCls());
                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");
                                Ext.Msg.alert('Shaded Equipment', 'Now filtering for playgrounds with shaded equipment. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        style: 'background-image: url(resources/img/toilets.png); width: 32px; height: 37px;',
                        cls: 'iconUnselected',
                        ui: 'plain',
                        handler: function(){
                            console.log(this.getCls());
                            if(this.getCls() == "iconUnselected"){
                                this.setCls("iconSelected");
                                this.removeCls("iconUnselected");
                                Ext.Msg.alert('Toilets', 'Now filtering for playgrounds with toilets. Tap again to remove.');
                            }
                            else
                            {
                                this.setCls("iconUnselected");
                                this.removeCls("iconSelected");
                            }
                        }
                    }

                ]
            },
            {
                xtype: 'playgroundlist',
                flex: 2
            }
        ]
    },

    initialize: function(){
        var me = this;

        me.callParent(arguments);
        this.initMap();

    },

    toggleBikeLayer: function(){
        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(gMap);
    },

    initMap: function(){

        var mapPanel = this.down('map');
        gMap = mapPanel.getMap();

        var playgroundStore = Ext.getStore("Playgrounds");
        console.log(playgroundStore);

        playgroundStore.load({
            scope: this,
            callback: function(records, operation, success){
                if(success)
                {
                    playgroundStore.each(function(record){

                        var lat = record.get('xcoord');
                        var lng = record.get('ycoord');

                        var markerIcon = 'resources/img/default.png';

                        if(record.get('access_d') == 'Yes'){
                            markerIcon = 'resources/img/disabled.png';
                        }

                        var marker = new google.maps.Marker({
                            map: gMap,
                            animation: google.maps.Animation.DROP,
                            title: record.get('name'),
                            icon: markerIcon,
                            position: new google.maps.LatLng(lng, lat)
                        });

                        var imgString = '';

                        if(record.get('icon_bbq') == "Yes"){
                            imgString += '<img src = "resources/img/bbq.png" />';
                        }

                        if(record.get('icon_disabled') == "Yes"){
                            imgString += '<img src = "resources/img/disabled.png" />';
                        }

                        if(record.get('icon_fence') == "Yes"){
                            imgString += '<img src = "resources/img/fence.png" />';
                        }

                         if(record.get('icon_picnic') == "Yes"){
                            imgString += '<img src = "resources/img/picnic.png" />';
                        }

                        if(record.get('icon_playeq') == "Yes"){
                            imgString += '<img src = "resources/img/playeq.png" />';
                        }

                        if(record.get('icon_shadedeq') == "Yes"){
                            imgString += '<img src = "resources/img/shadedeq.png" />';
                        }

                        if(record.get('icon_shelter') == "Yes"){
                            imgString += '<img src = "resources/img/shaded.png" />';
                        }

                        if(record.get('icon_toilets') == "Yes"){
                            imgString += '<img src = "resources/img/toilets.png" />';
                        }

                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow = new google.maps.InfoWindow({
                                content: "<strong>" + record.get('name') + "</strong><br />" + imgString + "<br /><a id = \"view\" href = \"#\">View details</a>"
                            });
                            infowindow.open(gMap, marker);
                        });

                    });               
                }
            }
        });

    }
});
