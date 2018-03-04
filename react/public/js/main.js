var rellax = new Rellax('.rellax');
$(document).ready(function(){
    $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		if($('#nav-icon1').hasClass('open')) {
			$(".sideCont").stop(true, true).animate({
				right: 0,
				opacity: 1
			},200)
		} else {
			$(".sideCont").stop(true, true).animate({
				right: "150px",
				opacity: 0
			},100)
			
		}
	});
     $('#phones, #designs, #fonts, #leftCont, #rightSide').css('opacity', 0);
    
     $('#leftCont, #rightCont').waypoint(function() {
        $('#leftCont').addClass('animated fadeInLeft');
        $('#rightCont').addClass('animated fadeInRight');

     }, { offset: '100%' });

     $('#phones, #designs, #fonts').waypoint(function() {
         $('#phones').addClass('animated fadeInLeft');
         $('#designs').addClass('animated fadeInDown');
         $('#fonts').addClass('animated fadeInRight');
     }, { offset: '100%' });

     $('.popup-content').magnificPopup({
         type: "inline",
         midClick: true,
         removalDelay: 150,
         mainClass: 'mfp-fade'
    });

});

function changeBackground() {
    var colorSelect = document.getElementById('backColor');
    var cont = document.body.querySelector('.content');
    var port = document.body.querySelector('.portfolio');
    document.body.style.backgroundColor = cont.style.backgroundColor = port.style.backgroundColor = colorSelect.options[colorSelect.selectedIndex].value;
}
var fonts = document.querySelector('#fontSize');
var button = document.querySelector('#sizeBut');
var text = document.querySelectorAll('p');
var inval = document.querySelector('.invalid');
button.addEventListener('click', fontSizeButton);

function fontSizeButton() {
    if(fonts.value <= 24 && fonts.value >= 8) {
        for(var i = 0; i < text.length; i++) {
            text[i].style.fontSize = fonts.value + 'px';   
        }
        inval.classList.remove('visible');
        inval.classList.add('invalid');
    } else {
        inval.classList.remove('invalid');
        inval.classList.add('visible');
    }
}

function fontsStyle(select) {
    var value = select.options[select.selectedIndex].text;
    for (var i = 0; i < text.length; i++) {
		text[i].style.fontFamily = value;
	}
}
var deleteText = document.querySelector('#deleteText');

deleteText.onclick = function() {
        for(var i = text.length-1; i >= 0; i--) {
            return text[i].remove();
        }

}
// var sign = document.getElementById('auth');
// var sideB = document.getElementById('rightCont');
// var outBut = document.querySelector('#homeB li button');

// if(outBut.style.display = "inline-block") {
//     sideB.style.display = "block";    
// } else {
//     sideB.style.display = "none";
// }


// if(sideB.style.display = "block") {
//     var access = document.getElementById('access');
//     access.style.display = "none";
// }