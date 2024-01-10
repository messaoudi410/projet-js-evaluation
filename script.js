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
        diceImage.src = `./assets/Image/dice-${diceResult}.png`;
  
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
    activePlayer = 1 - activePlayer;
    roundScore = 0;
    
    // Mise à jour de l'affichage du score du tour actuel
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // Changement de la classe "active" pour les panneaux des joueurs
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    // Réinitialisation de l'image du dé
    document.getElementById('diceImage').style.display = 'none';
}
  
// Fonction pour gérer le bouton "Hold"
function hold() {
    if (gamePlaying) {
        // Ajout du score du tour actuel au score global du joueur actif
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            // Affichage du message de victoire si le joueur atteint 100 points
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('diceImage').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Passage au joueur suivant
            nextPlayer();
        }
    }
}

// Fonction d'initialisation du jeu
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // Mise à jour de l'affichage initial
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('diceImage').style.display = 'none';
}
