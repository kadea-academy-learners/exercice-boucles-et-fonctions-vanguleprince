/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
   if (!phrase) {
    return 0; 
  }

  const texte = phrase.toLowerCase();
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

  let compteur = 0;

  for (let i = 0; i < texte.length; i++) {
    if (voyelles.includes(texte[i])) {
      compteur++;
    }
  }

  return compteur;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
