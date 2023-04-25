const inquirer = require("inquirer");
require("colors");

const menuOptions = [
  {
    type: "list",
    name: "option",
    message: "What you wish to do?",
    choices: [
      {
        value: "1",
        name: `${"1".green} Create task`,
      },
      {
        value: "2",
        name: `${"2".green} List tasks`,
      },
      {
        value: "3",
        name: `${"3".green} List complited tasks`,
      },
      {
        value: "4",
        name: `${"4".green} List pending tasks`,
      },
      {
        value: "5",
        name: `${"5".green} Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6".green} Delete task`,
      },
      {
        value: "0",
        name: `${"0".green} Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".green);
  console.log("    Сhoose your option".yellow);
  console.log("==========================\n".green);

  const { option } = await inquirer.prompt(menuOptions);

  return option;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"enter".green} to continue`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

const reedInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please enter a value";
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

const tasksListToDelete = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const taskNumber = `${i + 1}`.green;

    return {
      value: task.id,
      name: `${taskNumber} ${task.description}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + " Cancel",
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  reedInput,
  tasksListToDelete,
  confirm,
};
