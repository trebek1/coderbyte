// baz is not defined 

// (function() {
//   var foo = 1;
//   console.log(foo + " " + bar + " " + baz);
//   var bar = 2;
// })();

// hoisting of bar and baz

(function() {
  var foo = 1;
  console.log(foo + " " + bar + " " + baz);
  var bar = 2;
  var baz = 3;
})();

// functional declarations are hoisted 

baz();

function baz() {
  console.log("Hello!");
}

// variable declariations are not hoisted, will not work

// bar();

// var bar = function() {
//   console.log("Hello!");
// };