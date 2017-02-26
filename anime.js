var c = document.getElementById("canv");
var ctx = c.getContext("2d");
var c_h = $(window).height();
var c_w = $(window).width();
c.height = c_h;
c.width = c_w; //fullscreen canv

ctx.font = "3em Arial";
var rid = 0;

var b_circle = document.getElementById("b_circle");
var b_dvd = document.getElementById("b_dvd");
var b_stop = document.getElementById("b_stop");

ctx.fillStyle = "#83F52C";

var reset = function() {
    ctx.clearRect(0, 0, c.width, c.height);
}

var hypnosis = function(e) {
    window.cancelAnimationFrame(rid);
    var r = 0;
    var grow = true;
    var circle = function() {
	reset();
	ctx.beginPath();
	ctx.arc(0.5*c_w, 0.5*c_h, r, 0, 2*Math.PI);

	if (r % 5 == 0) {
	    var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' +Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
	    ctx.fillStyle = color;
	}
	ctx.fill()

	if (r >= 0 && r <= 0.15*c_w) {
	    if (grow){
		r += 1;
	    } else {
		r -= 1;
	    }
	}
	if (r == 0.15*c_w) {
	    grow = false;
	}
	if (r == 0) {
	    grow = true;
	}
	console.log(r);
	rid = window.requestAnimationFrame(circle);
    }
    circle();
}

var dvd = function(e) {
    window.cancelAnimationFrame(rid);
    var r = 200;    
    var x = Math.floor(Math.random() * (c_w - r));
    var y = Math.floor(Math.random() * (c_h - r/2));
    var dx = 1.5;
    var dy = 1.5;
    var drift = function() {
	reset();
	ctx.fillStyle = "#83F52C";
	ctx.fillRect(x, y, r, r/2);
	
	ctx.fillStyle = "#000000";
	ctx.fillText("DVD", x+50, y+65);

	//boing
	if (x < 0 || x > c_w-r){
	    dx = -1 * dx;
	}
	//boing
	if (y < 0 || y > c_h-(r/2)) {
	    dy = -1 * dy;
	}
	x += dx;
	y += dy;
	rid = window.requestAnimationFrame(drift);
    }
    drift();
}

var stop = function(e) {
    window.cancelAnimationFrame(rid);
}

b_circle.addEventListener("click", hypnosis);
b_dvd.addEventListener("click", dvd);
b_stop.addEventListener("click", stop);
