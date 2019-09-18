/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This defaults to the window object if it is not given any context unless you use strict.
* 2. Implicit Binding - when the thing to the left of the "." invokes the function.
* 3. Explicit Binding - when you explicity tell JavaScript what you want "this" to refer to by using "call" "bind" or "apply".
* 4. New Binding - a way to store methods/functions outside of the constructor function through the use of a prototype as a way to save time for load speeds or memeory by only using the functions that are called.
*
* write out a code example of each explanation above
*/



// Principle 1

// code example for Window Binding
console.log(this);



// Principle 2

// code example for Implicit Binding
let person = {
    name: "Vincent",
    age: 23,
    location: "New Jersey",
    hello: function() {
        console.log(`My name is ${this.name} I live in ${this.location} and I am ${this.age} years old.`);
    }
};

person.hello()


// Principle 3

// code example for New Binding
function Vacation(favorite) {
    this.travel = favorite;
}
let myFavorite = new Vacation("HHI is my favorite place to go on vacation");
console.log(myFavorite.travel);



// Principle 4

// code example for Explicit Binding
function pet() {
    console.log(`${this.name} says ${this.sound}`);
}

let familyDog = {
    name: "Charlie",
    sound: "woof!"
}

pet.call(familyDog);