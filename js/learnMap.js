// GOOGLE MAPS

//The list of venues to learn music
var locations = [
    ['Guitar Center', 42.345990, -71.095909, '2-6 Hemenway Street, Boston, MA 02115', "http://www.guitarcenter.com/Services/Lessons/", "../logo.png"],
    ['School of Rock Boston', 42.366606, -71.155436, '120 Elm St, Watertown, MA 02472', "http://www.boston.schoolofrock.com", "../logo.png"],
    ['Berklee College of Music', 42.346591, -71.089577, '150 Massachusetts Ave, Boston, MA 02115', "http://www.berklee.edu", "../logo.png"],
    ['Page Music Lessons', 42.348293, -71.086409, "334 Newbury St, Boston, MA 02115", "http://www.pagemusiclessons.com", "../logo.png"],
    ['Encore Music Lesson', 42.363712, -71.079234, "245 First St #1800, Cambridge, MA 02142", "http://www.encoremusiclessons.com", "../logo.png"],
    ['MMMMAVEN', 42.364957, -71.103252, "614 Massachusetts Ave #203, Cambridge, MA 02139", "http://www.mmmmaven.com", "../logo.png"],
    ['North End Music and Performing Arts Center', 42.366228, -71.053437, "16 Charter St, Boston, MA 02113", "http://www.nempacboston.org", "../logo.png"],
    ['Brookline Music School', 42.328621, -71.128624, "25 Kennard Rd, Brookline, MA 02445", "http://www.bmsmusic.org", "../logo.png"],
    ['The Cantab Lounge', 42.366108, -71.105360, "738 Massachusetts Ave, Cambridge, MA 02139", "http://www.cantab-lounge.com/public_html/cantab_openmic.html", "../logo.png"],
    ['Lizard Lounge', 42.382105, -71.119403, "1667 Massachusetts Ave, Cambridge, MA 02138", "http://www.24hourtom.com/lizard-lounge-open-mic-monday", "../logo.png"],
];

//Information about the lists
var contentString = '<img id="img" style="width=50px;height=50px;" src=""/>'
        '<h3></h3>' +
        '<p id="address"></p>' +
        '<a id="attribute" href="">Website</a>'


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

    // var marker, i;

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
            }
        })(marker, i));
    }
};
