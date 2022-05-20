
var colorMode = localStorage.getItem('color-mode');
if(colorMode) document.body.setAttribute('class', colorMode);

// header
var header = qs('.global-header');
var nav = qs('nav', header);

// switch color mode
qs('.header-right', header).addEventListener('click', function(){
    document.body.classList.toggle('dark_mode');
    localStorage.setItem('color-mode', document.body.getAttribute('class'));
}, {passive: true});

// mobile menu
qs('.menu', header).addEventListener('click', function(){
    navToggle();
}, {passive: true});

function navToggle(){
    nav.classList.toggle('v');
    qs('.menu', header).classList.toggle('close');
}
function navClose(){
    nav.classList.remove('v');
    qs('.menu', header).classList.remove('close');
}

// sections
var sections = qsa('body > section');

var easingCubic = function(x){ return 1 - Math.pow(1 - x, 3); }
var scrollAnimation = crimson({
    duration: 500,
    easing: easingCubic
});

globalListener('click', 'a', function(e){

    qs('.v', nav).classList.remove('v');
    e.target.classList.add('v');

    var name = e.target.getAttribute('data-target');
    if(!name) return;

    scrollToSection(name);
    navClose();

}, {passive: true}, nav);

function scrollToSection(name){
    var section = qs('.part-'+name);
    var distance = section.offsetTop - header.offsetHeight;
    var scrolled = document.documentElement.scrollTop;

    scrollAnimation.stop();
    scrollAnimation.change({
        progress: 0,
        animation: function(p){
            var s = (distance - scrolled)*p+scrolled;
            document.documentElement.scrollTop = s;
        }
    });
    scrollAnimation.play();
}

// services
var prestations = qsa('.part-prestations [data-core-square] figure');
var articles = qsa('.part-prestations article');

for(var i=0; i<prestations.length; i++){

    addEvent(i);

    function addEvent(id){

        var item = prestations[id];
        item.addEventListener('click', function(){

            qs('.part-prestations [data-core-square] figure.v').classList.remove('v');
            qs('.part-prestations article.v').classList.remove('v');
    
            item.classList.add('v');
            articles[id].classList.add('v');
    
        }, {passive: true});

    }

}

// squares
for(var section of sections){
    qs('.global-squares').innerHTML += '<div data-section="'+(section.getAttribute('class').replace('part-', ''))+'"></div>'
}

globalListener('click', '.global-squares > div', function(e){
    scrollToSection(e.target.getAttribute('data-section'));
}, {passive: true});

// scroll
var squares = qsa('.global-squares div');
var scrollEventShouldWait = false;
squares[currentSection().id].classList.add('v');

document.addEventListener('scroll', function(){
    
    if(scrollEventShouldWait) {return;}

    scrollEventShouldWait = true;
    setTimeout(() => { 

        qs('.global-squares .v').classList.remove('v');
        squares[currentSection().id].classList.add('v');

        qs('a.v', nav).classList.remove('v');
        qs('a[data-target="'+currentSection().name+'"]', nav).classList.add('v');

        scrollEventShouldWait = false;
        
    }, 500);

}, {passive:true});

function currentSection(){

    var scrolled = document.documentElement.scrollTop;

    for(var i=sections.length-1; i>=0; i--){

        var distance = sections[i].offsetTop;

        if(scrolled > distance - (header.offsetHeight + 100)){
            var name = sections[i].getAttribute('class').replace('part-', '');
            return {id: i, name: name};
        }

    }
}

