let kitty;
let block;

function preload() {
    kitty = new Sprite(20, 20, 14, 16);
    kitty.spriteSheet = 'assets/Basic Charakter Spritesheet 14x16.png';
    kitty.anis.frameDelay = 8;
    kitty.addAnis({
        front: { row: 0, frames: 4 },
        back:  { row: 1, frames: 4 },
        left:  { row: 2, frames: 4 },
        right: { row: 3, frames: 4 },
    });
    kitty.changeAni('front');
}

function setup() {
    new Canvas(128, 128, 'pixelated x4');

    block = createSprite(24, 24, 4, 4);
    block.fill = "red";
    block.stroke = "red";
    block.drag = 1;

    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true
}

function draw() {
    clear();
    if (kb.pressing('down')) {
        kitty.changeAni('front');
        kitty.direction = 90;
        kitty.speed = .5;
    }
    else if (kb.pressing('up')) {
        kitty.changeAni('back');
        kitty.direction = 270;
        kitty.speed = .5;
    }
    else if (kb.pressing('left'))  {
        kitty.changeAni('left');
        kitty.direction = 180;
        kitty.mirror.x = false;
        kitty.speed = .5;
    }
    else if (kb.pressing('right')) {
        kitty.changeAni('left');
        kitty.direction = 0;
        kitty.mirror.x = true;
        kitty.speed = .5;
    }
    else {
        kitty.speed = 0;
    }
}