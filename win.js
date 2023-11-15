let p1
let p2
let p3
let playagain


function setup(){
    new Canvas(700, 700);

    p1 = createP("YOU WIN");
    p1.position(100, 100)
    p1.style("font-size", "30px")
    p1.style("color", "green");

    p2 = createP("You collected all your passions.");
    p2.position (100, 150);

    p3 = createP("But, how's your self-worth now?");
    p3.position(100, 175);
    p3.style("color","red");
    
    playagain = new Sprite ()
    playagain.height = 30;
    playagain.width = 100;
    playagain.color = "white";
    playagain.text = "Play again";
    playagain.textSize = 10;
    playagain.x = 150
    playagain.y = 225

}

function draw(){
    clear()

    if(playagain.mouse.pressed())
    location.replace("index.html")
}



        
