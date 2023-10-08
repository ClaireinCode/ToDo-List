const prompt=require("prompt-sync")({sigint:true}); 

let name = prompt("What's your name? ");
console.log("Welcome, "+name+"!");
//npm install prompt-sync to update prompt()


task = {};

// adds a task to the list
const taskAdd = (response) => {
    task[taskList][taskName] = [userInput]
    task[taskList][taskName][taskStatus] = false
    return task[taskList][taskName][taskStatus]
}

// marking task as complete (toggle true/false)
const taskComplete = (response) => {
    task[taskList][userInput][taskStatus] = true
    console.log("'"+ userInput + "' has been completed.\n\n")
    return task[taskList][taskName][taskStatus]
}

// removing the task
const taskRemove = (response) => {
    delete task[taskList][userInput]
}

// editing a task
const taskEdit = (response) => {
    return "done"
}

// view the task
const viewList = () => {
    return Object.keys(task)
}

const promptOptions = () => {
     switch (response = prompt("Please enter a number. ")) {
        case '1':
            taskAdd(response = prompt("Please enter the task you want to add. "));
            console.log("You added: "+response);
            break;

        case '2':
            taskEdit();
            break;

        case '3':
            console.log(task.keys)
            taskComplete(response = prompt("Please enter the task you want to complete: "));
            console.log("Task Complete! "+response+" \n\n\n\n");
            break;

        case '4':
            taskRemove(response = prompt("What task would you like to remove? "))
            break;
        
        case '5':
            runProgram = false;
            console.log("Goodbye!\n\n")
            break;

        default:
            console.log("Oops! Invalid Input\n\n\n")
            break;
        }
}


//prompt for userInput
const toDoListShell = () => {
    let response = "";
    let runProgram = true;
    while (runProgram === true){
        if (task.keys === undefined){
            console.log(`${name}'s ToDo List\n\n No Tasks Yet!\n\n______________________\n What would you like to do?\n (1) Add Task\n (2) Edit Task\n (3) Complete Task\n (4) Remove Task\n (5) Close Program`)
            promptOptions()
        }
        else if (task.keys !== undefined){
            console.log(`Your ToDo List\n ${task.keys.values}\n\n______________________\n What would you like to do?\n (1) Add Task\n (2) Edit Task\n (3) Complete Task\n (4) Remove Task\n (5) Close Program`)
            promptOptions()
        }
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
    
//}
//console.log(toDoListShell())
//console.log(taskAdd("first task"))
toDoListShell()
module.exports = {taskAdd: taskAdd, taskComplete: taskComplete, taskRemove: taskRemove, viewList: viewList}
