function hello(){
    console.log("Hello World");
}

function greet(name){
    console.log("Hello "+name);
}

hello();  // calling the function
greet("Talha");  // calling the function with a parameter


function addNum(num1,num2){
    console.log(num1+num2)
}
addNum(2,5);
addNum("2",5)  // output-- 25
addNum("Hello"," World")    // Hello World


function timesFive(num){
    var result = num*5;   // Local Function
    return result;
}

var globalFunc="Global";
function checkGlobal(something){
    something = globalFunc;

}

