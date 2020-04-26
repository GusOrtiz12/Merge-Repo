var Person = function (name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.profession = function(){
    console.log(this.name + ' is a ' + this.job);
    }
    this.exercise = function() {
    console.log(this.name + ' running is fun! - said no one ever');
    }
    this.completeTask = function() {
    console.log(this.name + ' is busy ');
    }
    this.acceptTask = function() {
    console.log(this.name + ' is not busy');
    }   
}

var Programmer = function(language, busy){
    Person.call(name, job, age);
    this.language = 'javascript';
    this.busy = true;
    this.completeTask = function() {
        console.log(this.name + ' is busy.');
    }
    this.acceptTask = function () {
        console.log(this.name + ' is not busy.');
    }
    this.acceptTask = function(){
    }
};

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.consotructor = Programmer;

var john = new Person('John', ' is a front-end developer.', 26);
var mary = new Person('Mary', ' is a back-end developer.', 21);

john.exercise();
mary.exercise();
john.profession();
mary.profession();
john.completeTask();


//HARD CHALLENGE
function clientInfo() {
    var pii = {
        name: 'Jose Claudio Padín',
        ssn: '744-58-6924'
    }
    function displayName() {
        console.log(pii.name);
    }
    return displayName;
}

var clientData = clientInfo();
clientData();


//very hard week 4
function findCoins (coins, amount){
    var coins = [5, 10, 50]; 
    coins.sort((a, b) => b - a);
    var amount = 65;
    var fullCoins = 0; 
    for (var i = 0; i < coins.length; i++){
       var loopedFullCoins = Math.floor(amount/coins[i]) 
       fullCoins = fullCoins + loopedFullCoins 
       amount = amount - loopedFullCoins * coins[i]
    }
    if (amount === 0) { 
        return fullCoins;
    } else {
        return -1;
    }
  }
console.log(findCoins());