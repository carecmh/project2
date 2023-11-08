let time
let p1
let p2
let p3

function setup(){
    time = createP("0:00")
    time.position (100, 75);

    p1 = createP("GAME OVER");
    p1.position(100, 100)
    p1.style("color", "red");

    p2 = createP("You didn't collect all your passions in time.");
    p2.position (100, 125);

    p3 = createP("How's your self-worth now?");
    p3.position(100, 150);
    p3.style("color", "red");
}

function draw(){
    if (millis > 75000);
    location.replace("index.html");
}
