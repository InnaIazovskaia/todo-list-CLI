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
}

module.exports = Tasks;
