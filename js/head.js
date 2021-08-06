
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
        showMenu(e);
    }, {passive:true});
}

closeMenu.addEventListener('click', maskMenu, {passive:true});
closeHead.addEventListener('click', maskHead, {passive:true});
nav.addEventListener('click', showHead, {passive:true});

function showMenu(e){
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

})();

function select(e){

    var t = e.currentTarget;
    var s = t.parentNode.querySelector('.select') || t;

    s.classList.remove('select');
    t.classList.add('select');

}