require("colors");
const {
  inquirerMenu,
  inquirerPause,
  reedInput,
} = require("./helpers/inquirer");
const { saveDB, reedDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

const main = async () => {
  let option = "";
  const tasks = new Tasks();

  const tasksDB = reedDB();

  if (tasksDB) {
    tasks.loadTasksFromArray(tasksDB);
  }

  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await reedInput("Description:");
        tasks.createTask(description);
        break;

      case "2":
        tasks.tasksList();
        break;
    }

    saveDB(tasks.listArr);

    await inquirerPause();
  } while (option !== "0");
};

main();
