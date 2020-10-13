
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('https://httpbin.org/puts');
    }, 3000);
  })
    .then(function(url) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({person: {name: 'Max', age: 28}})
      });
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      output.textContent = data.json.person.name;
    })
    .catch(function(err) {
      console.log(err);
    });
});