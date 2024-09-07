// While Loops in  Javascript

var x =0;

while(x<5){
    console.log("x is currently:"+x);
    console.log("x is still less than 5.Increasing x by 1")
    x=x+1;
    
    if(x===3){
        console.log("x is equal to 3")
        break;
    }
}

// Even numbers using while loop

var a = 1;
console.log("Even Numbers between 1 to 10 are:")

while(a<=10){
    if(a%2==0){
        console.log(a)
    }
    a =a+1;
}