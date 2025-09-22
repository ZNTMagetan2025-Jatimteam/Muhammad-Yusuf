var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MuhammadYusuf_3 = new ol.format.GeoJSON();
var features_MuhammadYusuf_3 = format_MuhammadYusuf_3.readFeatures(json_MuhammadYusuf_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuhammadYusuf_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuhammadYusuf_3.addFeatures(features_MuhammadYusuf_3);
var lyr_MuhammadYusuf_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MuhammadYusuf_3, 
                style: style_MuhammadYusuf_3,
                popuplayertitle: 'Muhammad Yusuf',
                interactive: true,
    title: 'Muhammad Yusuf<br />\
    <img src="styles/legend/MuhammadYusuf_3_0.png" /> 1<br />\
    <img src="styles/legend/MuhammadYusuf_3_1.png" /> 2<br />\
    <img src="styles/legend/MuhammadYusuf_3_2.png" /> 3<br />\
    <img src="styles/legend/MuhammadYusuf_3_3.png" /> 4<br />\
    <img src="styles/legend/MuhammadYusuf_3_4.png" /> 5<br />\
    <img src="styles/legend/MuhammadYusuf_3_5.png" /> 6<br />\
    <img src="styles/legend/MuhammadYusuf_3_6.png" /> 7<br />\
    <img src="styles/legend/MuhammadYusuf_3_7.png" /> 8<br />\
    <img src="styles/legend/MuhammadYusuf_3_8.png" /> 9<br />\
    <img src="styles/legend/MuhammadYusuf_3_9.png" /> 10<br />\
    <img src="styles/legend/MuhammadYusuf_3_10.png" /> 11<br />\
    <img src="styles/legend/MuhammadYusuf_3_11.png" /> 12<br />\
    <img src="styles/legend/MuhammadYusuf_3_12.png" /> 13<br />\
    <img src="styles/legend/MuhammadYusuf_3_13.png" /> 14<br />\
    <img src="styles/legend/MuhammadYusuf_3_14.png" /> 15<br />\
    <img src="styles/legend/MuhammadYusuf_3_15.png" /> 16<br />\
    <img src="styles/legend/MuhammadYusuf_3_16.png" /> 17<br />\
    <img src="styles/legend/MuhammadYusuf_3_17.png" /> 18<br />\
    <img src="styles/legend/MuhammadYusuf_3_18.png" /> 19<br />\
    <img src="styles/legend/MuhammadYusuf_3_19.png" /> 20<br />\
    <img src="styles/legend/MuhammadYusuf_3_20.png" /> 21<br />\
    <img src="styles/legend/MuhammadYusuf_3_21.png" /> 22<br />\
    <img src="styles/legend/MuhammadYusuf_3_22.png" /> 23<br />\
    <img src="styles/legend/MuhammadYusuf_3_23.png" /> 24<br />\
    <img src="styles/legend/MuhammadYusuf_3_24.png" /> 25<br />\
    <img src="styles/legend/MuhammadYusuf_3_25.png" /> 26<br />\
    <img src="styles/legend/MuhammadYusuf_3_26.png" /> 27<br />\
    <img src="styles/legend/MuhammadYusuf_3_27.png" /> 28<br />\
    <img src="styles/legend/MuhammadYusuf_3_28.png" /> 29<br />\
    <img src="styles/legend/MuhammadYusuf_3_29.png" /> 30<br />\
    <img src="styles/legend/MuhammadYusuf_3_30.png" /> 31<br />\
    <img src="styles/legend/MuhammadYusuf_3_31.png" /> 32<br />\
    <img src="styles/legend/MuhammadYusuf_3_32.png" /> 33<br />\
    <img src="styles/legend/MuhammadYusuf_3_33.png" /> 34<br />\
    <img src="styles/legend/MuhammadYusuf_3_34.png" /> 35<br />\
    <img src="styles/legend/MuhammadYusuf_3_35.png" /> 36<br />\
    <img src="styles/legend/MuhammadYusuf_3_36.png" /> 37<br />\
    <img src="styles/legend/MuhammadYusuf_3_37.png" /> 38<br />\
    <img src="styles/legend/MuhammadYusuf_3_38.png" /> 39<br />\
    <img src="styles/legend/MuhammadYusuf_3_39.png" /> <br />' });
