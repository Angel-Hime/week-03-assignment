//start audio
const openingAudio = document.createElement("audio");
openingAudio.src = "audio/LUCIFER.mp3";
openingAudio.play();
//background audio
const backgroundSound = document.createElement("audio");
backgroundSound.src = "audio/lava-loop.wav";
backgroundSound.loop = true;
backgroundSound.play();

let stats = {
  demonCount: 0,
  dps: 0,
};

function demonClicker() {
  const storedStats = localStorage.getItem("stats");
  const parsedStats = JSON.parse(storedStats);

  if (parsedStats === null) {
    const stringifiedStats = JSON.stringify(stats);
    localStorage.setItem("stats", stringifiedStats);
  }

  stats = parsedStats;
  //updates the game UI
  const demonCounterUI = document.getElementById("gameInfo");
  demonCounterUI.innerHTML = null;
  const newTotalDemons = document.createElement("p");
  newTotalDemons.textContent = `Total Demons Summoned: ${stats.demonCount}`;
  const newDemonsPS = document.createElement("p");
  newDemonsPS.textContent = `Total Demons Summoned Per Second: ${stats.dps}`;

  demonCounterUI.appendChild(newTotalDemons);
  demonCounterUI.appendChild(newDemonsPS);

  //CLICKER EVENT
  const demonSpawner = document.getElementById("demonSpawner");
  demonSpawner.addEventListener("click", function spawnDemon() {
    //- sound on click
    const upgradeSummonSound = document.createElement("audio");
    upgradeSummonSound.src = "audio/click.m4a";
    upgradeSummonSound.volume = 0.25;
    upgradeSummonSound.play();

    stats = parsedStats;
    //-increments demon count state
    stats.demonCount++;

    const stringifiedStats = JSON.stringify(stats);
    localStorage.setItem("stats", stringifiedStats);

    //updates the game UI
    const demonCounterUI = document.getElementById("gameInfo");
    demonCounterUI.innerHTML = null;
    const newTotalDemons = document.createElement("p");
    newTotalDemons.textContent = `Total Demons Summoned: ${stats.demonCount}`;
    const newDemonsPS = document.createElement("p");
    newDemonsPS.textContent = `Total Demons Summoned Per Second: ${stats.dps}`;

    demonCounterUI.appendChild(newTotalDemons);
    demonCounterUI.appendChild(newDemonsPS);
  });
}

demonClicker();

