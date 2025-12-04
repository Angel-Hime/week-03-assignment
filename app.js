console.log("CONSOLE TEST");

//game logic
//when the user clicks on the cookie, the total count of cookies goes up by 1
//when the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//data storage
//global scope
// let totalCookieCount = 0;
// let cps = 0;

let stats = {
  demonCount: 0,
  dps: 0,
};

//if there is data already in local storage, update stats with this data, so the user picks it up where they left off
//we will need functions to contain the game logic

//we will get the shop upgrades data from the API: shop upgrades

//TODO: fetch the upgrades form the API
async function cookieClickerAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgradeObject = await response.json();

  //TODO: Construct the Base Game State
  //saves the BASE POINT full object game state
  const stringifiedStats = JSON.stringify(stats); //this is in  js
  localStorage.setItem("stats", stringifiedStats); //this is in JSON

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
      //stringifies the full object game state
      const stringifiedStats = JSON.stringify(parsedStats);
      //saves the full object game state
      localStorage.setItem("stats", stringifiedStats);

      //-increments demon count state
      stats.demonCount = parsedStats.demonCount++; // so far the issue is that the first click increments a local data and not stored data

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

  //TODO: create multiple DOM elements to contain the upgrades (loop)

  //TODO: create DOM elements for the shop upgrades
  //- create element
  //loop through the object
  upgradeObject.forEach(function (upgrade) {
    const upgradeButton = document.createElement("button");

    //CHANGE THIS!! -> create a new array to run through with a for loop and add the name
    //- assign the value to its property (textContent)
    upgradeButton.textContent = upgrade.name;
    const shopContainer = document.getElementById("shop-container");
    //- append it to the DOM
    shopContainer.appendChild(upgradeButton);
    upgradeButton.className = "upgradeButton";
    // after you complete this task, you should see the upgrades in your shop-container!

    const upgradeName = upgrade.name;
    const upgradeID = upgrade.id;
    const upgradeCost = upgrade.cost;
    const upgradeIncrease = upgrade.increase;

    console.log(upgradeIncrease, upgradeCost, upgradeID, upgradeName);

    upgradeButton.addEventListener("click", function buyUpgrade() {
      if (upgradeID === "1") {
      }
    });
  });

  //TODO: create function(s) to handle the purchase action
  //the user needs a button to buy the item
  //when the user clicks the button:
  //subtract cost of upgrade from totalCookieCount
  //add increase value to cps
  //save new values in local storage

  //to create the logic for the shop upgrades:
  //- OPTION 1: you could have a function to handle each upgrade
  //- OPTION 2: you could have a reusable function that works for ALL upgrades
  //function buyUpgrade()

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
