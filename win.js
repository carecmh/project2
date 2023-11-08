let p1
let p2
let p3

function setup(){
    p1 = createP("YOU WIN");
    p1.position(100, 100)
    p1.style("color", "green");

    p2 = createP("You collected all your passions.");
    p2.position (100, 125);

    p3 = createP("But, how's your self-worth now?");
    p3.position(100, 150);
    p3.style("color","red");
}

function draw(){
    if (millis > 75000);
    location.replace("index.html");
}



        
