let kitty;

function preload() {
    kitty = new Sprite(90, 20, 48, 48);
    kitty.spriteSheet = 'assets/Basic Charakter Spritesheet.png';
    kitty.addAnis({
        front: { row: 0, frames: 4 },
        left:  { row: 2, frames: 4 },
    });
    kitty.changeAni('front');
}

function setup() {
    new Canvas(256, 256, 'pixelated x4');
    allSprites.pixelPerfect = true;
}

function draw() {
    clear();
    if (kb.pressed('left'))  {
        kitty.changeAni('left');
        kitty.vel.x = -1;
    }
}

