window.onload = function() {
    let tg = window.Telegram.WebApp;

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
        this.load.image('clickCircle', 'https://sbtrwt.github.io/telegram-games/img/clickCircle.png');
    }

    function create() {
        //this.add.text(10, 10, 'Mining Game', { font: '16px Arial', fill: '#ffffff' });
        var circle = this.add.image(160, 120, 'clickCircle').setInteractive(); // Centered in the middle of the canvas
        circle.scale = 0.5;
        //clickText = this.add.text(140, 40, '0', { font: '16px Arial', fill: '#ffffff' });

        circle.on('pointerdown', function(pointer) {
            clickCount++;
            //clickText.setText(clickCount);
            setCoinVal(clickCount);

              // Hamster animation
              this.scene.tweens.add({
                targets: circle,
                scaleX: 0.55,
                scaleY: 0.55,
                duration: 100,
                yoyo: true
            });

            // Create and animate the "+1" text
            const plusOneText = this.scene.add.text(pointer.x, pointer.y, '+1', {
                fontSize: '32px',
                fill: '#000000' ,
                fontWeight: '800',
                 
            });
            plusOneText.setOrigin(0.5, 0.5);

            this.scene.tweens.add({
                targets: plusOneText,
                y: pointer.y - 200,  // Move up by 50 pixels
                alpha: 0,  // Fade out
                duration: 3000,  // Animation duration in milliseconds
                ease: 'Power1',
                onComplete: function() {
                    plusOneText.destroy();  // Remove the text object when animation is complete
                }
            });
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

    setUserName();
};

function setUserName(){
    let usercard = document.getElementById("user-name"); 
    const { first_name, last_name, username ,language_code, id } = window.Telegram.WebApp.initDataUnsafe.user;
   
    usercard.innerHTML = `${first_name} ${last_name} ${username} (${language_code})`;
       

    let userid = document.createElement('p'); 
    userid.innerText = `${id}`; 
    usercard.appendChild(userid); 
}

