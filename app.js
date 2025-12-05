let stats = {
  demonCount: 0,
  dps: 0,
};

//TODO: fetch the upgrades form the API
async function cookieClickerAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgradeObject = await response.json();

  //TODO: Construct the Base Game State

  //reset the BASE POINT full object game state as 0! but is needed if you delete the local storage
  const resetButton = document.createElement("button");
  resetButton.className = "resetButton";
  resetButton.textContent = "RESET GAME";
  document.body.appendChild(resetButton);

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

    //CHANGE THIS!! -> create a new array to run through with a for loop and add the name - assign the value to its property (textContent)
    upgradeButton.textContent = `${upgrade.name} ${upgrade.cost}`;

    upgradeButton.addEventListener("click", function buyUpgrade() {
      /*UPGRADE ONE*/
      if (parsedStats.demonCount >= upgrade.cost) {
        // if (upgrade.id === 1 && parsedStats.demonCount >= upgrade.cost)
        //deducts the total count
        parsedStats.demonCount = parsedStats.demonCount - upgrade.cost;
        parsedStats.dps = parsedStats.dps + upgrade.increase;
        console.log(`${parsedStats.dps}, ${parsedStats.demonCount}`);

        //we need to add the purchased upgrade to local storage ONLY FOR ANIMATIONS
        //        localStorage.setItem("colorSetting", "#a4509b");

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
      }
    });
  });

  //TODO: the interval
  setInterval(function () {
    stats.demonCount = stats.demonCount + stats.dps; //totalCookieCount = totalCookieCount + cps
    //update the DOM to reflect the changes in the values
    // clear the html
    // add new html elements with each increment
    // save the values in local storage
  }, 1000);
}

cookieClickerAPI();
