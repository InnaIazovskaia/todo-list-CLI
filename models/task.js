const { v4: uuidv4 } = require("uuid");

class Task {
  id = "";
  desctiption = "";
  completeIn = null;

  constructor(desctiption) {
    this.id = uuidv4();
    this.desctiption = desctiption;
    this.completeIn = null;
  }
}

module.exports = Task;
