function myMap() {
var mapProp = {
    center:new google.maps.LatLng(6.528742,-3.620850),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);