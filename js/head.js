
(function(){

var li = document.querySelectorAll('.head .left li:nth-child(n+1)');
var menubar = document.querySelector('.head .menu');
var head = document.querySelector('.head .left');
var nav = document.querySelector('.head .nav');
var closeMenu = menubar.querySelector('.close');
var closeHead = head.querySelector('.close');

for(var i=1; i<li.length; i++){
    li[i].addEventListener('click', function(e){
        select(e);
        showMenu(e.currentTarget.dataset.content);
    }, {passive:true});
}

closeMenu.addEventListener('click', maskMenu, {passive:true});
closeHead.addEventListener('click', maskHead, {passive:true});
nav.addEventListener('click', showHead, {passive:true});

function showMenu(d){
    var navs = document.querySelectorAll('.head .menu > div');
    for(var i=0; i<navs.length; i++){
        if(navs[i].classList.contains(d)){navs[i].classList.remove('none'); continue;}
        navs[i].classList.add('none');
    }
    menubar.classList.remove('hidden');
}

function maskMenu(e){

    var selected = document.querySelector('.head li.select');

    menubar.classList.add('hidden');
    selected.classList.remove('select');

}

// mobile only
function showHead(){
    head.classList.add('visible');
}
function maskHead(){
    head.classList.remove('visible');
}

var content = {
    prestations: ``,
    contact: ``
}

})();

function select(e){

    var t = e.currentTarget;
    var s = t.parentNode.querySelector('.select') || t;

    s.classList.remove('select');
    t.classList.add('select');

}