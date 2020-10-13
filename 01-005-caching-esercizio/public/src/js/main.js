
var box = document.querySelector('.box');
var button = document.querySelector('button');

button.addEventListener('click', function(event) {
  if (box.classList.contains('visible')) {
    box.classList.remove('visible');
  } else {
    box.classList.add('visible');
  }
});


// 0) TOGLI IL SERVICEWORKER della app precedente!
// 1) Crea un serviceWorker
// 2) Trova la  AppShell (Gli assets necessari per rendere al tua app offline)
// 3) Precache the AppShell
// 4) Aggiungi il codice su fetch per cachare in maniera dinamica
// 5) Precache other assets required to make the root index.html file work
// 6) Cambia qualche stile su main.css e aggiungi il versioning sul service Worker!
// 7) Inserisci il codice per pullire la cache

