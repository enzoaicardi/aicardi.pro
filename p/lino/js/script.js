
var square = document.querySelectorAll('.square');

/*

for(var i=0; i<square.length; i++){

    var h = 360/(square.length);
    var m = i;

    var b1 = 'hsl('+m*h+', 70%, 60%)';
    var b2 = 'hsl('+(m+0.5)*h+', 80%, 70%)';
    var b3 = 'hsl('+(m+1)*h+', 70%, 50%)';
    var b4 = 'hsl('+(m+1.5)*h+', 70%, 60%)';

    square[i].style.backgroundColor = b1;
    square[i].style.backgroundImage = 'conic-gradient('+b1+', '+b2+', '+b2+', '+b3+', '+b3+', '+b4+', '+b4+', '+b1+')';
}

*/

var logo = document.querySelectorAll('.logo');
var thumb = document.querySelector('.thumb');

for(var i=0; i<logo.length; i++){
    logo[i].addEventListener('click', full);
}

function full(e){
    var t = e.currentTarget;

    thumb.querySelector('img').src = t.querySelector('img').src;
    thumb.classList.remove('hidden');
}

thumb.addEventListener('click', function(e){
    if(e.target === thumb){
        thumb.classList.add('hidden');
    }
})