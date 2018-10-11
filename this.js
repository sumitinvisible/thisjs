var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        ​// Notice we use "this" just as we used "he" in the example sentence earlier?:
        console.log(this.firstName + " " + this.lastName);
    ​// We could have also written this:​
        console.log(person.firstName + " " + person.lastName);
    }
}


// If we use person.firstName and person.lastName, as in the last example, our code becomes ambiguous. Consider that there could be another global variable (that we might or might not be aware of) with the name “person.” Then, references to person.firstName could attempt to access the firstName property from the person global variable, and this could lead to difficult-to-debug errors. So we use the “this” keyword not only for aesthetics (i.e., as a referent), but also for precision; its use actually makes our code more unambiguous, just as the pronoun “he” made our sentence more clear. It tells us that we are referring to the specific John at the beginning of the sentence





/* First, know that all functions in JavaScript have properties, just as objects have properties. And when a function executes, it gets the this property—a variable with the value of the object that invokes the function where this is used.

The this reference ALWAYS refers to (and holds the value of) an object—a singular object—and it is usually used inside a function or a method, although it can be used outside a function in the global scope. Note that when we use strict mode, this holds the value of undefined in global functions and in anonymous functions that are not bound to any object. */


var person = {
  firstName   :"Penelope",
  lastName    :"Barrymore",
  // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
  // "this" will have the value of the person object because the person object will invoke showFullName ()
  showFullName:function () {
  console.log (this.firstName + " " + this.lastName);
  }

  }

  person.showFullName (); // Penelope Barrymore





     // Use of this in global scope
  /* n the global scope, when the code is executing in the browser, all global variables and functions are defined on the window object. Therefore, when we use this in a global function, it refers to (and has the value of) the global window object (not in strict mode though, as noted earlier) that is the main container of the entire JavaScript application or web page.
 */


var firstName = "Peter",
lastName = "Ally";

function showFullName () {
// "this" inside this function will have the value of the window object
// because the showFullName () function is defined in the global scope, just like the firstName and lastName
console.log (this.firstName + " " + this.lastName);
}

var person = {
firstName   :"Penelope",
lastName    :"Barrymore",
showFullName:function () {
// "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.
console.log (this.firstName + " " + this.lastName);
}
}

showFullName (); // Peter Ally

// window is the object that all global variables and functions are defined on, hence:
window.showFullName (); // Peter Ally

// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:
person.showFullName (); // Penelope Barrymore

// -------------------------------------------------------------------------------------------------------

var person = {
  firstName   :"Penelope",
  lastName    :"Barrymore",
  showFullName:function () {
// The "context"
console.log (this.firstName + " " + this.lastName);
}
}

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.showFullName (); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
firstName   :"Rohit",
lastName    :"Khan"
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.showFullName.apply (anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method