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