<script>
    // CLASSES
    class Upgrade{
        constructor(name, cost, upgradeAmt, isSecret=false, secretRequired=0, isHidden=false, hiddenRequired=0){
            this.name = name;
            this.cost = cost;
            this.upgradeAmt = upgradeAmt;           // Increases clickPower with this
            this.isSecret = isSecret;               // Showing the name/cost of upgrade
            this.secretRequired = secretRequired    // Amount of total clicks to show name/cost 
            this.isHidden = isHidden;               // Showing the element
            this.hiddenRequired = hiddenRequired;   // Amount of total clicks to show element
            this.amount = 0; 
        } 

        generate(){
            return this.isHidden ? 'none' : this.isSecret ? 'Unkown Upgrade' : `${this.name} ${this.cost}c`;
        }

        buy(){
            if (cookies >= this.cost && !this.isHidden && !this.isSecret){
                cookies -= this.cost;
                clickPower += this.upgradeAmt;
                this.cost = Math.round(this.cost*costMultiplier);
                this.amount += 1;
            }else if (!this.isSecret && !this.isHidden){
                showMessage(`Missing ${Math.round((this.cost-cookies)*10)/10}c`);
            }else{
                showMessage('Upgrade unavailable');
            }
            
        }
    }

    // FUNCTIONS
    function clickedCookie(event){
        cookies += clickPower;
        totalClicks += 1;

        cps += 1;
        setTimeout(() => {
            cps -= 1;
        }, 1000);

        
        checkUpgradeSecrecy();
    }

    function checkUpgradeSecrecy(){
        upgrades.forEach(upgrade => {
            if (totalClicks >= upgrade.hiddenRequired){ 
                upgrade.isHidden=false;
                upgrade3 = upgrade3;
                upgrade4 = upgrade4; 
                upgrade5 = upgrade5;
            };
            if (totalClicks >= upgrade.secretRequired){ 
                upgrade.isSecret = false; 
                upgrade2 = upgrade2;
                upgrade3 = upgrade3;
                upgrade4 = upgrade4;
                upgrade5 = upgrade5;
            };
        })
    }

    function showMessage(message){
        messageElement.parentNode.classList.add('slideDown');
        messageElement.parentNode.display = 'none';
        messageElement.innerHTML = message;
        messageElement.parentNode.style.animation = 'none';
        messageElement.parentNode.offsetHeight;
        messageElement.parentNode.style.animation = null;
        messageElement.parentNode.animation = '2s slideDown forwards';
    }

    function buyAutoClicker(){
        if (cookies >= autoClickerCost){
            if(!autoClickerEnabled){ 
                cookies-=autoClickerCost;
                setInterval(() => {
                    cookies += autoClickerClickPower/(1000/autoClickerDelayMS);
                }, autoClickerDelayMS);
            }
            else{
                showMessage('Auto Clicker Already Active');
            }
            autoClickerEnabled = true;
        }
        else if (!autoClickerEnabled){
            showMessage(`Missing ${Math.round((autoClickerCost-cookies)*10)/10}c`)
        }
    }

    // Progress management
    function saveProgress(){
        let stats = {
            'cookies': cookies,
            'clickPower': clickPower,
            'totalClicks': totalClicks,
            'autoClickerEnabled': autoClickerEnabled,
            'autoClickerClickPower': autoClickerClickPower,
            'upgradePrices': [
                upgrade1.cost, 
                upgrade2.cost, 
                upgrade3.cost,
                upgrade4.cost,
                upgrade5.cost,
            ],'upgradeAmounts': [
                upgrade1.amount,
                upgrade2.amount,
                upgrade3.amount,
                upgrade4.amount,
                upgrade5.amount,
            ]
        };
        window.localStorage.setItem('savedData', JSON.stringify(stats));
        showMessage('Saved Progress');
    }
    function loadProgress(){
        let stats = window.localStorage.getItem('savedData');
        if (stats !== null){
            stats = JSON.parse(stats)
            cookies = parseInt(stats['cookies']);
            clickPower = parseFloat(stats['clickPower']);
            totalClicks = parseInt(stats['totalClicks']);
            autoClickerEnabled = stats['autoClickerEnabled'];
            autoClickerClickPower = parseInt(stats['autoClickerClickPower']);
            let upgradePrices = [...stats['upgradePrices']];
            let upgradeAmounts = [...stats['upgradeAmounts']];
            // Is this good? No. Does it work? (Most of the time) yes
            upgrade1.cost = parseInt(upgradePrices[0]); upgrade1 = upgrade1;
            upgrade2.cost = parseInt(upgradePrices[1]); upgrade2 = upgrade2;
            upgrade3.cost = parseInt(upgradePrices[2]); upgrade3 = upgrade3;
            upgrade4.cost = parseInt(upgradePrices[3]); upgrade4 = upgrade4;
            upgrade5.cost = parseInt(upgradePrices[4]); upgrade5 = upgrade5;
            checkUpgradeSecrecy();
            upgrade1.amount = parseInt(upgradeAmounts[0]);
            upgrade2.amount = parseInt(upgradeAmounts[1]);
            upgrade3.amount = parseInt(upgradeAmounts[2]);
            upgrade4.amount = parseInt(upgradeAmounts[3]);
            upgrade5.amount = parseInt(upgradeAmounts[4]);
            
            if (autoClickerEnabled) { 
                setInterval(() => {
                    cookies += autoClickerClickPower/(1000/autoClickerDelayMS);
                }, autoClickerDelayMS);
            }
            showMessage('Loaded Lastest Save');
        }
        else{
            showMessage('No Previous Saves');
        }
    }
    function resetProgress(){
        window.localStorage.clear();
        showMessage('Deleted saved data');
    }

    // VARIABLES
    // Basic
    let cookies = 0;
    let totalClicks = 0;
    let clickPower = 1;
    let cps = 0;
    const costMultiplier = 1.675;

    // Upgrades
    let upgrade1 = new Upgrade('+0.2cpc', 50, 0.2);
    let upgrade2 = new Upgrade('+0.7cpc', 250, .7, true, 200);
    let upgrade3 = new Upgrade('+1.5cpc', 700, 1.5, true, 400, true, 200);
    let upgrade4 = new Upgrade('+3cpc', 1300, 3, true, 800, true, 400);
    let upgrade5 = new Upgrade('+5cpc', 3500, 5, true, 1200, true, 800);

    let upgrades = [
        upgrade1, 
        upgrade2,
        upgrade3,
        upgrade4,
        upgrade5,
    ];

    // Auto Clicker
    let autoClickerBuyElement;
    let autoClickerClickPower = 1;
    let autoClickerDelayMS = 100;
    let autoClickerCost = 500;
    let autoClickerEnabled = false;

    // Not enough cookies
    let messageElement;

    // Tabs
    let selectedTab = 'stats';