var format_OSMROADMAGETAN_4 = new ol.format.GeoJSON();
var features_OSMROADMAGETAN_4 = format_OSMROADMAGETAN_4.readFeatures(json_OSMROADMAGETAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMROADMAGETAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMROADMAGETAN_4.addFeatures(features_OSMROADMAGETAN_4);
var lyr_OSMROADMAGETAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMROADMAGETAN_4, 
                style: style_OSMROADMAGETAN_4,
                popuplayertitle: 'OSM ROAD MAGETAN',
                interactive: false,
    title: 'OSM ROAD MAGETAN<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_0.png" /> motorway<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_1.png" /> primary<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_2.png" /> secondary<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_3.png" /> tertiary<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_4.png" /> trunk<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_5.png" /> unclassified<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_6.png" /> motorway_link<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_7.png" /> path<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_8.png" /> residential<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_9.png" /> service<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_10.png" /> tertiary_link<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_11.png" /> track<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_12.png" /> trunk_link<br />\
    <img src="styles/legend/OSMROADMAGETAN_4_13.png" /> <br />' });
var format_titikpembantusampel_5 = new ol.format.GeoJSON();
var features_titikpembantusampel_5 = format_titikpembantusampel_5.readFeatures(json_titikpembantusampel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikpembantusampel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikpembantusampel_5.addFeatures(features_titikpembantusampel_5);
var lyr_titikpembantusampel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikpembantusampel_5, 
                style: style_titikpembantusampel_5,
                popuplayertitle: 'titik pembantu sampel',
                interactive: true,
                title: '<img src="styles/legend/titikpembantusampel_5.png" /> titik pembantu sampel'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_MuhammadYusuf_3.setVisible(true);lyr_OSMROADMAGETAN_4.setVisible(true);lyr_titikpembantusampel_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_GoogleMaps_2,lyr_MuhammadYusuf_3,lyr_OSMROADMAGETAN_4,lyr_titikpembantusampel_5];
lyr_MuhammadYusuf_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'NOZN': 'NOZN', 'PENGGUNAAN': 'PENGGUNAAN', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'JMLSMPL': 'JMLSMPL', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'JNSZN': 'JNSZN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas_M2': 'Luas_M2', 'HISTZONE': 'HISTZONE', 'legenda': 'legenda', });
lyr_OSMROADMAGETAN_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_titikpembantusampel_5.set('fieldAliases', {'No_Urut_En': 'No_Urut_En', 'Kode_Titik': 'Kode_Titik', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'XTM': 'XTM', 'YTM': 'YTM', 'Status_Kep': 'Status_Kep', 'Jenis_Data': 'Jenis_Data', 'Tanggal_Pe': 'Tanggal_Pe', 'Harga': 'Harga', 'Luas_tanah': 'Luas_tanah', 'Penggunaan': 'Penggunaan', 'Luas_Bangu': 'Luas_Bangu', 'Tahun_Pemb': 'Tahun_Pemb', 'Tahun_Reno': 'Tahun_Reno', });
lyr_MuhammadYusuf_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'Range', 'NOZN': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'JMLSMPL': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'JNSZN': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas_M2': 'TextEdit', 'HISTZONE': 'TextEdit', 'legenda': 'TextEdit', });
lyr_OSMROADMAGETAN_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_titikpembantusampel_5.set('fieldImages', {'No_Urut_En': 'TextEdit', 'Kode_Titik': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'XTM': 'TextEdit', 'YTM': 'TextEdit', 'Status_Kep': 'TextEdit', 'Jenis_Data': 'TextEdit', 'Tanggal_Pe': 'TextEdit', 'Harga': 'TextEdit', 'Luas_tanah': 'TextEdit', 'Penggunaan': 'TextEdit', 'Luas_Bangu': 'TextEdit', 'Tahun_Pemb': 'TextEdit', 'Tahun_Reno': 'TextEdit', });
lyr_MuhammadYusuf_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'OBJECTID_1': 'hidden field', 'NOZN': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'JMLSMPL': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'JNSZN': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Luas_M2': 'inline label - always visible', 'HISTZONE': 'inline label - always visible', 'legenda': 'hidden field', });
lyr_OSMROADMAGETAN_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_titikpembantusampel_5.set('fieldLabels', {'No_Urut_En': 'inline label - always visible', 'Kode_Titik': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'XTM': 'inline label - always visible', 'YTM': 'inline label - always visible', 'Status_Kep': 'inline label - always visible', 'Jenis_Data': 'inline label - always visible', 'Tanggal_Pe': 'inline label - always visible', 'Harga': 'inline label - always visible', 'Luas_tanah': 'inline label - always visible', 'Penggunaan': 'inline label - always visible', 'Luas_Bangu': 'inline label - always visible', 'Tahun_Pemb': 'inline label - always visible', 'Tahun_Reno': 'inline label - always visible', });
lyr_titikpembantusampel_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});