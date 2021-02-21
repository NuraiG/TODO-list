const taskManager = (function () {

    class Task {
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    }
    class TaskManager {
        constructor() {
            this.tasks = [];
        }
        addTask(another) {
            if (another instanceof Task) {
                this.tasks.push(another);
            }
        }
        removeTask(another) {
            let index;
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks.id === another.id) {
                    index = i;
                    break;
                }
            }
            this.tasks.splice(index, 1);
        }
    }
    return new TaskManager();
})
