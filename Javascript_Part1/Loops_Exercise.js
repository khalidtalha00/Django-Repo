/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop


// For Loop


// SOLUTION
// using for loop

for(var i=1;i<=5;i++){
    console.log("Hello")
}

// using while loop
var a =0;
while(a<5){
    console.log("Hello");
    a++;
}





/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop

console.log("Using while loop")
var b =1;
while(b<=25){
    if(b%2!==0){
        console.log(b);
    }
    b++;
}


// METHOD TWO
// For Loop
console.log("Using for loop:")
for(var num=1;num<=25;num++){
    if(num%2==0){
        console.log(num)
    }
}
