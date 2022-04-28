let list = document.createElement('li');
list.id = "oaxaca";
list.innerHTML = 'Oaxaca, Mexico';
document.querySelector('#more-destinations').appendChild(list);
let a = document.querySelector('#oaxaca');
document.getElementById('more-destinations').removeChild(a);
