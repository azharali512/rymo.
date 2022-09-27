'use strict';

(function ($){
	$('.banner_slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dots: true,
    smartSpeed:2000,
    autoHeight:false,
    autoplay:true
	});

    var dealine = new Date ('October 20, 2022 16:40:30').getTime();

var x = setInterval (function(){
    var currentTime = new Date().getTime();
    var t = dealine - currentTime;

    var days = Math.floor(t /(1000 * 60 * 60 * 24));

    var hours = Math.floor(t % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60));

    var minutes = Math.floor(t % (1000 * 60 * 60)/ (1000 * 60));
        
    var seconds = Math.floor((t % (1000 * 60)/ 1000));

    document.getElementById('day').innerHTML = days
    document.getElementById('hour').innerHTML = hours
    document.getElementById('minute').innerHTML = minutes
    document.getElementById('second').innerHTML = seconds

    if (t < 0) {
        clearInterval (x);
        document.getElementById('time-up').innerHTML = "time up"
        document.getElementById('day').innerHTML = "0"
        document.getElementById('hour').innerHTML = "0"
        document.getElementById('minute').innerHTML = "0"
        document.getElementById('second').innerHTML = "0"

    }

}, 1000);
})(jQuery);

