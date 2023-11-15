let time
let p1
let p2
let p3
let play1


function setup(){

    new Canvas(700, 700);

    time = createP("00:00")
    time.position (100, 75);

    p1 = createP("GAME OVER");
    p1.position(100, 100)
    p1.style("font-size", "30px")
    p1.style("color", "red");

    p2 = createP("You didn't collect all your passions in time.");
    p2.position (100, 150);

    p3 = createP("How's your self-worth now?");
    p3.position(100, 175);
    p3.style("color", "red");

    play1 = new Sprite ()
    play1.height = 30;
    play1.width = 100;
    play1.x = 100;
    play1.y = 175;
    play1.color = "white";
    play1.text = "Play again";
    play1.textSize = 10;

   
}

function draw(){
    clear()

    if(play1.mouse.pressed());
    location.replace("index.html");
}
