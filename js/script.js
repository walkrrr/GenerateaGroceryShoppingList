var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogurt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

//Logged out the length of the groceries variable to see how many elements are in the array.
console.log(groceries.length);

//Created a Function to Remove Duplicates
var deleteDuplicates = function (list) {
  var cleanList = [];

  //Used for...of to loop through the groceries array, referring to each element as item.
  for (var item of groceries) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

//Checked the Length of the New Array
var newGroceries = deleteDuplicates(groceries);

console.log(newGroceries.length);

//Created a Numbered List of the Grocery Items
newGroceries.forEach(function (item, index) {
  console.log(`#${index + 1} - ${item}`);
});
