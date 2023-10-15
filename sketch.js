let kitty;
let platform;
let blocks;
let landed = false;

function preload() {
    kitty = new Sprite(90, 20, 14, 16);
    kitty.spriteSheet = 'assets/Basic Charakter Spritesheet 14x16.png';
    kitty.anis.frameDelay = 8;
    kitty.addAnis({
        front: { row: 0, frames: 4 },
        left:  { row: 2, frames: 4 },
        back:  { row: 1, frames: 4 },
    });
    kitty.changeAni('front');
}

function setup() {
    new Canvas(256, 256, 'pixelated x4');
    world.gravity.y = 10;

    platform = createSprite(50, 50, 100, 4);
    platform.collider = 'static';

	blocks = new Group();
	blocks.width = 24;
    blocks.height = 24;
    blocks.collider = 'static';
	
	while (blocks.length < 12) {
		let block = new blocks.Sprite();
		block.x = random(width);
        block.y = random(100,height);
	}

    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
}

function draw() {
    clear();
    if (kb.pressing('left'))  {
        kitty.changeAni('left');
        kitty.mirror.x = false;
        kitty.vel.x = -1;
    }
    else if (kb.pressing('right')) {
        kitty.changeAni('left');
        kitty.mirror.x = true;
        kitty.vel.x = 1;
    } else if (kb.released('up') && landed) {
        kitty.changeAni('back');
        kitty.vel.y = -4;
        landed = false;
    }

    if (kitty.collides(blocks) || kitty.collides(platform)) landed = true;

    if (kitty.y > height) {
        kitty.y = 20;
        kitty.x = 90
    }
}

