
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
  // Crea una "new Promise" qui e usa setTimeout dentro la funzione che passi al costruttore
  
  setTimeout(function() { // <- Metti QUESTO dentro la promessa!
    // resolve con questa stringa: 'https://swapi.co/api/people/1'
  }, 3000);

  // Gestisci la Promise (=> prendeno il valore cha a tornato) e ritorna un fetch()
  // Richiedi con fetch in GET l'url 

  // Gestisci il fetch ed estrail il JSON dalla ReeadableStream
  // Prendilo in un altro .then()

  // Infine, stamp il "nome" (data.name) dentro l'html output (usa .textContext)

  // Ripeti l'esercio con una put all'url https://httpbin.org/put
  // setta gli header correttamente
  // manda un oggetto a tua scelta, ma che abbia  un attributo name da qualche parte
  // Esempio: se mandi {person: {name: 'Paaolo', age: 28}}, Accederai a data.person.name
  // Stampa il nome

  // Per finire, aggiungi un error e gestiscilo
});