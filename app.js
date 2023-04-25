require("colors");
const {
  inquirerMenu,
  pausa,
  reedInput,
  tasksListToDelete,
  confirm,
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

      case "3":
        tasks.filterTasksList(true);
        break;

      case "4":
        tasks.filterTasksList(false);
        break;

      case "6":
        const id = await tasksListToDelete(tasks.listArr);

        if (id !== "0") {
          const ok = await confirm("Are you sure?");
          if (ok) {
            tasks.deleteTask(id);
            console.log("Task deleted");
          }
        }

        break;
    }

    saveDB(tasks.listArr);

    await pausa();
  } while (option !== "0");
};

main();
