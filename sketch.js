var mapimg;

var clat = 0;
var clon = 0;

// 31.2304N,   121.4737 E

var lat = 49.2820;
var lon = -123.1207;
var earthquakes;

function preload() {
    mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibWFraWZ5ZWdpbiIsImEiOiJjbGIxeWpwY2gxNmhjM3JtbG5oa2tnaXBiIn0.B6I97e_DwVgbU0CDf7jbyg');
    earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}
var zoom = 1;
function setup() {
    createCanvas(1024, 512); // create a canvas.
    image(mapimg, 0, 0);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    var cx = mercX(clon);
    var cy = mercY(clat);
for (var i = 0; i < earthquakes.length; i++) {
    var data = earthquakes[i].split(/,/);

    var lat = data[1];
    var long = data[2];
    var mag = data[4];
    var x = mercX(long) - cx;
    var y = mercY(lat) - cy;

    mag = pow(10,mag);
    mag = sqrt(mag);

    var magmax = sqrt(pow(10, 10));

    var d = map(mag, 0, magmax, 0, 180);
    stroke(255,0,255)
    fill(255, 0, 255, 200);
    ellipse(x, y, d, d);
}
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(255, 0, 255, 200);
    ellipse(x, y, 8, 8);
}


function mercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
}
function mercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);

    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
}