</script>

<head>
    <title>Clicker of Cookies</title>
</head>

<body>
    <div class="backgroundColor"></div>
    <section id="cookieSection">
        <h1 class="title" id="cookieDisplay" >{Math.round(10*cookies)/10} cookies</h1>
        <div id="cookie" on:click={clickedCookie} on:keydown={console.log()}></div>
    </section>

    <div id="messageDiv"><p class="slideDown" bind:this={messageElement}></p></div>
    <div id="backContainer">
        <a href="/#clicker" id="backToMain">Go Back</a>
    </div> 

    <section id="upgradeSection">
        <h1 class="title upgradeTitle">Upgrades</h1>
        
        <div class="upgradeDiv">
        <button class="upgrade" on:click={()=>{upgrade1.buy(); upgrade1=upgrade1;}}>{upgrade1.generate()}</button>
        <p class="upgradeAmt">x{upgrade1.amount}</p></div>

        <div class="upgradeDiv">
        <button class="upgrade" on:click={()=>{upgrade2.buy(); upgrade2=upgrade2;}}>{upgrade2.generate()}</button>
        <p class="upgradeAmt">x{upgrade2.amount}</p></div>
        
        <div class="upgradeDiv" class:hidden={upgrade3.isHidden}>
        <button class="upgrade" on:click={()=>{upgrade3.buy(); upgrade3=upgrade3;}}>{upgrade3.generate()}</button>
        <p class="upgradeAmt">x{upgrade3.amount}</p></div>
        
        <div class="upgradeDiv" class:hidden={upgrade4.isHidden}>
        <button class="upgrade" on:click={()=>{upgrade4.buy(); upgrade4=upgrade4;}}>{upgrade4.generate()}</button>
        <p class="upgradeAmt">x{upgrade4.amount}</p></div>
        
        <div class="upgradeDiv" class:hidden={upgrade5.isHidden}>
        <button class="upgrade" on:click={()=>{upgrade5.buy(); upgrade5=upgrade5;}}>{upgrade5.generate()}</button>
        <p class="upgradeAmt" >x{upgrade5.amount}</p></div>

        <div id="upgradeDivider"></div>

        <div class="upgradeDiv">
        <button class="upgrade" class:hidden={autoClickerEnabled} on:click={buyAutoClicker} bind:this={autoClickerBuyElement}>Auto Clicker {autoClickerCost}c</button>
        <button class="upgrade" class:hidden={!autoClickerEnabled}>Auto Clicker</button>
        <p class="upgradeAmt">{autoClickerEnabled ? 'Enabled' : 'Disabled'}</p></div>
    </section>


    <section id="tabSection">
        <div id="tabSelection">
            <button class="tabButton" class:selectedTabButton={selectedTab=='stats'} on:click={()=>{selectedTab='stats'}}>Stats</button>
            <button class="tabButton" class:selectedTabButton={selectedTab=='options'} on:click={()=>{selectedTab='options'}}>Options</button>
        </div>

        <section id="tabContent">
            <div id="statSection" class:hidden={!(selectedTab == 'stats')}>
                <h1 class="title subTitle">Stats</h1>
                <span class="stat leftstat">Total clicks: {totalClicks}</span>
                <span class="stat midstat">CPC: {Math.round(clickPower*10)/10}</span>
                <span class="stat rightstat">CPS: {cps}</span>
            </div>
            <div id="optionSection" class:hidden={!(selectedTab == 'options')}>
                <h1 class="title subTitle">Options</h1>
                <button class="progressBtn" id="saveProgressBtn" on:click={saveProgress}>Save</button>
                <button class="progressBtn" id="loadProgressBtn" on:click={loadProgress}>Load</button>
                <button class="progressBtn" id="resetProgressBtn" on:click={resetProgress}>Reset</button>    
            </div>
        </section>
        <p id="credit">Made by Nemo Eriksson 2022</p>
    </section>
