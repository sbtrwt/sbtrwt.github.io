window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        parent: 'mining-game',
        width: 320,
        height: 640,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 320,
            height: 640,
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    var clickCount = 0;
    //var clickText;

    function preload() {
        this.load.image('circle', './img/cicle_bg.png');
    }

    function create() {
        //this.add.text(10, 10, 'Mining Game', { font: '16px Arial', fill: '#ffffff' });
        var circle = this.add.image(160, 100, 'circle').setInteractive(); // Centered in the middle of the canvas

        //clickText = this.add.text(140, 40, '0', { font: '16px Arial', fill: '#ffffff' });

        circle.on('pointerdown', function() {
            clickCount++;
            //clickText.setText(clickCount);
            setCoinVal(clickCount);
        });

        showExchangeTab();
    }

    function update() {
    }

    function showExchangeTab() {
        document.getElementById('content').innerHTML = '<p>Exchange content here.</p>';
        document.getElementById('content').style.display = 'flex';
    }

    function showMineTab() {
        document.getElementById('content').innerHTML = '<p>Click the circle to mine!</p>';
        document.getElementById('content').style.display = 'flex';
    }

    function showFriendsTab() {
        document.getElementById('content').innerHTML = '<p>Your friends list.</p>';
        document.getElementById('content').style.display = 'flex';
    }

    function showEarnTab() {
        document.getElementById('content').innerHTML = '<p>Ways to earn rewards.</p>';
        document.getElementById('content').style.display = 'flex';
    }

    function showAirdropTab() {
        document.getElementById('content').innerHTML = '<p>Current airdrops.</p>';
        document.getElementById('content').style.display = 'flex';
    }

    document.getElementById('exchange-tab').addEventListener('click', function() {
        setActiveTab('exchange-tab');
        showExchangeTab();
    });

    document.getElementById('mine-tab').addEventListener('click', function() {
        setActiveTab('mine-tab');
        showMineTab();
    });

    document.getElementById('friends-tab').addEventListener('click', function() {
        setActiveTab('friends-tab');
        showFriendsTab();
    });

    document.getElementById('earn-tab').addEventListener('click', function() {
        setActiveTab('earn-tab');
        showEarnTab();
    });

    document.getElementById('airdrop-tab').addEventListener('click', function() {
        setActiveTab('airdrop-tab');
        showAirdropTab();
    });

    function setActiveTab(tabId) {
        var tabs = document.getElementsByClassName('tab');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        document.getElementById(tabId).classList.add('active');
        document.getElementById('content').style.display = 'none';
    }

    function setCoinVal(value){
        document.getElementById('coin-text').innerHTML = value;
    }
};
