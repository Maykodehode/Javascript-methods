// =========================================================================================
// ===================================== MAP METHODS =======================================
// =========================================================================================

// Complete the .map method to return 1 random character from each element in uppercase.
const fruits = [
    "Banana",
    "Apple",
    "Pear",
    "Mango",
    "Melon",
    "Pineapple",
    "Grapes",
    "Peach",
  ];
  
  // EKSEMPEL 1
  // const mappedFruitsTwo = fruits.map((e) => {
  //   let = randomLetter = Math.floor(Math.random() * e.length)
  //   return e[randomLetter].toUpperCase()
  // });
    // console.log(mappedFruitsTwo)
  
  // This should log something like this:
  
  // (8) ['A', 'P', 'E', 'M', 'E', 'E', 'R', 'H']

// ==================================================================================================

const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
    },
  ];
   
  // Complete the .map method on the people array to return the following sentence for each element:
  // "Thomas is a 23 year old man, and he likes pool among other things"
  // For females, it should read: "..year old woman, and she likes.."
  // the hobby in the sentence should be a randomly chosen one from the hobby array.
  // HINT: Use Template Literals (Google it if unsure)
   
  // const mappedPeople = people.map((e) => {
  //   return `${e.name} is a ${e.age} year old ${e.male ? "man, and he" : "woman, and she"} likes ${e.hobbies[Math.floor(Math.random() * e.hobbies.length)]} among other things.`
  // });

  // console.log(mappedPeople);
  
  // This should log something like this:
   
  // (5)[
  //   ("Thomas is a 23 year old man, and he likes football among other things",
  //   "Susan is a 26 year old woman, and she likes dancing among other things",
  //   "Monica is a 21 year old woman, and she likes skateboarding among other things",
  //   "Avery is a 28 year old man, and he likes coding among other things",
  //   "Phillip is a 24 year old man, and he likes mma among other things")
  // ];


//   ==================================================================================================
// If/else - ONLY, and need both.
const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23];
 
// const mappedArray = numArray.map((e) => {
//   return e > 50 ? e * 5 : e * 10
// });

// console.log(mappedArray);
 
//fullfør .map method funksjonen:
//hvis tallet er over 50, return tallet ganget med 5,
//hvis tallet er under 50, return tallet ganget med 10
 
// consol skal logge dette hvis du har gjort rett:
// Array(12)
// 0: 320
// 1: 110
// 2: 40
// 3: 335
// 4: 485
// 5: 305
// 6: 260
// 7: 120
// 8: 260
// 9: 80
// 10: 350
// 11: 230


// =========================================================================================
// ================================== FILTER METHODS =======================================
// =========================================================================================

const people1 = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes", "electronics"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma", "gym"],
  },
  {
    name: "Chris",
    male: true,
    age: 20,
    hobbies: ["cycling", "football", "pool", "tv"],
  },
  {
    name: "Claire",
    male: false,
    age: 27,
    hobbies: ["jogging", "travelling"],
  },
  {
    name: "Stephanie",
    male: false,
    age: 26,
    hobbies: ["writing", "piano", "books", "opera"],
  },
  {
    name: "Herman",
    male: true,
    age: 31,
    hobbies: ["gym", "weights"],
  },
  {
    name: "Trevor",
    male: true,
    age: 19,
    hobbies: ["parkour"],
  },
];
 
// Complete the .filter method to filter out only the objects that have an age from
// (and including) 26 to (and including) 28 and at least 3 hobbies
 
// const filteredPeople = people1.filter((e) => {
//   return e.age >= 26 && e.age <= 28 && e.hobbies.length >= 3;
// });
 
// console.log(filteredPeople);
 
//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
// 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 2: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
// length: 3
 
//////////////////////////////////////////////////////////////////////////////////
 
//Filter out the objects who are male and have a name of exactly 6 characters
 
// const filteredPeople2 = people1.filter((e) => {
//   return e.male && e.name.length === 6
// });
 
// console.log(filteredPeople2);
 
//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 2: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
// length: 3
 
//////////////////////////////////////////////////////////////////////////////////
 
//Filter out the objects that have "gym" included in their hobbies
 
// const filteredPeople3 = people1.filter((e) => {
//   return e.hobbies.includes("gym")
// });
 
// console.log(filteredPeople3);
 
//this should log:
// (2) [{…}, {…}]
// 0: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// length: 2



// =========================================================================================
// ====================================== METHODS ==========================================
// =========================================================================================

const names = [
  "Bradley",
  "Mae",
  "Oscar",
  "Isac",
  "Alexandra",
  "Margie",
  "Rob",
  "Clay",
  "Timothy",
  "Kennedy",
  "Rita",
  "Scott",
  "Sarah",
  "Felicia",
  "Gill",
  "Gavin",
  "Nellie",
  "Hope",
];

const hobbies = [
  "cycling",
  "football",
  "pool",
  "jogging",
  "travelling",
  "dancing",
  "movies",
  "coffee",
  "skateboarding",
  "guitar",
  "concerts",
  "Dancing",
  "movies",
  "coding",
  "games",
  "Books",
  "memes",
  "electronics",
  "dancing",
  "boxing",
  "wrestling",
  "mma",
  "gym",
  "cycling",
  "football",
  "pool",
  "tv",
  "writing",
  "piano",
  "books",
  "opera",
];

// Use whatever tools you deem necessary to accomplish the following:

