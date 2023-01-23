// ES5 Version

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// Write an ES2015 Version

let firstName = "Joe";
let lastName = "Man";

const createInstructor = {
    firstName,
    lastName
};

// ES5 Version

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// Write an ES2015 version

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};

// ES5 Version

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

// Write an ES2015 Version

let instructor2 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }

// Write a function which generates an animal object. 


function createAnimal(species,verb,noise) {
    return {
    species,
    [verb]() {
        return (noise);
    }
}};

const test = createAnimal("dog","burp","waaat");