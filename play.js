let pacman;
var counter = 0;
var timeleft = 60;
var interval
let doubt


function preload() {
    pacman = new Sprite(100, 50, 99, 97.25);
    pacman.spriteSheet = 'assets/pacsprite.png';
    pacman.anis.frameDelay = 4;
    pacman.addAnis({
        right: { row: 0, frames: 3 },
        up:  { row: 1, frames: 3 },
        left:  { row: 2, frames: 3 },
        down: {row:3, frames: 3}
    });
    pacman.changeAni('right');
    
}

function convertSeconds(s){
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min,2) + ':' + nf(sec, 2); 
}

function setup() {
    new Canvas(900, 700);
    allSprites.pixelPerfect = true;

    var timer = select('#timer');
    timer.html(convertSeconds(timeleft - counter));

    var interval = setInterval(timeIt, 1000);
    
    function startTimer(){
        interval = setInterval(timeIt, 1000);
    }

    function timeIt(){
    counter++;
    timer.html(convertSeconds(timeleft - counter));
    if (counter == timeleft){
        clearInterval(interval);
    
    }
    }
    function clearInterval(){
        location.replace("part2.html");
    }

    s1 = new Sprite();
    s1.height = 30;
    s1.width = 100;
    s1.textSize = 10;
    s1.text = "Family";
    s1.x = random(100, 800);
    s1.y = random(0, 700);
    s1.collider = 'static';

    s2 = new Sprite();
    s2.height = 30;
    s2.width = 100;
    s2.textSize = 10;
    s2.text = "Friendships";
    s2.x = random(100, 800);
    s2.y = random(0, 700);
    s2.collider = 'static';

    s3 = new Sprite();
    s3.height = 30;
    s3.width = 100;
    s3.textSize = 10;
    s3.text = "Country love songs";
    s3.x = random(100, 800);
    s3.y = random(0, 700);
    s3.collider = 'static';

    s4 = new Sprite();
    s4.height = 30;
    s4.width = 200;
    s4.textSize = 10;
    s4.text = "Dancing like no one is watching";
    s4.x = random(100, 800);
    s4.y = random(0, 700);
    s4.collider = 'static';

    s5 = new Sprite();
    s5.height = 30;
    s5.width = 200;
    s5.textSize = 10;
    s5.text = "Loving hard and full";
    s5.x = random(100, 800);
    s5.y = random(0, 700);
    s5.collider = 'static';
    

    s6 = new Sprite();
    s6.height = 30;
    s6.width = 100;
    s6.textSize = 10;
    s6.text = "Creating pretty art";
    s6.x = random(100, 800);
    s6.y = random(0, 700);
    s6.collider = 'static';

    s7 = new Sprite();
    s7.height = 30;
    s7.width = 200;
    s7.textSize = 10;
    s7.text = "Spending quality time with loved ones";
    s7.x = random(100, 800);
    s7.y = random(0, 700);
    s7.collider = 'static';

    s8 = new Sprite();
    s8.height = 30;
    s8.width = 200;
    s8.textSize = 10;
    s8.text = "Being humble and kind";
    s8.x = random(100, 800);
    s8.y = random(0, 700);
    s8.collider = 'static';

    s9 = new Sprite();
    s9.height = 30;
    s9.width = 200;
    s9.textSize = 10;
    s9.text = "Living life to the fullest";
    s9.x = random(100, 800);
    s9.y = random(0, 700);
    s9.collider = 'static';

    s10 = new Sprite();
    s10.height = 30;
    s10.width = 100;
    s10.textSize = 10;
    s10.text = "Feminism";
    s10.x = random(100, 800);
    s10.y = random(0, 700);
    s10.collider = 'static';

    s11 = new Sprite();
    s11.height = 30;
    s11.width = 200;
    s11.textSize = 10;
    s11.text = "Not conforming to societal pressures";
    s11.x = random(100, 800);
    s11.y = random(0, 700);
    s11.collider = 'static';

    s12 = new Sprite();
    s12.height = 30;
    s12.width = 200;
    s12.textSize = 10;
    s12.text = "Going to the beach to watch the sunset";
    s12.x = random(100, 800);
    s12.y = random(0, 700);
    s12.collider = 'static';

    s13 = new Sprite();
    s13.height = 30;
    s13.width = 200;
    s13.textSize = 10;
    s13.text = "Working hard for what I want";
    s13.x = random(100, 800);
    s13.y = random(0, 700);
    s13.collider = 'static';

    s14 = new Sprite();
    s14.height = 30;
    s14.width = 100;
    s14.textSize = 10;
    s14.text = "My faith";
    s14.x = random(100, 800);
    s14.y = random(0, 700);
    s14.collider = 'static';

    s15 = new Sprite();
    s15.height = 30;
    s15.width = 200;
    s15.textSize = 10;
    s15.text = "Taking care of myself and friends";
    s15.x = random(100, 800);
    s15.y = random(0, 700);
    s15.collider = 'static';

    s16 = new Sprite();
    s16.height = 30;
    s16.width = 100;
    s16.textSize = 10;
    s16.text = "Rom coms";
    s16.x = random(100, 800);
    s16.y = random(0, 700);
    s16.collider = 'static';

    s17= new Sprite();
    s17.height = 30;
    s17.width = 100;
    s17.textSize = 10;
    s17.text = "Soccer";
    s17.x = random(150, 800);
    s17.y = random(0, 700);
    s17.collider = 'static';

    s18 = new Sprite();
    s18.height = 30;
    s18.width = 100;
    s18.textSize = 10;
    s18.text = "Journaling";
    s18.x = random(100, 800);
    s18.y = random(0, 700);
    s18.collider = 'static';

    s19 = new Sprite();
    s19.height = 30;
    s19.width = 100;
    s19.textSize = 10;
    s19.text = "Sustainable fashion";
    s19.x = random(100, 800);
    s19.y = random(0, 700);
    s19.collider = 'static';

    s20 = new Sprite();
    s20.height = 30;
    s20.width = 100;
    s20.textSize = 10;
    s20.text = "Jokes";
    s20.x = random(100, 800);
    s20.y = random(0, 700);
    s20.collider = 'static';

    s21 = new Sprite();
    s21.height = 30;
    s21.width = 100;
    s21.textSize = 10;
    s21.text = "Line Dancing";
    s21.x = random(100, 800);
    s21.y = random(0, 700);
    s21.collider = 'static';

    s22 = new Sprite();
    s22.height = 30;
    s22.width = 200;
    s22.textSize = 10;
    s22.text = "Trying new things";
    s22.x = random(100, 800);
    s22.y = random(0, 700);
    s22.collider = 'static';

    s23 = new Sprite();
    s23.height = 30;
    s23.width = 200;
    s23.textSize = 10;
    s23.text = "Exploring nature";
    s23.x = random(100, 800);
    s23.y = random(0, 700);
    s23.collider = 'static';

    s24 = new Sprite();
    s24.height = 30;
    s24.width = 200;
    s24.textSize = 10;
    s24.text = "Florida State University";
    s24.x = random(100, 800);
    s24.y = random(0, 700);
    s24.collider = 'static';

    s25 = new Sprite();
    s25.height = 30;
    s25.width = 100;
    s25.textSize = 10;
    s25.text = "Pop culture";
    s25.x = random(100, 800);
    s25.y = random(0, 700);
    s25.collider = 'static';



}

