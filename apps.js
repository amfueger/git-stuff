console.log("loop")


const arr = [
  { 
    name: "charlotte",
    role: "student"
  },
  { 
    name: "chris l",
    role: "student"
  },
  { 
    name: "chris r",
    role: "student"
  },
  { 
    name: "greg",
    role: "student"
  },
  { 
    name: "andy",
    role: "student"
  },
  { 
    name: "john",
    role: "student"
  },
  { 
    name: "ashley",
    role: "student"
  },
  { 
    name: "josh",
    role: "student"
  },
  { 
    name: "filip",
    role: "student"
  },
  { 
    name: "reuben",
    role: "teacher"
  }
]

console.log(arr[three()], "<--greg")

const whichStudent = 6;

console.log(arr[three() + three()], "<-- ashley")
console.log(arr[whichStudent], "<-- ashley")


for(let i = 0; i < arr.length; i++) {

  // arr[i] is whatever member of the class i happens to be
  console.log(arr[i])

}


function three() {
  return 3
}
console.log(three())

//Beginning homework
// Problem one

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// problem two

for (let i = 0; i <= 200; i+=2) {
  console.log(i);
}

// problem three
const everyCatEver = "Love me, pet me! HSSSSSS!"
const catArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

// log 20 times string 1 in the array
for (let i = 0; i <= 20; i++) {
    console.log(everyCatEver)
    if(i % 2 ===0) {
      //For every even number in the loop, log a random string from array except 0 
    // The below is the math being assigned to a variable. The floor is for making the random number an integer instead of decimals. It's always rounding it down. the random math part x the length of the array limits the numbers to 1-3, technically 0-2.9. Don't want true three, because otherwise it would try to access something in the array that doesn't exist
      let randomIndex = Math.floor(Math.random() * catArray.length)
      //we then take the variable, which has the math, and ask the array to give us back what the number (whatever the variable's math generated) and give that string back to us
      console.log(catArray[randomIndex])

    }
      
}






