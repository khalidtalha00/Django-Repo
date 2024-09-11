// Javascript objects are key object pairs

// its is like dictionary in python
// key name is not kept under double quotes.
// however while acessing them we have to use double quotes


var carInfo = {name:"Toyota",model:"Camry",year:1991}
// carInfo
console.log(carInfo)


// acessing keys and values

console.log(carInfo["name"])
console.log(carInfo["model"])
console.log(carInfo["year"])


// changing values
carInfo["year"]=2000
console.log(carInfo)


console.dir(carInfo)

// looping through objects in javascript

for(key in carInfo){
    console.log(key)  // first grab the key
    console.log(carInfo[key])  // then print the values using corresponding keys
}


var simple = {
    prop:"Hello",
    myMethod: function(){
        console.log("My method was called")
    }
}

console.log(simple)
console.log(simple.prop)
console.log(simple.myMethod)



var myObj={
    name:"Talha",

    greet: function(){
        console.log("Hello "+this.name)
    }
}

console.log(myObj)

myObj.greet()

console.log(myObj["name"])
console.log(myObj["greet"])  //will give the function