const _ = require("underscore");

// Tom array som representerar stacken
let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
  stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
  if (stack.length === 0) {
    return undefined; // Returnerar undefined
  }
  return stack.pop();
};
// Funktion för att returnera det översta elementet i stacken utan att ta bort
exports.peek = function () {
  return _.last(stack);
};
// Funktion för att rensa stacken och göra den tom
exports.clear = function () {
  stack = []; // Reset the stack to an empty array
};

// Funktion för att kontrollera om stacken är tom
exports.isEmpty = function () {
  return stack.length === 0;
};
