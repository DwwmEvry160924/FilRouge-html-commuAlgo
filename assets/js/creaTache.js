window.onbeforeunload = function(event) {
    event.returnValue = "message par défaut du navigateur"; // pas possible de choisir le msg affiché avec cette méthode //
  };