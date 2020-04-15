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

// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// const karmanDog = {
//     name: "Karman",
//     species: "Golden Retriever",
//     nicknames: ["karmy", "karmy kar"],
//     age: 8,
//     knockBark: function(){
//         window.alert("BOOWOOWOO!")
//     },
//     regularBark: function(){
//         window.alert("uh boof boof")
//     },
//     treatBark: function(){
//         window.alert("whisper boof")
//     },
// }



// Practice: Pet Sounds
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three keys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()

// karmanDog.knockBark()
// karmanDog.regularBark()
// karmanDog.treatBark()

// Practice: My Pet "This"
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

const karmanDog = {
    name: "Karman",
    species: "Golden Retriever",
    nicknames: ["karmy", "karmy kar"],
    age: 8,
    knockBark: function(){
        window.alert("BOOWOOWOO!")
    },
    regularBark: function(){
        window.alert("uh boof boof")
    },
    treatBark: function(){
        window.alert("whisper boof")
    },
    favoriteToys: [],
    play: function(toy){
        if(toy === "rope"){
        karmanDog.favoriteToys.push(toy)
    }else if(toy === "bone"){
        karmanDog.favoriteToys.push(toy)
    }
}
}

karmanDog.play("rope")
karmanDog.play("bone")
karmanDog.play("stuffy")
console.log("these are karman's toys", karmanDog.favoriteToys)

// Practice: Fast Food Ordering
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function () {
    }
}

const chickenComboMeal = {

}

// Place an order
restaurant.placeOrder()

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()

