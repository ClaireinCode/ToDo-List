
task = {};

// adds a task to the list
const taskAdd = (userInput) => {
    task[userInput] = false
    return task[userInput]
}

// marking task as complete (toggle true/false)
const taskComplete = (userInput) => {
    task[userInput] = true
    return task[userInput]
}

// removing the task
const taskRemove = (userInput) => {
    delete task[userInput]
}

// view the task
const viewList = () => {
    return Object.keys(task)
}



//prompt for userInput
const toDoListShell = () => {
    let response = "";
    while (runProgram === true){
        console.log(`Your ToDo List\n ${task.keys}\n\n______________________\n What would you like to do?\n (1) Add Task\n (2) Edit Task\n (3) Complete Task\n (4) Remove Task\n (5) Close Program`)
        switch (response = prompt("Please enter a number.")) {
            case 1:
                taskAdd(response = prompt("Please enter the task you want to add."));
                console.log("You added: "+response);
                break;
            case 2:
                break;
            case 3:
                console.log(task.keys)
                taskComplete(response = prompt("Please enter the task you want to complete"));
                console.log("Task Complete! "+response);
                break;
            case 4:
                break;
            case 5:
                runProgram = false;
                console.log("Goodbye!")
                break;
            default:
                console.log("Oops! Invalid Input")
                break;
        }
    }
//     //let selection = prompt("Enter 1: Add a task \n Enter 2: Modify \n Enter 3: Delete\n Enter 4: View List")
//     const readline = require("readline");

//     // create interface for input and output
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
    
//     // create empty user input
//     let userInput = "";
    
//     // question user to enter name
//     rl.question("What is your name\n", function (string) {
//       userInput = string;
    
//       console.log("Your name is " + userInput);
    
//       // close input stream
//       rl.close();

//     });
    // if (selection === '1'){
    //    let taskName = prompt("Enter a task");
    //    taskAdd(taskName)
    // }
    
}
console.log(toDoListShell())
//console.log(taskAdd("first task"))

module.exports = {taskAdd: taskAdd, taskComplete: taskComplete, taskRemove: taskRemove, viewList: viewList}
