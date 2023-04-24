require("colors");
const {
  inquirerMenu,
  inquirerPause,
  reedInput,
} = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

const main = async () => {
  let option = "";
  const tasks = new Tasks();

  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await reedInput("Description:");
        tasks.createTask(description);
        break;

      case "2":
        console.log(tasks.listArr());
        break;
    }

    await inquirerPause();
  } while (option !== "0");
};

main();
