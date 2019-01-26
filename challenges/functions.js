// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
        function consume( a, b, cb){
          return cb(a , b)
        }
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two number
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
// =====1=====
function add( ){
  var total =  Array.prototype.slice.call(arguments).reduce(function(a, b) { 
  return a + b; 
  });
  return total;
}
console.log(add(2,2)); 
// =======2=====

function consume(){
  var total =  Array.prototype.reduce.call(arguments, function(a, b) { 
  return a * b; 
  });
  return total;
}      
       console.log(multiply(10,16)); 

// ===== lastname ad lastname =========

        const people = [
          { first_name: 'Mary', last_name: 'Poppins', age: 30 },
          { first_name: 'Tale', last_name: 'Anto', age: 20 }
        ];

        people.forEach(forEachCallback);
  
            function forEachCallback(person) {
              console.log(`${person.first_name} ${person.last_name} nice to meet you`);
      
            }

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*
The nested function can  inherit the arguments and variables of its containing function because it contains the scope of the outer function.

    The inner function can be accessed only from statements in the outer function.

    The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

*/
// const external = "I'm outside the function";
        var person = function(name) {   // The outer function defines a variable called "name"
            var getName = function() {
              return name; // The inner function has access to the "name" variable of the outer 
                                      
            }
            return getName;// Return the inner function, thereby exposing it to outer scopes
          }
          myName = person('Talent');
            
              console.log(myName());

      function myFunction() {

        const internal = "Hello! I'm inside myFunction!";

        function nestedFunction() {
          console.log(internal);
        };
        nestedFunction();
      }
       myFunction();