import Phaser from 'phaser'

var replayButton

export default class GameOverScene extends Phaser.Scene {

    constructor() {
        super('game-over-scene')
        this.replayButton = undefined

    }

    preload() {
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('game-over-text', 'images/gameover.png')
        this.load.image('replay-button', 'images/replay.png')
    }

    create() {
        this.add.image(240, 320, 'background')
        this.add.image(240, 280, 'game-over-text')
        this.replayButton = this.add.image(240, 420, 'replay-button').setInteractive()
        this.replayButton.once('pointerup', () => {
            this.scene.start('bunny-jump-scene') 
        }, this)
        
    }

}