/* PHASE 0 : activer le jeux de dés
1) Cliquer sur le bouton New game pour l' la partie a 0
2) ajoute  a alatoire entre le joueur 1 est le joueur 2
3) débute la partie entre les joueurs
*/
let scores, roundScore, activePlayer, gamePlaying;

// Initialisation du jeu
init();

// Ajout d'un écouteur d'événement pour le bouton "Roll dice"
document.querySelector('.btn-roll').addEventListener('click', rollDice);

// Ajout d'un écouteur d'événement pour le bouton "New game"
document.querySelector('.btn-new').addEventListener('click', init);

// Ajout d'un écouteur d'événement pour le bouton "Hold"
document.querySelector('.btn-hold').addEventListener('click', hold);


// Fonction pour simuler le lancer de dé
function rollDice() {
    if (gamePlaying) {
        // Génération d'un nombre aléatoire entre 1 et 6 (simulant un lancer de dé)
        const diceResult = Math.floor(Math.random() * 6) + 1;

        // Sélection de l'élément image du dé
        const diceImage = document.getElementById('diceImage');
        
        // Mise à jour de l'image du dé en fonction du résultat du lancer
        diceImage.src = `./assets/image/dice-${diceResult}.png`;

        if (diceResult !== 1) {
            // Ajout du résultat au score du tour actuel
            roundScore += diceResult;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            // Passage au joueur suivant si le dé affiche 1
            nextPlayer();
        }
    }
}

// Fonction pour passer au joueur suivant
function nextPlayer() {
    // Changement du joueur actif
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    // Mise à jour de l'affichage du score du tour actuel
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // Changement de la classe "active" pour les panneaux des joueurs
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    // Réinitialisation de l'image du dé
    document.getElementById('diceImage').src = '';
}

