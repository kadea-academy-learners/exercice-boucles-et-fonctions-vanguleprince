/*
  /*
    Énoncé :
    Écris une fonction `compteARebours()` qui affiche dans la console les nombres de 10 à 1,
    un nombre par ligne.

    Signature attendue :
      function compteARebours() -> void

    Placeholder : version neutre (ne log rien) pour permettre l'exécution des tests
    sans lever d'exception. L'étudiant doit remplacer la fonction par son implémentation.
  */
  function compteARebours() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

compteARebours();

  // Ne pas modifier la ligne ci-dessous
  module.exports = { compteARebours }
// Ne pas modifier la ligne ci-dessous
