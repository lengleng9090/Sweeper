let bg;
let tutorial;
let logo;
let button;
var isPressed;
class MainMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainMenu'
        })
    }
    preload() {
        this.load.image('bg','images/Background.png')
        this.load.image('tutorial','images/Tutorial.png')
        this.load.image('button','images/Start.png')
        this.load.spritesheet('logo', 'images/Logo.png', { frameWidth: 610, frameHeight: 360 })
        this.load.audio('Sound','soundtrack/BGM_1.mp3')
        this.load.audio('waterSound','soundtrack/water_BGM_1.mp3')
    }
    create() {
        let Sound = this.sound.add('Sound');
        Sound.play();
        let waterSound = this.sound.add('waterSound');
        waterSound.play();
        bg = this.add.tileSprite(0,0,600,900,'bg').setOrigin(0,0)
        this.anims.create({
            key: 'logoAni',
            frames: this.anims.generateFrameNumbers('logo', {
                start: 0,
                end: 11

            }),
            framerate: 0.001,
            repeat: -1
        })
        tutorial = this.add.image(110, 220, 'tutorial').setOrigin(0,0).setScale(0.8);
        logo = this.physics.add.sprite(130, 50, 'logo').setOrigin(0,0).setScale(0.6);
        button = this.add.image(220, 720, 'button').setOrigin(0,0).setScale(0.3);
        button.setInteractive();
        button.on('pointerup', () => {
            Sound.stop();
            waterSound.stop();
            this.scene.start('GameScene');
        });

    }
    update(delta, time) {
        bg.tilePositionY -= 3
        //logo.anims.play('logoAni', true);
    }


}
export default MainMenu