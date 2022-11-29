var mapimg;


function preload(){
mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/600x600?access_token=pk.eyJ1IjoibWFraWZ5ZWdpbiIsImEiOiJjbGIxeWpwY2gxNmhjM3JtbG5oa2tnaXBiIn0.B6I97e_DwVgbU0CDf7jbyg')
}


function setup(){
    createCanvas(600, 600);
    image(mapimg, 0, 0);
}

function draw(){}

