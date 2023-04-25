const Task = require("./task");

class Tasks {
  _list = {};

  get listArr() {
    const tasksList = [];

    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      tasksList.push(task);
    });

    return tasksList;
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(description = "") {
    const task = new Task(description);

    this._list[task.id] = task;
  }

  tasksList() {
    console.log();

    this.listArr.forEach((task, index) => {
      const taskNumber = `${index + 1}`.green;
      const { description, completeIn } = task;

      const state = completeIn ? "Complete".green : "Pending".red;

      console.log(`${taskNumber} ${description} :: ${state}`);
    });
  }

  filterTasksList(complete = true) {
    console.log();

    let counter = 0;

    this.listArr.forEach((task) => {
      const { description, completeIn } = task;
      const state = completeIn ? "Complete".green : "Pending".red;

      if (complete) {
        if (completeIn) {
          counter += 1;
          console.log(
            `${(counter + ".").green} ${description} :: ${completeIn.green}`
          );
        }
      } else {
        if (!completeIn) {
          counter += 1;
          console.log(`${(counter + ".").green} ${description} :: ${state}`);
        }
      }
    });
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  toggleToComplete(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];

      if (!task.completeIn) {
        task.completeIn = new Date().toISOString();
      }
    });

    this.listArr.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completeIn = null;
      }
    });
  }
}

module.exports = Tasks;
