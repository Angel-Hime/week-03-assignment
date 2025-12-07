# week-03-assignment

Project Overview

A clicker style game, with purchasable upgrades that are obtainable after reaching points based milestones. The clicker is the pulsing (animated) summoning circle icon added within the html DOM. This has a hovering action to indicate the clickable nature further. A sound plays when the icon is clicked to indicate the summoning of a demon, alongside a short grow-shrink animation built in CSS.

The project uses JS DOM maniupluation to construct the upgrade shop; sounds will play when the upgrade is purchased, a sound which will only be played if the user has the sufficient amount of souls to trade. An upgrade list provided alongside text indicators.

In the background there is a slow rumbling sound added throgh JS DOM manipulation and which is looped so that is plays all throughout the game.

The game data is saved using local storage; the JS script provides for the pull of the data from local storage to ensure that the next time the user plays the game it will have the previous total summoned demons and demons per second data loaded so that the game can be continued. There is also a reset button so that the player stats can be restored to 0.

Reflection

I wanted to start by noting that this week was a write off for me as I have been struggling with a horrid flu, so understanding some of the content was not the easiest, especially when I reached the point of having to piece it all together and utilise it in my project. So, I apologise if it isn't exactly up to par, I did my best to plug away at it regardless.

Design Aspects:

I feel that I may have 'phoned it in' a bit when it came to the design, there was so much more that I wanted to do but I just couldn't get my brain to function and I couldn't take my medication due to having the flu so my concentration was essentially non-existent. I tried to use optimised images and the correct measurements but it was a struggle to just get everything together with the miasma of conflusion that chose to settle within my brain this week.

Requirements:

I believe that I met all of the main requirements as the game functions and the page shrinks and moves at the correct points to say that it is optimised.

🎯 Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.✔️

    The only trouble that I had with this was using my own names; could there have been an easier way to alter the names from the cookie API so that I am able to more easily label my buttons.

🎯 Ensure that functions are used effectively to keep code organised and reusable. ✔️
🎯 Implement event listeners to handle user interactions. ✔️
🎯 Use local storage to save and restore the cookie count and relevant game information. ✔️

    I think that I used this properly as everything works but would you mind advising is there is any superfluous code used.

🎯 Use setInterval to increment the cookie count and manage the game state each second.
Managing the game state includes saving progress and updating the DOM. ✔️

STRETCH GOALS:

I believe that I was able to meet the rrequirements of a couple of the stretch goals but would appreciate some guidance with a couple of the others please:

🏹Consolidate upgrade management by managing all upgrades in a single function. ✔️

    So I have every purchase within the same single function and everything exists within the main game tick loop. I hope that this is enough to meet the stretch goal but is there a more efficient or effective way to have done everything that I have done?

🏹 Improve UX with animations, sound effects, or other visual effects. ✔️

    I have added sounds and animations to make it clear what is the main clickable icon and when the icon is clicked; I also created and

🏹 Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information. ❌

    I have tried to provide a description of the project but I wasn't sure that this meets the stretch goal. Additionally, and I may be showing the dumb brain here, may I ask what you mean by 'how to deploy' please?

🏹 Create a menu for users to adjust game options like sound effects or display preferences. ❌

    I wanted to get onto this but my brain just wouldn't function enough. Would this work as just a small menu in the main viewport, or would it be better advised to figure out pop up windows?

Sources:

    images:

        Demon icon created by Smashicons - Flaticon --> https://www.flaticon.com/free-icons/demon

        Summoning Clicker --> https://toppng.com/show_download/163696/transparent-pentagram-evil-bloody-pentagram


    sounds:

        https://freesound.org


    Tutorials and key information:

        MDN - https://developer.mozilla.org/en-US/
        W3 Schools - https://www.w3schools.com/
