const prompt=require("prompt-sync")({sigint:true}); 

let name = prompt("What's your name? ");
console.log("Welcome, "+name+"!");
//npm install prompt-sync to update prompt()


task = {};

// adds a task to the list
const taskAdd = (response) => {
    task[response] = false
    console.log(Object.keys(task))
}

// marking task as complete (toggle true/false)
const taskComplete = (response) => {
    task[response] = true
    console.log("'"+ response + "' has been completed.\n\n")
    delete task[response]
}

// removing the task
const taskRemove = (response) => {
    delete task[response]
}

// editing a task
const taskEdit = (response) => {
    let edit = "";
    delete task[response];
    edit = prompt("And what would you like to change it to? \n");
    task[edit] = false;
    console.log(`You changed ${response} to ${edit}\n\n`)
    
}

// view the task
const viewList = () => {
    console.log(Object.keys(task));
    return Object.keys(task);
}

const promptOptions = () => {
     switch (response = prompt("Please enter a number. ")) {
        case '1':
            taskAdd(response = prompt("Please enter the task you want to add: "));
            console.log("You added: "+response"\n\n");
            break;

        case '2':
            taskEdit(response = prompt("Please enter the task you want to edit: "));
            break;

        case '3':
            console.log(Object.keys(task))
            taskComplete(response = prompt("Please enter the task you want to complete: "));
            console.log("Task Complete! "+response+"\n\n");
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
    let count = 0;
    while (runProgram === true){
        console.log(`Your ToDo List\n ${Object.keys(task)}\n\n______________________\n What would you like to do?\n (1) Add Task\n (2) Edit Task\n (3) Complete Task\n (4) Remove Task\n (5) Close Program`)
        promptOptions();
        if (count === 5){
            runProgram === false;
        }
        count++;
        // console.log(task.keys)
        // if (count === 0){
        //     count = 1;
        //     console.log(`${name}'s ToDo List\n\n No Tasks Yet!\n\n______________________\n What would you like to do?\n (1) Add Task\n (2) Edit Task\n (3) Complete Task\n (4) Remove Task\n (5) Close Program`)
        //     promptOptions()
        //     console.log("boop")
        // }
        // else if (count === 1){
        //     console.log(`Your ToDo List\n ${task.keys}\n\n______________________\n What would you like to do?\n (1) Add Task\n (2) Edit Task\n (3) Complete Task\n (4) Remove Task\n (5) Close Program`)
        //     promptOptions()
        //     console.log(task.keys + "task")
        //     continue;
        // }
        // console.log("check this point")
    }
    return "Done."
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
