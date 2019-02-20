"use strict";

(function (){

function startGame() {
    let greeting1 = confirm('Would you like to play a game?');
    let username;

    if (greeting1 === true) {

        username = prompt("Pick a username?", "Juggling Jessica");
        startCombat();        
    }
    else if (greeting1 === false) {
    console.log(`That's cool - Maybe next time!`);
    document.getElementById("result").innerHTML = "That's cool - Maybe next time!";
    }

    function startCombat() {        
    let userHealthPoints = 40;
    let grantHealthPoints = 10;
    let wins = 0; 
    console.log(`LET'S START WITH 3 ROUNDS!

    >> ${username} is starting with ${userHealthPoints} health points
    >> Grant is starting with ${grantHealthPoints} health points
    
    GOOD LUCK!`);


    function getDamage() {
        userHealthPoints -= Math.floor((Math.random()* 3.5) + 1);
        grantHealthPoints -= Math.floor((Math.random() * 3) + 1);
    }    

    while (grantHealthPoints > 0) {
        getDamage();
        console.log(`\n${username}'s Health: ${userHealthPoints}`);
        console.log(`Grant's Health: ${grantHealthPoints}`);

        if (userHealthPoints <= 0) {
            console.log(`\n \n Better Luck Next Time - The Almighty Grant Won!`);
            document.getElementById("result").innerHTML = `Better Luck Next Time - The Almighty Grant Won!`;
            break;

        }   

        if (grantHealthPoints <= 0 && wins <= 2) {
            wins++;
            console.log(`\n${username} is WINNER of round ${wins} of 3.`); 
            grantHealthPoints = 10;
        }

        if (wins === 3) {
            console.log(`
            >>>>>GAME OVER<<<<<
            \n \nCongratulations ${username}! You've won!`);
            document.getElementById("result").innerHTML = `Congratulations ${username}! You've won!`;
            break;

        }
        
        let attack = confirm("'OK' to ATTACK! \n \n 'CANCEL' to QUIT");

        if (attack === false) {
          console.log(`BOOOO! Quitters never prosper 
          ¯\_(ツ)_/¯ `);
          break;
        }
   

    }

}
}

startGame();
})();