function draw() {
    clear()
    
      
    if (kb.pressed('left'))  {
        pacman.changeAni('left');
        pacman.vel.x = -1;
        pacman.vel.y = 0;
    }
    if (kb.pressed('up')) {
        pacman.changeAni('up');
        pacman.vel.y = -1;
        pacman.vel.x = 0;
    }
    if (kb.pressed('down')) {
        pacman.changeAni('down');
        pacman.vel.y = 1;
        pacman.vel.x = 0;
    }
    if (kb.pressed('right')) {
        pacman.changeAni('right');
        pacman.vel.x = 1;
        pacman.vel.y = 0;
    }

    if (pacman.overlaps(s1)) s1.remove();
    if (pacman.overlaps(s2)) s2.remove();
    if (pacman.overlaps(s3)) s3.remove();
    if (pacman.overlaps(s4)) s4.remove();
    if (pacman.overlaps(s5)) s5.remove();
    if (pacman.overlaps(s6)) s6.remove();
    if (pacman.overlaps(s7)) s7.remove();
    if (pacman.overlaps(s8)) s8.remove();
    if (pacman.overlaps(s9)) s9.remove();
    if (pacman.overlaps(s10)) s10.remove();
    if (pacman.overlaps(s11)) s11.remove();
    if (pacman.overlaps(s12)) s12.remove();
    if (pacman.overlaps(s13)) s13.remove();
    if (pacman.overlaps(s14)) s14.remove();
    if (pacman.overlaps(s15)) s15.remove();
    if (pacman.overlaps(s16)) s16.remove();
    if (pacman.overlaps(s17)) s17.remove();
    if (pacman.overlaps(s18)) s18.remove();
    if (pacman.overlaps(s19)) s19.remove();
    if (pacman.overlaps(s20)) s20.remove();
    if (pacman.overlaps(s21)) s21.remove();
    if (pacman.overlaps(s22)) s22.remove();
    if (pacman.overlaps(s23)) s23.remove();
    if (pacman.overlaps(s24)) s24.remove();
    if (pacman.overlaps(s25)) s25.remove();

    if (s1.removed && s2.removed && s3.removed && s4.removed && s5.removed && s6.removed && s7.removed && s8.removed && s9.removed && s10.removed && s11.removed && s12.removed && s13.removed && s14.removed && s15.removed && s16.removed && s17.removed && s18.removed && s19.removed && s20.removed && s21.removed && s22.removed && s23.removed && s24.removed && s25.removed)
        location.replace("win.html");


    

    }

    



