console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Amy',
  lastName: 'Smith',
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ['mashed potatoes', 'curry', 'starburst']
} // end object me
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
// TODO - create and log fullName variable
let fullName = me.firstName + ' ' + me.lastName;
console.log('My name:', fullName); 

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
// TODO - access favThreeFood property array and log index 0 & 2
console.log('The first favorite food listed:', me.favThreeFoods[0]);
console.log('The last favorite food listed:', me.favThreeFoods[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
// TODO - log initial shoeCount value; increment value and log updated shoeCount 
console.log('I have ' + me.shoeCount + ' pairs of shoes in my closet.');
me.shoeCount = me.shoeCount + 1;
console.log('I got new shoes and now have ' + me.shoeCount + ' pairs in my closet.');

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
// TODO - add favoriteColor property, set value and log updated object me
me.favoriteColor = 'green';
console.log('My favorite color:', me.favoriteColor);
console.log('A little more about me:', me);