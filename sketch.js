var cball;
var database;
var position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    cball = createSprite(250,250,10,10);
    cball.shapeColor = "red";

    var cballPosition = database.ref('ball/position');
    cballPosition.on("value",readPosition,showError); 
}

function draw(){
    background("white");
    if(position !== undefined)
    {
        
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
    database.ref('ball.position').set({
        'x': position.x-x,
        'y': position.y-y,
    })
    
}

function readPosition(data)
{
position = data.val();
cball.x = position.x;
cball.y = position.y;
}

function showError()
{
    console.log("I cannot access!!");
}