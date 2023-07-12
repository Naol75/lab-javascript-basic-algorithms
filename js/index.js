// Iteration 1: Names and Input

let hacker1 = "Pedro" 
console.log( "The driver's name is " + hacker1 )

let hacker2 = "Jorge" 
console.log( "The driver's name is " + hacker2 )

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}

else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + "characters.")
}

else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}


// Iteration 3: Loops


let hacker1container = ""
let hacker1containerspaced = ""

for (let i = 0; i < hacker1.length; i++) {
    hacker1container += hacker1[i].toUpperCase() + " "
    // let hacker1spaced += hacker1upperCase
    
}

console.log(hacker1container.trim()) 


let reversed = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i]
}

console.log(reversed)

if ("Pedro" < "Jorge") {
    console.log("The driver's name goes first.")
}

else if ("Jorge" < "Pedro") {
    console.log("Yo, the navigator goes first definitely.")
}

else {
    console.log("What?! You both have the same name?")
}