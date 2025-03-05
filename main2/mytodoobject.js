const toDoList = {
    list: {
    'create a new practice task': 'in Progress',
    },

    showList() {
        // console.log(this.list);
        for (const task in toDoList.list) {
  
            console.log(`Задача ${task} ------ Статус ${toDoList.list[task]}`)
        };
        },

    addTask(task, status) {
        if (task.length > 50) {
             console.log('Слишком длинная задача');
             
        }else if (task in this.list) {
            console.log('Такая задача уже есть');
        } else {
        this.list[task] = status;
        }
        
         },
    delTask(task) {
        delete this.list[task];
         },

    changeStatus(task, status) {
        if (task.length > 50) {
        console.log('Слишком длинная задача');
        
        }else if (task in this.list) {
    console.log('Такая задача уже есть');
        } else {
        this.list[task] = status;
    }
}
}

toDoList.addTask('Lorem ipsum dolor, sit amet consectetur   minus vitae in Progress orem ipsum dolor, sit amet consectetur   minus vitaein Progress', 'in Progress')
toDoList.addTask('make a bed', 'in Progress')
toDoList.addTask('make a bed', 'in Progress')
toDoList.addTask('clean the house', 'In Progress')
toDoList.addTask('go have a drink', 'In Progress')
toDoList.changeStatus('Lorem ipsum dolor, sit amet consectetur   minus vitae in Progress orem ipsum dolor, sit amet consectetur   minus vitae', 'Done')
toDoList.changeStatus('make a bed', 'Done')
toDoList.delTask('go have a drink')
toDoList.showList()


