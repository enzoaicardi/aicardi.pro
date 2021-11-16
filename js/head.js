
(function(){

var li = $$('.head .left li:nth-child(n+1)');
var menubar = $('.head .menu');
var head = $('.head .left');
var nav = $('.head .nav');
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
    var c = $('.head .menu > div.v');
    var n = $('.head .menu > div.'+d);
    
    if(c !== n){
        if(c){c.classList.remove('v');}
        n.classList.add('v');
    }
    
    menubar.classList.remove('hidden');
}

function maskMenu(){

    var selected = $('.head li.select');

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