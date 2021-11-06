canvas= new fabric.Canvas('myCanvas');
bw=30;
bh=30;
px=10;
py=10;
var player_object="";
var get_image="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:py,
            left:px
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(bw);
        block_object.scaleToHeight(bh);
        block_object.set({
            top:py,
            left:px
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keypress=e.keyCode;
    if(e.shiftKey == true && keypress=='80'){
        bw=bw+10;
        bh=bh+10;
        document.getElementById("w").innerHTML=bw;
        document.getElementById("h").innerHTML=bh;
    }
    if(e.shiftKey == true && keypress=='77'){
        bw=bw-10;
        bh=bh-10;
        document.getElementById("w").innerHTML=bw;
        document.getElementById("h").innerHTML=bh;
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='39'){
        right();
        console.log("right");
    }
    if(keypress=='40'){
        down();
        console.log("down");
    }
    if(keypress=='87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keypress=='71'){
        new_image("ground.png");
        console.log("g");
    }
    if(keypress=='76'){
        new_image("light_green.png");
        console.log("l");
    }
    if(keypress=='84'){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keypress=='82'){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keypress=='89'){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keypress=='68'){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keypress=='85'){
        new_image("unique.png");
        console.log("u");
    }
    if(keypress=='67'){
        new_image("cloud.jpg");
        console.log("c");
    }
}
function left(){
    if(px >0){
        px= px-10;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(px <=850){
        px= px+10;
        canvas.remove(player_object);
        player_update();
    }
}
function up(){
    if(py >0){
        py= py-10;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(py <=500){
        py= py+10;
        canvas.remove(player_object);
        player_update();
    }
}