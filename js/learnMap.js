// GOOGLE MAPS

//The list of venues to learn music
var locations = [
    ['Guitar Center', 42.345990, -71.095909, '2-6 Hemenway Street, Boston, MA 02115', "http://www.guitarcenter.com/Services/Lessons/", "http://static.guitarcenter.com/img/brand/gc/cmn/gc_logo_icon_square.jpg", "(617) 247-1389"],

    ['School of Rock Boston', 42.366606, -71.155436, '120 Elm St, Watertown, MA 02472', "http://www.boston.schoolofrock.com", "http://media.merchantcircle.com/27088604/840x840_full.jpeg", "(617) 923-3434"],

    ['Berklee College of Music', 42.346591, -71.089577, '150 Massachusetts Ave, Boston, MA 02115', "http://www.berklee.edu", "https://www.berklee.edu/sites/default/files/Berklee-Stacked-knock-LOGO-15.gif", "(617) 266-1400"],

    ['Page Music Lessons', 42.348293, -71.086409, "334 Newbury St, Boston, MA 02115", "http://www.pagemusiclessons.com", "https://cbsboston.files.wordpress.com/2011/11/pagemusic1-e1320265702837.png?w=200&h=150", "(617) 267-7243"],

    ['Encore Music Lesson', 42.363712, -71.079234, "245 First St #1800, Cambridge, MA 02142", "http://www.encoremusiclessons.com", "https://pbs.twimg.com/profile_images/378800000147322594/2aefd3f4d9d8e93a1b8c90649690b1a2_400x400.png", "(617) 715-3504"],

    ['MMMMAVEN', 42.364957, -71.103252, "614 Massachusetts Ave #203, Cambridge, MA 02139", "http://www.mmmmaven.com", "http://www.cambridgelocalfirst.org/wp-content/uploads/2014/10/1067_Mmm_4.png", "(617) 849-9321"],

    ['North End Music and Performing Arts Center', 42.366228, -71.053437, "16 Charter St, Boston, MA 02113", "http://www.nempacboston.org", "https://static.sched.org/a9/2862532/avatar.jpg.320x320px.jpg?ac2", "(617) 227-2270"],

    ['Brookline Music School', 42.328621, -71.128624, "25 Kennard Rd, Brookline, MA 02445", "http://www.bmsmusic.org", "https://i.vimeocdn.com/portrait/10337086_300x300.jpg", "(617) 277-4593"],

    ['The Cantab Lounge', 42.366108, -71.105360, "738 Massachusetts Ave, Cambridge, MA 02139", "http://www.cantab-lounge.com/public_html/cantab_openmic.html", "https://3.bp.blogspot.com/-BPeLPJVun2U/V09FaQBni3I/AAAAAAAAAes/EFQCBZGywAkpVXBrTeVb0X1ViE-4o4LeACLcB/s640/cantab%2Bblue%2Blogo.jpg", "(617) 354-2685"],

    ['Lizard Lounge', 42.382105, -71.119403, "1667 Massachusetts Ave, Cambridge, MA 02138", "http://www.24hourtom.com/lizard-lounge-open-mic-monday", "http://uplup.com/music_spot/the-lizard-lounge-cambridge/additional_images/504435503_dmbLT-S.jpg", "(617) 547-0759"],
    
    ['School of Groove', 42.375155, -71.091566, '111 South St, Somerville, MA 02143', "http://www.111 South St, Somerville, MA 02143", "http://www.picklessons.com/i/196/c/5/school-of-groove.473i.jpg", "(617) 319-5113"],
];

//Information about the lists
var contentString = '<img id="img" style="width:125px;height:125px;float:center;margin-right:20px;margin-top:5px;" src=""/>' +
        '<div style="float:right;text-align:left;">' +
            '<h3></h3>' +
                '<div class="address">' +
                    '<img style="float:left;height:20px;width:20px;margin-right:10px;" src="https://image.freepik.com/free-icon/placeholder-on-a-map_318-37507.jpg">' +
                    '<p style="float:center;width:350px;" id="address"></p>' +
                '</div>' +
                '<div class="telephone">' +
                    '<img style="float:left;height:20px;width:20px;margin-right:10px;" src="http://www.clker.com/cliparts/0/f/c/2/1195445181899094722molumen_phone_icon.svg.hi.png">' +
                    '<p style="float:center;" id=telephone></p>' +
                '</div>' +
                '<div class="web">' +
                    '<img style="float:left;height:20px;width:20px;margin-right:10px;" src="http://www.clipartbest.com/cliparts/eiM/dze/eiMdzeK6T.svg">' +
                    '<a style="float:center;" id="attribute" href="">Website</a>' +
                '</div>' +
        '</div>'


//Creates the map on the canvas
function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(42.352764, -71.092421),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.open(map, marker);
                $('h3').text(locations[i][0]);
                $('#address').text(locations[i][3]);
                $('#attribute').each(function(){
                    this.href = locations[i][4];
                })
                $('#attribute').text(locations[i][4]);
                $('#img').each(function(){
                    this.src = locations[i][5];
                })
                $('#telephone').text(locations[i][6]);
            }
        })(marker, i));
    }
};
