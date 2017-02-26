var c = document.getElementById("canv");
var ctx = c.getContext("2d");
var rid = 0;

var b_circle = document.getElementById("b_circle");
var b_dvd = document.getElementById("b_dvd");
var b_stop = document.getElementById("b_stop");
b_circle.addEventListener("click", hypnosis);
b_dvd.addEventListener("click", dvd);
b_stop.addEventListener("click", stop);

var hypnosis = function(e) {
    window.cancelAnimationFrame(rid);
    var r = 0;
    var circle = function() {
	ctx.beginPath();
	ctx.arc(  
