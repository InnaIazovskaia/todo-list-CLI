require("colors");
const readline = require("readline");

const showMenu = () => {
  console.clear();
  console.log("==========================".green);
  console.log("    Сhoose your option".green);
  console.log("==========================\n".green);

  console.log(`${"1.".green} Create task`);
  console.log(`${"2.".green} List tasks`);
  console.log(`${"3.".green} List complited tasks`);
  console.log(`${"4.".green} List pending tasks`);
  console.log(`${"5.".green} Complete task(s)`);
  console.log(`${"6.".green} Delete task`);
  console.log(`${"0.".green} Exit \n`);

  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question("Select one option: ", () => {
    readLine.close();
  });
};

const pause = () => {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question(`\nPress ${`ENTER`.red} to continue\n`, () => {
    readLine.close();
  });
};

module.exports = {
  showMenu,
  pause,
};
