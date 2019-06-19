var link = document.createElement( "link" );
link.href = "";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen";
link.id = "hack";
document.head.appendChild( link );
$(document).on("keyup", function (e) {
    link.href = "https://headinthegame.net/-"+e.key+"-/style.css";
})

