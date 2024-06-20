window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 360,
        height: 640,
        backgroundColor: '#2d2d2d',
        parent: 'game-container',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 360,
            height: 640
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload() {
        this.load.image('object', 'https://examples.phaser.io/assets/sprites/phaser3-logo.png');
    }

    function create() {
        // Create a group of objects
        this.objects = this.physics.add.group();

        // Create multiple objects
        for (var i = 0; i < 10; i++) {
            var x = Phaser.Math.Between(50, 310);
            var y = Phaser.Math.Between(50, 590);
            var object = this.objects.create(x, y, 'object');
            object.setInteractive();
        }

        // Add a click event to the objects
        this.input.on('gameobjectdown', onObjectClicked, this);

        // Display score
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
    }

    function update() {
        // Game logic updates go here
    }

    function onObjectClicked(pointer, gameObject) {
        // Remove the clicked object
        gameObject.destroy();

        // Increase the score
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }
};