var fname = prompt("What is your first name?")
var lname= prompt("Last name?")
var age = prompt("What is your age?")
var height =prompt("Your height in cms?:")
var pet =prompt("What is the name of your pet?")



if(fname[0]===lname[0] && age>=20 && age<=30 && height>=170 &&pet[pet.length-1]==="y" ){
    console.log("Verified. Welcome Comrade!");
    alert("There's a secret messege for you.Open the console to see")
}
else{
    console.log("Theres is nothing to see here")
}