/* PHASE 0 : activer le jeux de dés
1) Cliquer sur le bouton New game pour l' la partie a 0
2) ajoute  a alatoire entre le joueur 1 est le joueur 2
3) débute la partie entre les joueurs
*/
// Déclaration des constantes pour les scores, le score actuel, le joueur actif et l'état du jeu
const scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let gamePlaying = true;

// Fonction d'initialisation
function init() {
    scores[0] = 0;
    scores[1] = 0;
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // Cacher l'image du dé
    document.querySelector('.dice').style.display = 'none';

    // Réinitialiser l'affichage des scores et noms des joueurs
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Réinitialiser les classes des panneaux
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

