// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addStudent(){
    var name=prompt("Enter Student Name")
    roster.push(name);
    console.log(roster)

}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

function removeStudent(){
    var name=prompt("Enter student name you want to remove:")

    const index = roster.indexOf(name);
    if (index !== -1) {
        roster.splice(index,1);
    }
    console.log(roster)

}



// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function displayStudent(){
    for(var i=0;i<roster.length;i++){
        console.log(roster[i])
    }

}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var ask =prompt("Do you want to use the web app? (y/n):")

if(ask==="y"){

    var choice;
    while(choice!=="quit"){

        choice = prompt("Select an operation: add, remove, display, quit")

        if (choice==="add"){
            addStudent();

        }
        if (choice==="remove"){
            removeStudent();

        }

        if (choice==="display"){
            displayStudent();

        }
    }
    if(choice==="quit"){
        console.log("Thank you for using the web app")
    }

}

if(ask==="n"){
    console.log("Thank you for using the web app")

}