var countries = ["USA","China","India","Russia","Germany"]
console.log(countries);  // printing the arrray

console.log(countries.length)  // length of array

// accessing array by index number
console.log(countries[0])
console.log(countries[1])
console.log(countries[2])

// reassigning values to array

countries[1]="France";
console.log(countries)  // france replaces china
// Therefore Arrays are mutable. 


// But strings are immutable
var country1="USA"
country1[2]="B"
console.log(country1)  // It will still give USA and not USB as strings cannot be changed


// Array methods

var items = ["One","Two","Three"];
items.pop()  // removes the last index "Three"
console.log(items)

items.push("Last_Item") // add an items to the last index
console.log(items)

// access the last index

console.log(items[items.length-1])

// Multidimensional arrays

var matrix = [["1","2","2"],["4","5","6"],["7","8","9"]]  // Array within an array


console.log(matrix)  // print the array
console.log(matrix.length)




// Array iteration

console.log("Arrays iteration")

var myarr=[1,3,4,5,6,7]

// using for loop
for(var i=0;i<myarr.length;i++){
    console.log(myarr[i]);
}

// another way
console.log("Another way")
for(a of myarr){  //  a is a temporary variable
    console.log(a)
}

//myarr.forEach(alert)  // we can use it to display a custom alert a certain number of times



