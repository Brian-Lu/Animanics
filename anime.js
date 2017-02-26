var c = document.getElementById("canv");
var ctx = c.getContext("2d");
var c_h = $(window).height();
var c_w = $(window).width();
c.height = c_h;
c.width = c_w; //fullscreen canv

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
    console.log("dvd");
}

var stop = function(e) {
    window.cancelAnimationFrame(rid);
}

b_circle.addEventListener("click", hypnosis);
b_dvd.addEventListener("click", dvd);
b_stop.addEventListener("click", stop);
