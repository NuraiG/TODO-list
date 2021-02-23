const taskManager = (function () {

    class Task {
        constructor(name) {
            this.name = name;
        }
    }
    class TaskManager {
        constructor() {
            if (localStorage.getItem('tasks')) {
                this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } else {
                this.tasks = [];
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
        addTask(another) {
            let task = new Task(another);
            this.tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
        removeTask(another) {
            let index;
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].name === another) {
                    index = i;
                    break;
                }
                index=1;
            }
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
    return new TaskManager();
})();
