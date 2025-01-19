const db = require('../../data/dbConfig')

async function getTasks() {
    const tasks = await db("tasks as t")
      .join("projects as p", "t.project_id", "p.project_id")
      .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
      )

return tasks.map((task) => ({
    ...task,
    task_completed: Boolean(task.task_completed),
  }));
}

async function addTask(task) {
    const [task_id] = await db("tasks").insert(task);
    const newTask = await db("tasks").where("task_id", task_id).first();
    return {
      ...newTask,
      task_completed: Boolean(newTask.task_completed),
    };
  }
  
  module.exports = {
    getTasks,
    addTask,
  };