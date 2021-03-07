let topsSongs = [
  "First Time Ever I Saw Your Face",
  "God Only Knows",
  "A Day in the Life",
  "Life on Mars",
];

// Add and delete from the end
topsSongs.push("Fortunate Son");
console.log(topsSongs.pop());

// Add and remove from the beginning
topsSongs.unshift("Wish You were here");
console.log(topsSongs.shift());

// you can still add/remove/modify the array but you can't assign
// myEggs to a new array
const myEggs = ["brown", "brown"];

// Other methods
//  concat    creates a new array with multiple arrays
//    let allFoods = fruits.concat(veggies, meats);
// includes   checks if value is in the array
//    console.log(fruits.includes('corn'));
// indexOf    like string indexOf (-1 if not found)
// reverse    reverses in place
// join       joins all the elements in the array into a string
// slice      creates a new array
// splice     removes or replaces elements in an array (see below)
// sort       converts values to string and then sorts

// SPLICE DEMO
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, "octopus");
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, "orca", "grizzly");
// ["shark", "octopus", "salmon", "orca", "grizzly"]
