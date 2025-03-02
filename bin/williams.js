#!/usr/bin/env node
const { Command } = require("commander");
const pkg = require("../package.json");
const inquirer = require("inquirer").default;
const colors = require("colors");
const { readTasks, writeTasks } = require("../utils/store");

const program = new Command();

program.version(pkg.version);

console.log("Welcome to Williams CLI".green);

// program
//   .command("add")
//   .description("Add a new task")
//   .action(() => {
//     const { task } = inquirer.prompt({
//       type: "input",
//       name: "task",
//       message: "Enter task",
//     });
//   });

program
  .command("add")
  .description("Add a new task")
  .action(async () => {
    const { task } = await inquirer.prompt([
      { type: "input", name: "task", message: "Enter task:" },
    ]);
    let tasks = readTasks();
    tasks.push(task);
    writeTasks(tasks);
    console.log(colors.green("Task added successfully!"));
  });

program
  .command("list")
  .description("List all tasks")
  .action(() => {
    const tasks = readTasks();
    if (tasks.length === 0) {
      console.log(colors.red("No tasks found"));
    } else {
      console.log(colors.green("Tasks:"));
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  });

program
  .command("delete <index>")
  .description("Delete a task")
  .action((index) => {
    let tasks = readTasks();
    if (tasks.length < 1 || index > tasks.length) {
      return console.log(colors.red("Invalid index"));
    }
    tasks.splice(index - 1, 1);
    writeTasks(tasks);
    console.log(colors.green("Task deleted successfully!"));
  });

program
  .command("clear")
  .description("Clear all tasks")
  .action(() => {
    writeTasks([]);
    console.log(colors.green("Tasks cleared successfully!"));
  });

program.parse(process.argv);
