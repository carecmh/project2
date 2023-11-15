var play

function setup(){
    new Canvas(700, 700);

    p1 = createP("Passion-Man");
    p1.position(100, 100)
    p1.style("font-size", "30px")
    p1.style("color", "magenta");

    p2 = createP("Can you collect all your passions in time?");
    p2.position (100, 160);

    
    play = new Sprite ()
    play.height = 30;
    play.width = 100;
    play.color = "white";
    play.text = "Play!";
    play.textSize = 10;
    play.x = 150
    play.y = 200

}

function draw(){
    clear()

    if(play.mouse.pressed())
    location.replace("play.html")
}