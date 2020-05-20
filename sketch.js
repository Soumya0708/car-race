var ball;
var database;
var ballposref 
var ballposdb


function setup(){
    database=firebase.database()
    ballposref=database.ref('ball/position')
    ballposref.on("value",readPosition,showError)
    createCanvas(500,500);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";

}

function draw(){
    background("white");
    if(ballposdb!==undefined){

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
}
    drawSprites();
}

function writePosition(x,y){
    ballposref=database.ref('ball/position')   
    ballposref.set({
        'x':ballposdb+x,
        'y':ballposdb+y,
    })
    
}

function readPosition(data){
    ballposdb=data.val();
    ball.x=ballposdb.x;
    ball.y=ballposdb.y;

} 

function showError(){
    console.log("error")
}