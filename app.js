const backgroundSound = document.createElement("audio");
backgroundSound.src = "audio/lava-loop.wav";
backgroundSound.loop = true;
backgroundSound.play();

let stats = {
  demonCount: 0,
  dps: 0,
};

async function cookieClickerAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgradeObject = await response.json();

  //TODO: construct MENU

  const resetButton = document.createElement("button");
  resetButton.className = "resetButton";
  resetButton.textContent = "RESET GAME";

  const gameMenu = document.getElementById("menu");
  gameMenu.appendChild(resetButton);

  //TODO affix a mute image button that changes when muted and unmuted

  resetButton.addEventListener("click", function () {
    parsedStats.dps = 0;
    parsedStats.demonCount = 0;

    const stringifiedStats = JSON.stringify(stats); //this is in  js
    localStorage.setItem("stats", stringifiedStats); //this is in JSON)

    //updates the game UI
    const demonCounterUI = document.getElementById("gameInfo");
    demonCounterUI.innerHTML = null;
    const newTotalDemons = document.createElement("p");
    newTotalDemons.textContent = `Total Demons Spawned: ${parsedStats.demonCount}`;
    const newDemonsPS = document.createElement("p");
    newDemonsPS.textContent = `Total Demons Spawning Per Second: ${parsedStats.dps}`;

    demonCounterUI.appendChild(newTotalDemons);
    demonCounterUI.appendChild(newDemonsPS);
  });

  //Reads whatever current state we have
  const storedStats = localStorage.getItem("stats"); //this is in JSON
  // changes to js
  const parsedStats = JSON.parse(storedStats); //this is now in js

  //updates the game UI
  const demonCounterUI = document.getElementById("gameInfo");
  demonCounterUI.innerHTML = null;
  const newTotalDemons = document.createElement("p");
  newTotalDemons.textContent = `Total Demons Spawned: ${parsedStats.demonCount}`;
  const newDemonsPS = document.createElement("p");
  newDemonsPS.textContent = `Total Demons Spawning Per Second: ${parsedStats.dps}`;
  demonCounterUI.appendChild(newTotalDemons);
  demonCounterUI.appendChild(newDemonsPS);

  function demonClicker() {
    //CLICKER EVENT
    const demonSpawner = document.getElementById("demonSpawner");
    demonSpawner.addEventListener("click", function spawnDemon() {
      const summonSound = document.createElement("audio");
      summonSound.src = "audio/summon.flac";
      summonSound.volume = 0.25;
      summonSound.play();
      //-increments demon count state
      parsedStats.demonCount++;

      //stringifies the full object game state
      const stringifiedStats = JSON.stringify(parsedStats);
      //saves the full object game state
      localStorage.setItem("stats", stringifiedStats);

      //updates the game UI

      const demonCounterUI = document.getElementById("gameInfo");
      demonCounterUI.innerHTML = null;
      const newTotalDemons = document.createElement("p");
      newTotalDemons.textContent = `Total Demons Spawned: ${parsedStats.demonCount}`;
      const newDemonsPS = document.createElement("p");
      newDemonsPS.textContent = `Total Demons Spawning Per Second: ${parsedStats.dps}`;

      demonCounterUI.appendChild(newTotalDemons);
      demonCounterUI.appendChild(newDemonsPS);
    });
  }

  demonClicker();

  upgradeObject.forEach(function (upgrade) {
    const upgradeButton = document.createElement("button");

    const shopContainer = document.getElementById("shop-container");

    shopContainer.appendChild(upgradeButton);
    upgradeButton.className = "upgradeButton";

    upgradeButton.id = upgrade.id;
    console.log(upgradeButton.id);

    upgradeButton.addEventListener("click", function buyUpgrade() {
      if (parsedStats.demonCount >= upgrade.cost) {
        //deducts the total count
        parsedStats.demonCount = parsedStats.demonCount - upgrade.cost;
        parsedStats.dps = parsedStats.dps + upgrade.increase;

        const stringifiedStats = JSON.stringify(parsedStats);
        //saves the full object game state
        localStorage.setItem("stats", stringifiedStats);

        //updates the game UI

        const demonCounterUI = document.getElementById("gameInfo");
        demonCounterUI.innerHTML = null;
        const newTotalDemons = document.createElement("p");
        newTotalDemons.textContent = `Total Demons Spawned: ${parsedStats.demonCount}`;
        const newDemonsPS = document.createElement("p");
        newDemonsPS.textContent = `Total Demons Spawning Per Second: ${parsedStats.dps}`;

        demonCounterUI.appendChild(newTotalDemons);
        demonCounterUI.appendChild(newDemonsPS);
      }
    });
  });

  const upgrade1 = document.getElementById("1");
  const upgrade5 = document.getElementById("2");
  const upgrade10 = document.getElementById("3");
  const upgrade20 = document.getElementById("4");
  const upgrade50 = document.getElementById("5");
  const upgrade100 = document.getElementById("6");
  const upgrade200 = document.getElementById("7");
  const upgrade500 = document.getElementById("8");
  const upgrade1000 = document.getElementById("9");
  const upgrade2000 = document.getElementById("10");

  upgrade1.textContent = "Summon With Friends! Costs the souls of 100 demons";
  upgrade5.textContent =
    "Increased Summoning Powers! Costs the souls of 500 demons";
  upgrade10.textContent = "Raising the Dead! Costs the souls of 1,000 demons";
  upgrade20.textContent = "Crypt Keeping! Costs the souls of 2,000 demons";
  upgrade50.textContent =
    "Ordained in the Occult! Costs the souls of 5,000 demons";
  upgrade100.textContent = "Squads of Satan! Costs the souls of 10,000 demons";
  upgrade200.textContent =
    "Astaroth's Armies! Costs the souls of 20,000 demons";
  upgrade500.textContent = "Spawning Legions! Costs the souls of 50,000 demons";
  upgrade1000.textContent =
    "Beelzebub's Batallions! Costs the souls of 100,000 demons";
  upgrade2000.textContent =
    "LUCIFER LEADS US! Costs the souls of 200,000 demons";

  setInterval(function () {
    parsedStats.demonCount = parsedStats.demonCount + parsedStats.dps;
    //stringifies the full object game state
    const stringifiedStats = JSON.stringify(parsedStats);
    //saves the full object game state
    localStorage.setItem("stats", stringifiedStats);

    //updates the game UI

    const demonCounterUI = document.getElementById("gameInfo");
    demonCounterUI.innerHTML = null;
    const newTotalDemons = document.createElement("p");
    newTotalDemons.textContent = `Total Demons Spawned: ${parsedStats.demonCount}`;
    const newDemonsPS = document.createElement("p");
    newDemonsPS.textContent = `Total Demons Spawning Per Second: ${parsedStats.dps}`;

    demonCounterUI.appendChild(newTotalDemons);
    demonCounterUI.appendChild(newDemonsPS);
  }, 1000);
}

cookieClickerAPI();
