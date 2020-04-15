//Object Methods

//We use objects to store info while methods do things
const me = {
    firstName: "Lindsey",
    lastName: "Crittendon",
    hobbies: ["sleep", "eating", "griping", "sometimes learning stuff"],
    lovesKarman: true,
    lovesAlso: true,
    timeToWork: function(){
        console.log("Sit down and focus")
    }
}

me.timeToWork() //shows "sit down and focus" in console log

//rufus lives in a shelter

const rufusTheDog = {
    age: 4, //property
    species: "Dalmatian", //property
    bark: function(){   // method
        window.alert("WOOF!")
    },
    contentsOfStomach: [],
    eat: function(item){
// push eaten items into contentsOfStomach array
// rufusTheDog.contentsOfStomach.push(item)
this.contentsOfStomach.push(item)
//this is saying the same thing as the function above, but it will stay the same should the name of the object change.
    },
    puke: function(){
rufusTheDog.contentsOfStomach.length = 0
    },
}

// rufusTheDog.bark()
console.log("this is the contents of rufus's stomach", rufusTheDog.contentsOfStomach)

rufusTheDog.eat("snacks")
rufusTheDog.eat("a stick")
rufusTheDog.puke()