</body>

<style>
div, section{
    user-select: none;
}

h1, p, span{
    font-family: Arial, Helvetica, sans-serif;
}

body{
    max-height: 100vh;
}

section{
    height: 0;
}

.backgroundColor{
    background: rgb(63, 78, 79);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
}

button{
    outline: 0;
}

.title{
    text-align: center;
    font-size: 42px;
    color:#dcd7c9;
    text-shadow: 2px 2px 0px #a27b5c;
}

.subTitle{
    font-size: 32px;
    transform: translateY(50%);
}

#cookieSection{
    width: 60%;
}

#cookie{
    height: 300px;
    width: 300px;
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-150px, -150px);
    z-index: 1;
    background:#dcd7c9;
    background-image: url('/cookieIcon.png');
    background-size: cover;
    border: 5px solid #dcd7c9;
    border-radius: 50%;
    box-shadow: 10px 10px 0px rgb(44, 54, 57);
}

#cookie:active{
    box-shadow: 9px 9px 0px rgb(44, 54, 57);
    transform: translate(-149px, -149px);
}

#upgradeSection{
    width: 42%;
    height: 100%;
    position: absolute;
    right: 0%;
    top: 0%;
    background: rgb(44, 54, 57);
    border-left: 4px solid rgb(220, 215, 201);
    z-index: 4;
}

#upgradeDivider{
    z-index: 3;
    width: 100%;
    height: 0;
    border-top: 2px dashed rgb(220, 215, 201);
}

.upgrade{
    width: 250px;
    height: 40px;
    color: rgb(220, 215, 201);
    text-shadow: 1px 1px 0px rgb(162, 123, 92);
    display: inline;
    font-size: 22px;
    background: #3f4e4f;
    border: 2px solid rgb(220, 215, 201);
    border-radius: 5px;
}
.upgrade:hover{
    animation: 0.1s hoverUpgrade forwards;
}