async function cookieClickerAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgradeObject = await response.json();

  upgradeObject.forEach(function (upgrade) {
    const upgradeButton = document.createElement("button");
    const shopContainer = document.getElementById("shop-container");
    shopContainer.appendChild(upgradeButton);
    upgradeButton.className = "upgradeButton";
    upgradeButton.id = upgrade.id;

    console.log(stats);

    upgradeButton.addEventListener("click", function buyUpgrade() {
      if (stats.demonCount >= upgrade.cost) {
        const upgradeSummonSound = document.createElement("audio");
        upgradeSummonSound.src = "audio/summon.flac";
        upgradeSummonSound.volume = 0.25;
        upgradeSummonSound.play();

        //deducts the total count
        stats.demonCount = stats.demonCount - upgrade.cost;
        stats.dps = stats.dps + upgrade.increase;
        console.log(stats);

        const stringifiedStats = JSON.stringify(stats);
        localStorage.setItem("stats", stringifiedStats);

        //updates the game UI
        const demonCounterUI = document.getElementById("gameInfo");
        demonCounterUI.innerHTML = null;
        const newTotalDemons = document.createElement("p");
        newTotalDemons.textContent = `Total Demons Summoned: ${stats.demonCount}`;
        const newDemonsPS = document.createElement("p");
        newDemonsPS.textContent = `Total Demons Summoned Per Second: ${stats.dps}`;
        demonCounterUI.appendChild(newTotalDemons);
        demonCounterUI.appendChild(newDemonsPS);
      } else {
        console.log("fail");
      }
    });
  });

  //ASSINGMENT OF TEXT CONTENT TO UPGRADE BUTTONS AND STYLING
  const upgrade1 = document.getElementById("1");
  const upgrade1P1 = document.createElement("p");
  const upgrade1P2 = document.createElement("p");
  upgrade1P1.textContent = "Summon With Friends!";
  upgrade1P2.textContent = "100 Demon Souls";
  upgrade1.appendChild(upgrade1P1).appendChild(upgrade1P2);

  const upgrade5 = document.getElementById("2");
  const upgrade5P1 = document.createElement("p");
  const upgrade5P2 = document.createElement("p");
  upgrade5P1.textContent = "Increase Your Summoning Powers!";
  upgrade5P2.textContent = "500 Demon Souls";
  upgrade5.appendChild(upgrade5P1).appendChild(upgrade5P2);

  const upgrade10 = document.getElementById("3");
  const upgrade10P1 = document.createElement("p");
  const upgrade10P2 = document.createElement("p");
  upgrade10P1.textContent = "Raise the Dead!";
  upgrade10P2.textContent = "1,000 Demon Souls";
  upgrade10.appendChild(upgrade10P1).appendChild(upgrade10P2);

  const upgrade20 = document.getElementById("4");
  const upgrade20P1 = document.createElement("p");
  const upgrade20P2 = document.createElement("p");
  upgrade20P1.textContent = "Crypt Keeping!";
  upgrade20P2.textContent = "2,000 Demon Souls";
  upgrade20.appendChild(upgrade20P1).appendChild(upgrade20P2);

  const upgrade50 = document.getElementById("5");
  const upgrade50P1 = document.createElement("p");
  const upgrade50P2 = document.createElement("p");
  upgrade50P1.textContent = "Ordained in the Occult!";
  upgrade50P2.textContent = "5,000 Demon Souls";
  upgrade50.appendChild(upgrade50P1).appendChild(upgrade50P2);

  const upgrade100 = document.getElementById("6");
  const upgrade100P1 = document.createElement("p");
  const upgrade100P2 = document.createElement("p");
  upgrade100P1.textContent = "Summon The Squads of Satan!";
  upgrade100P2.textContent = "10,000 Demon Souls";
  upgrade100.appendChild(upgrade100P1).appendChild(upgrade100P2);

  const upgrade200 = document.getElementById("7");
  const upgrade200P1 = document.createElement("p");
  const upgrade200P2 = document.createElement("p");
  upgrade200P1.textContent = "Call Astaroth's Armies";
  upgrade200P2.textContent = "20,000  Demon Souls";
  upgrade200.appendChild(upgrade200P1).appendChild(upgrade200P2);

  const upgrade500 = document.getElementById("8");
  const upgrade500P1 = document.createElement("p");
  const upgrade500P2 = document.createElement("p");
  upgrade500P1.textContent = "Spawn Lucifer's Legions!";
  upgrade500P2.textContent = "50,000  Demon Souls";
  upgrade500.appendChild(upgrade500P1).appendChild(upgrade500P2);

  const upgrade1000 = document.getElementById("9");
  const upgrade1000P1 = document.createElement("p");
  const upgrade1000P2 = document.createElement("p");
  upgrade1000P1.textContent = "Bring Forth Beelzebub's Batallions!";
  upgrade1000P2.textContent = "100,000 Demon Souls";
  upgrade1000.appendChild(upgrade1000P1).appendChild(upgrade1000P2);

  const upgrade2000 = document.getElementById("10");
  const upgrade2000P1 = document.createElement("p");
  const upgrade2000P2 = document.createElement("p");
  upgrade2000P1.textContent = "LUCIFER LEADS US!";
  upgrade2000P2.textContent = "200,000 Demon Souls";
  upgrade2000.appendChild(upgrade2000P1).appendChild(upgrade2000P2);

  setInterval(function () {
    stats.demonCount = stats.demonCount + stats.dps;
    const stringifiedStats = JSON.stringify(stats);
    localStorage.setItem("stats", stringifiedStats);

    //updates the game UI
    const demonCounterUI = document.getElementById("gameInfo");
    demonCounterUI.innerHTML = null;
    const newTotalDemons = document.createElement("p");
    newTotalDemons.textContent = `Total Demons Summoned: ${stats.demonCount}`;
    const newDemonsPS = document.createElement("p");
    newDemonsPS.textContent = `Total Demons Summoned Per Second: ${stats.dps}`;
    demonCounterUI.appendChild(newTotalDemons);
    demonCounterUI.appendChild(newDemonsPS);
  }, 1000);

  //reset button
  const resetButton = document.createElement("button");
  resetButton.className = "resetButton";
  resetButton.textContent = "RESET GAME";

  const gameMenu = document.getElementById("menu");
  gameMenu.appendChild(resetButton);

  resetButton.addEventListener("click", function () {
    const summonSound = document.createElement("audio");
    summonSound.src = "audio/LUCIFER.mp3";
    summonSound.volume = 0.25;
    summonSound.id = "sound";
    summonSound.play();

    stats.dps = 0;
    stats.demonCount = 0;

    const stringifiedStats = JSON.stringify(stats);
    localStorage.setItem("stats", stringifiedStats);
    const storedStats = localStorage.getItem("stats");
    const parsedStats = JSON.parse(storedStats);

    //updates the game UI
    const demonCounterUI = document.getElementById("gameInfo");
    demonCounterUI.innerHTML = null;
    const newTotalDemons = document.createElement("p");
    newTotalDemons.textContent = `Total Demons Summoned: ${stats.demonCount}`;
    const newDemonsPS = document.createElement("p");
    newDemonsPS.textContent = `Total Demons Summoned Per Second: ${stats.dps}`;
    demonCounterUI.appendChild(newTotalDemons);
    demonCounterUI.appendChild(newDemonsPS);
  });
}

cookieClickerAPI();
