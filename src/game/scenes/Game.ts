import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x0f0f0f); // Set to match app background

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        // Ready for world creation and game objects
        EventBus.emit('current-scene-ready', this);
    }

    // Placeholder for scene change logic
}