@keyframes hoverUpgrade {
    from{
        width: 250px;
    }
    to{
        width: 255px;
    }
}

.upgradeAmt{
    color:rgb(220, 215, 201);
    text-shadow: 1px 1px 0px rgb(220, 215, 201);
    font-size: 22px;
    display: inline;
}

.upgradeDiv{
    margin: 25px auto;
    width: fit-content;
}

.hidden {
    display:none !important;
}

#tabSection{
    position: absolute;
    left: 0%;
    bottom: 0%;
    width: 60%;
    height: 25%;
    z-index: 3;
    background:rgb(44, 54, 57);
    border-top: 4px solid rgb(220, 215, 201);
}

#tabSelection{
    transform: translate(2px, -42px);
    font-size: 0px;
    z-index: 3;
}

.tabButton{
    width: 95px;
    height: 35px;
    background: rgb(44, 54, 57);
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(220, 215, 201);
    text-shadow: 1px 1px 0px rgb(162, 123, 92);
    border: 3px solid rgb(220, 215, 201);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin: 0px;
    padding: 0px;
}

.selectedTabButton{
    border: 4px solid rgb(220, 215, 201);
    border-bottom: none;
    width: 105px;
    height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transform: translateY(-1px);
}

#tabContent{
    width: 100%;
    height: 100%;
    transform: translateY(-72px);
}

.stat{
    color:rgb(220, 215, 201);
    text-shadow: 1px 1px 0px rgb(162, 123, 92);
    position: absolute;
    font-size: 24px;
    transform: translate(-50%, -50%);
    top: 55%;
    text-align: left;
}

.leftstat{
    left: 25%;
}
.midstat{
    left: 50%;
}
.rightstat{
    left: 75%;
}

.progressBtn{
    width: 130px;
    height: 40px;
    background: rgb(63, 78, 79);
    border: 2px solid rgb(220, 215, 201);
    border-radius: 5px;
    color: rgb(220, 215, 201);
    text-shadow: 1px 1px 0px rgb(162, 123, 92);
    font-size: 22px;
    position: absolute;
    top: 55%;
    transform: translate(-50%,-50%);
}
.progressBtn:hover{
    animation: .2s hoverButton;
    animation-fill-mode: forwards;
}

#saveProgressBtn{
    left: 25%;
}#loadProgressBtn{
    left: 50%;
}#resetProgressBtn{
    left: 75%;
}

@keyframes hoverButton {
    from{
        top: 55%;
    }
    to{
        top: 54%;
    }
}

#messageDiv{
    width: 35%;
    height: 20%;
    z-index: 5;
    background-color: rgb(63, 78, 79);
    border: 4px solid rgb(220, 215, 201);
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -100%);
    color: rgb(220, 215, 201);
    text-shadow: 2px 2px 0px rgb(162, 123, 92);
    font-size: 40px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
#messageDiv p{
    position: relative;
    top:30%;
    left:50%;
    transform: translate(-50%,-50%);
}

.slideDown{
    transform: translate(-50%,-100%);
    animation: 2s slideDown forwards;
}
@keyframes slideDown{
    0%{
        transform: translate(-50%, -100%);
    }
    30%{
        transform: translate(-50%, 0%);
    }
    80%{
        transform: translate(-50%, 0%);
    }
    100%{
        transform: translate(-50%, -100%);
    }
}

#credit{
    color:rgb(220, 215, 201);
    text-shadow: 1px 1px 0px rgb(162, 123, 92);
    position: absolute;
    bottom: 0px;
    left: 10px;
    font-size: 12px;
    font-style: italic;
}

#backContainer{
    height: 40px;
    width: 80px;
    position: absolute;
    top: -5px;
    left: 5px;
}

#backToMain{
    text-align: center;
    color: #dcd7c9;
    text-shadow: 1px 1px #a27b5c;
    position: relative;
    top: 50%;
    left: 5px;
    text-decoration: none;
    transform: translateY(-50%);
    font-size: 18px;
    opacity: .5;
    transition: .25s all;
}
#backToMain:hover{
    opacity: 1;
}

</style>