var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 34.238923, lng: -118.529498 },
        zoom: 17,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map']
        }

    });

    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ],
        { name: 'Styled Map' });

    //Sets custom styling for the map
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Disables scrolling and zooming
    map.setOptions({ draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true });


    var nordhoffHallCoords = [

        { lat: 34.236692, lng: -118.530937 },
        { lat: 34.236034, lng: -118.530868 },
        { lat: 34.236025, lng: -118.530298 },
        { lat: 34.236692, lng: -118.530327 }
    ];
    var jacarandaHallCoords = [
        new google.maps.LatLng(34.241033317534516, -118.52784311776304),
        new google.maps.LatLng(34.24208676093393, -118.5278447270639),
        new google.maps.LatLng(34.2420794439212, -118.5287330747633),
        new google.maps.LatLng(34.24195084070501, -118.52874648580837),
        new google.maps.LatLng(34.24193088501591, -118.52944922440656),
        new google.maps.LatLng(34.24103952607842, -118.52945458882459),
        new google.maps.LatLng(34.241032973915196, -118.52784336724523)
    ];
    var sierraHallCoords = [
        new google.maps.LatLng(34.23845309041983, -118.53004883228095),
        new google.maps.LatLng(34.2384519817245, -118.53137652582518),
        new google.maps.LatLng(34.23811549199867, -118.53137451416842),
        new google.maps.LatLng(34.23811881809792, -118.5300468206242),
        new google.maps.LatLng(34.23845309041983, -118.53004883228095)
    ];
    var bookStoreCoords = [
        new google.maps.LatLng(34.237779111703574, -118.52866494658883),
        new google.maps.LatLng(34.23751302227418, -118.52872931960519),
        new google.maps.LatLng(34.23704292889356, -118.52866494658883),
        new google.maps.LatLng(34.23701631975578, -118.52762424949105),
        new google.maps.LatLng(34.23776137243446, -118.52774763110574),
        new google.maps.LatLng(34.23777290305456, -118.52866615355424)
    ];
    var oviattCoords = [
        new google.maps.LatLng(34.240405369311006, -118.5286365151569),
        new google.maps.LatLng(34.240403151971734, -118.53002858163563),
        new google.maps.LatLng(34.23965368795485, -118.53001785279957),
        new google.maps.LatLng(34.23948073377263, -118.52931511403767),
        new google.maps.LatLng(34.23964925323667, -118.52862578632084),
        new google.maps.LatLng(34.24040625630081, -118.52863758802414)
    ];
    var bayramianHallCoords = [
        new google.maps.LatLng(34.24070160525722, -118.53146517280038),
        new google.maps.LatLng(34.24037787424588, -118.53144907954629),
        new google.maps.LatLng(34.23992110097536, -118.53121840957101),
        new google.maps.LatLng(34.23992997038284, -118.53081607821878),
        new google.maps.LatLng(34.240235964368956, -118.53081071380075),
        new google.maps.LatLng(34.240253703116664, -118.53015089038308),
        new google.maps.LatLng(34.24069717059423, -118.53012406845664),
        new google.maps.LatLng(34.2407033792306, -118.53146731853485)
    ];
    var sequoiaHallCoords = [
        new google.maps.LatLng(34.24077699462743, -118.52843427677726),
        new google.maps.LatLng(34.24010292377745, -118.52843964119529),
        new google.maps.LatLng(34.24010292377745, -118.52760815640067),
        new google.maps.LatLng(34.24078586394474, -118.52768325825309),
        new google.maps.LatLng(34.2407787684639, -118.52843642234802)
    ];
    var jeromeHallCoords = [
        new google.maps.LatLng(34.23871063983549, -118.53093168144369),
        new google.maps.LatLng(34.23906985525641, -118.5309330225482),
        new google.maps.LatLng(34.23907052037401, -118.53028607378292),
        new google.maps.LatLng(34.23870243542004, -118.53029143820095),
        new google.maps.LatLng(34.23870997471507, -118.53093087673187)
    ];
    var vpacCoords = [
        new google.maps.LatLng(34.23630984399094, -118.5287706255923),
        new google.maps.LatLng(34.23578208992583, -118.5287706255923),
        new google.maps.LatLng(34.23586191848415, -118.52757436037166),
        new google.maps.LatLng(34.23630762654381, -118.52755558490855),
        new google.maps.LatLng(34.23631427888505, -118.52877599001033)
    ];
    var manzanitaHallCoords = [
        new google.maps.LatLng(34.2378278944714, -118.52948570254739),
        new google.maps.LatLng(34.23780572039727, -118.5306390524238),
        new google.maps.LatLng(34.23759728381481, -118.53061759475167),
        new google.maps.LatLng(34.23690101319189, -118.5305693149894),
        new google.maps.LatLng(34.23690101319189, -118.53032791617807),
        new google.maps.LatLng(34.237579766482185, -118.53030404449328),
        new google.maps.LatLng(34.23759595352252, -118.52947872878758),
        new google.maps.LatLng(34.23782739361261, -118.52948810850773)
    ];
    var collegeOfEducationCoords = [
        new google.maps.LatLng(34.24153842203381, -118.53141260156917),
        new google.maps.LatLng(34.241112697554755, -118.53140991936016),
        new google.maps.LatLng(34.24108608970332, -118.53040409097957),
        new google.maps.LatLng(34.24125682327051, -118.53040140877056),
        new google.maps.LatLng(34.2415295527958, -118.53067767629909)
    ];
    var businessAndEconCoords = [
        new google.maps.LatLng(34.2414519469571, -118.53024315843868),
        new google.maps.LatLng(34.241673677831656, -118.52996689091015),
        new google.maps.LatLng(34.24246746955737, -118.53096199045467),
        new google.maps.LatLng(34.242378778113995, -118.53103172788906),
        new google.maps.LatLng(34.242287869287594, -118.53091639290142),
        new google.maps.LatLng(34.24213931075018, -118.53106927881527),
        new google.maps.LatLng(34.24145194692326, -118.53024852285671)
    ];
    var eucalyptusHallCoords = [
        new google.maps.LatLng(34.23876673966938, -118.52881354103374),
        new google.maps.LatLng(34.23855830546625, -118.52880281219768),
        new google.maps.LatLng(34.23856052285412, -118.52761191139507),
        new google.maps.LatLng(34.23876452228696, -118.52767360220241),
        new google.maps.LatLng(34.23876762667646, -118.52881461381912)
    ];
    var liveOakHallCoords = [
        new google.maps.LatLng(34.2383920012445, -118.52881354103374),
        new google.maps.LatLng(34.23818800090897, -118.52881085882473),
        new google.maps.LatLng(34.238168044327836, -118.52763336906719),
        new google.maps.LatLng(34.238385349067435, -118.52767628441143),
        new google.maps.LatLng(34.23839089519493, -118.52881458761465)
    ];
    var citrusHallCoords = [
        new google.maps.LatLng(34.23913482437603, -118.52826905260372),
        new google.maps.LatLng(34.23893082584049, -118.52826368818569),
        new google.maps.LatLng(34.238910869435486, -118.52757704267788),
        new google.maps.LatLng(34.23912595488476, -118.52766287336635),
        new google.maps.LatLng(34.23913151266631, -118.52826993373384)
    ];
    var cyprusHallCoords = [
        new google.maps.LatLng(34.23670676625632, -118.53009831915188),
        new google.maps.LatLng(34.23603488027006, -118.53009831915188),
        new google.maps.LatLng(34.236026010452214, -118.52928560982036),
        new google.maps.LatLng(34.236713418566, -118.52928292761135),
        new google.maps.LatLng(34.236707653251266, -118.53009939193726)
    ];
    //Setting coordinates to new google map polygon      
    var nordhoffHall = new google.maps.Polygon({
        paths: nordhoffHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var jacarandaHall = new google.maps.Polygon({
        paths: jacarandaHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var sierraHall = new google.maps.Polygon({
        paths: sierraHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var bookStore = new google.maps.Polygon({
        paths: bookStoreCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var oviattLibrary = new google.maps.Polygon({
        paths: oviattCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var bayramianHall = new google.maps.Polygon({
        paths: bayramianHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var sequoiaHall = new google.maps.Polygon({
        paths: sequoiaHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    var jeromeHall = new google.maps.Polygon({
        paths: jeromeHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var vpac = new google.maps.Polygon({
        paths: vpacCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var manzanitaHall = new google.maps.Polygon({
        paths: manzanitaHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var collegeOfEducation = new google.maps.Polygon({
        paths: collegeOfEducationCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var businessAndEcon = new google.maps.Polygon({
        paths: businessAndEconCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var eucalyptusHall = new google.maps.Polygon({
        paths: eucalyptusHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var liveOakHall = new google.maps.Polygon({
        paths: liveOakHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var citrusHall = new google.maps.Polygon({
        paths: citrusHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    var cyprusHall = new google.maps.Polygon({
        paths: cyprusHallCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    nordhoffHall.setMap(map);
    jacarandaHall.setMap(map);
    sierraHall.setMap(map);
    bookStore.setMap(map);
    oviattLibrary.setMap(map);
    bayramianHall.setMap(map);
    sequoiaHall.setMap(map);
    jeromeHall.setMap(map);
    vpac.setMap(map);
    manzanitaHall.setMap(map);
    collegeOfEducation.setMap(map);
    businessAndEcon.setMap(map);
    eucalyptusHall.setMap(map);
    liveOakHall.setMap(map);
    citrusHall.setMap(map);
    cyprusHall.setMap(map);
    // Map onClick events
    nordhoffHall.addListener('click', showNordhoff);
    jacarandaHall.addListener('click', showJacaranda);
    sierraHall.addListener('click', showSierra);
    bookStore.addListener('click', showBookstore);

}

function showNordhoff(event) {
    alert('This is Nordhoff hall');
}
function showJacaranda(event) {
    alert('This is Jacaranda hall');
}
function showSierra(event) {
    alert('This is Sierra hall');
}
function showBookstore(event) {
    alert('This is the Matador Bookstore');
}   