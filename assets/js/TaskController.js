(function () {
    const add = document.getElementById('addTask');
    let taskContainer = document.getElementById('currentList');
    const source = document.getElementById('listItems').innerHTML;
    refresh();

    function refresh() {
        const template = Handlebars.compile(source);
        const html = template(taskManager);
        taskContainer.innerHTML = html;
        let allTasks = document.querySelectorAll('.currentTasks');
        let deletes = document.querySelectorAll('.deleteTask');
        allTasks.forEach(item => {
            item.addEventListener('click', function (ev) {
                if (ev.target.tagName === 'P') {
                    ev.target.classList.toggle('checked');
                }
            }, false);
        });
        deletes.forEach(item => {
            item.addEventListener('click', deleteIt);
        });
    }
    function deleteIt(ev) {
        let key = JSON.stringify((ev.target.parentElement.id));
        let task = JSON.parse(localStorage.getItem(key));
        taskManager.removeTask((key));
        refresh();
    }
    add.addEventListener('click', addTask);
    function addTask() {
        let curr = document.getElementById('newT').value;
        clear();
        taskManager.addTask(curr);
        refresh();
    }
    function clear() {
        let input = document.getElementById('newT');
        input.value = '';
    }

})();
