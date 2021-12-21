var player = document.getElementById("player");
player.onmouseover = function(){
    player.play();
};
player.onmouseout = function(){
    player.pause();
};