console.log("JavaScript");
console.log("Bugil Academy".toUpperCase());
console.log("Wonho Lim");
console.log("Woohoo! I love to code! #advcs");
console.log("20.49");
console.log("   Remove whitespace   ".trim());
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
var favoriteFood = "pizza"
console.log(favoriteFood);
var numOfSlices = 8;
console.log(numOfSlices);
let changeMe = true;
changeMe = false;
console.log(changeMe);
const entree = 'Enchiladas'
console.log(entree);
let myName = "Wonho Lim"
let myCity = "Yongin"
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
let newVariable = "I love Adv CS!"
console.log(typeof newVariable);
newVariable  = 1;
console.log(typeof newVariable)
let tool = "";
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword`)
tool = 'marker'
writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword`)

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'?console.log('I love that!') : console.log("I don't love that!");

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal');
  break;
  case 'second place' :
    console.log('You get the silver medal');
    break;
  case 'third place' :
    console.log('You get the bronze medal');
    break;
  default:
    console.log('No medal awarded');
    break;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function getReminder(){
  console.log('Water the plants')
}
function greetInSpanish(){
  console.log('Buenas Tardes')
}
function sayThanks(name = "Yunsu"){
  console.log('Thank you for your purchase '+name+'! We appreciate your business.')
}
sayThanks('Giung');
sayThanks('Hyungkyu');
sayThanks();
const plantNeedwater = function(day){
  if(day === 'Wednesday'){
    return true;
  }
  else{
    return false
  }
}
console.log(plantNeedwater('Wednesday'))
console.log(plantNeedwater('Friday'))
const plantNeed = (day) => {
  if(day === 'Tuesday'){
    return true;
  }
  else{
    return false
  }
}
console.log(plantNeed('Wednesday'))
console.log(plantNeed('Tuesday'))
const plant = (day) => day === 'Tuesday'? true : false;
console.log(plant('Wednesday'))
console.log(plant('Tuesday'))

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
const returnvalue = checkThatTwoPlusTwoEqualsFourAMillionTimes();
is2p2();
console.log(is2p2.name);


const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
console.log(time2p2);

const checkConsistentOutput = (get, val) => {
  let v1 = get(val);
  let v2 = get(val);
  if(v1 === v2){
    return v1;
  }
  else{
    return 'This function returned inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 5));