// Generate an object for each name in the names array formatted as follows:
// {
//     name: (the name from the name array),
//     age: (generate a random age from 18-50),
//     hobbies: (randomly generate an array of 3 hobbies from the hobbies array. PS: make
//               sure the hobbies are 3 unique ones)
// }

// example:

// {
//     name: "Scott"
//     age: 31
//     hobbies: ["books", "electronics", "guitar"]
// }

// Place these objects into an array.

// PS: The hobbies array has to be cleaned up! Write code to remove duplicates before using it.
// Beware the capitalized duplicates as well.


// ======= HINTS =======

// people[0].cool = true
// Array med objekt inni - objekt blir et element i arrayet

// let cleanedHobbiesSet = new Set();
// hobbies.forEach((e) => {
//   cleanedHobbiesSet.add(e.toLowerCase())
// });
// let cleanedHobbiesArray = [...cleanedHobbiesSet]; 
// "Spread-syntax": Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.

// let personObjectArray = [];
// names.forEach((name) => {
//   let personObject = {}
//   personObject.name = name
//   personObject.age = Math.floor(Math.random() * 32 + 18)
//   personObject.hobbies = []
//   while (personObject.hobbies.length < 3) {
//     let randomHobby = cleanedHobbiesArray[Math.floor(Math.random() * cleanedHobbiesArray.length)]
//     if (!personObject.hobbies.includes(randomHobby)) {
//       personObject.hobbies.push(randomHobby)
//     }
//   }
//   personObjectArray.push(personObject)
// });
// console.log(personObjectArray);




// =========================================================================================
// ================================= SORT METHODS ==========================================
// =========================================================================================

const people3 = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes", "electronics"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma", "gym"],
  },
  {
    name: "Chris",
    male: true,
    age: 20,
    hobbies: ["cycling", "football", "pool", "tv"],
  },
  {
    name: "Claire",
    male: false,
    age: 27,
    hobbies: ["jogging", "travelling"],
  },
  {
    name: "Stephanie",
    male: false,
    age: 26,
    hobbies: ["writing", "piano", "books", "opera"],
  },
  {
    name: "Herman",
    male: true,
    age: 31,
    hobbies: ["gym", "weights"],
  },
  {
    name: "Trevor",
    male: true,
    age: 19,
    hobbies: ["parkour"],
  },
];

// Complete the .sort() to sort the people object array by age, from highest to lowest age:

// let sortedPeople1 = people3.sort(function(a, b) {
//   if (a.age < b.age) {return 1;}
//   if (a.age > b.age) {return -1;}
// });

// OR SHORTER VERSION //

// let sortedPeople1 = people3.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(sortedPeople1);

// the console log should read:
// 0: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// ...
// ...
// 8: {name: 'Chris', male: true, age: 20, hobbies: Array(4)}
// 9: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}

////////////////////////////////////////////////////////////////

// Complete the .sort() to sort the people object array by name length, from shortest to longest:

// let sortedPeople2 = people3.sort(function(a, b) {
//   if (a.name.length < b.name.length) {return -1;}
//   if (a.name.length > b.name.length) {return 1}
// });

// OR SHORTER VERSION //

// let sortedPeople2 = people3.sort((a, b) => {
//   return a.name.length - b.name.length;
// });
// console.log(sortedPeople2);

// the console log should read:
// 0: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 1: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
// ...
// ...
// 8: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 9: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}

////////////////////////////////////////////////////////////////

// Complete the .sort() to sort the people object array by amount of hobbies from fewest to most, and
// make ties sorted by name, alphabetically from a-z (this can be accomplished with just 1 sort method)

// let sortedPeople3 = people3.sort((a, b) => {
//   if (a.hobbies.length > b.hobbies.length) return 1;
//   if (a.hobbies.length < b.hobbies.length) return -1;
//   if (a.name > b.name) return 1;
//   if (a.name < b.name) return -1;
// });
// console.log(sortedPeople3);


// this should console log the following:

// 0: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
// 1: {name: 'Claire', male: false, age: 27, hobbies: Array(2)}
// 2: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 3: {name: 'Monica', male: false, age: 21, hobbies: Array(3)}
// 4: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
// 5: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 6: {name: 'Chris', male: true, age: 20, hobbies: Array(4)}
// 7: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 8: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
// 9: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}



// =========================================================================================
// ================================= SWAP METHODS ==========================================
// =========================================================================================

// Complete the function below to accomplish the following:

// Return the string received in the first parameter with the following alterations:
// Any letter in the string matching charA (the second parameter in the function) will be replaced with
// charB (the third parameter) and VICE VERSA - meaning letters matching charA will be replaced with charB,
// and letters matching charB will be replaced with charA. See the expected console log comments below.
  function doubleSwap(string, charA, charB) {
      return string
      .split("")
      .map((e) => {
      if (e === charA) return charB;
      else if (e === charB) return charA;
      else return e;
      })
      .join("");
  }

  // Or in a single line //

    // const doubleSwap = (string, charA, charB) => [...string].map((e) => (e === charA ? charB : e === charB ? charA : e)).join("");

  // console.log(doubleSwap("this is a string", "i", "s"));
  // console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
  // console.log(doubleSwap("what is the point of this?", "o", "t"));
  // console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!"));
  // console.log(doubleSwap("let's do one last test", "l", "e"));

//  this should log the following:

//  thsi si a itrsng
//  maybe another approach is necessary
//  whao is ohe ptino tf ohis?
//  C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg
//  elt's do onl east tlst