const { v4: uuidv4 } = require("uuid");

class Task {
  id = "";
  description = "";
  completeIn = null;

  constructor(desctiption) {
    this.id = uuidv4();
    this.description = desctiption;
    this.completeIn = null;
  }
}

module.exports = Task;
