/**
 * Collect tasks as entered ++
 * require the input to be filled ++
 * 
 * Build array of tasks ++
 * Build object as task ++
 * 
 * Make li of each task ++
 * 
 * if task is checked as completed, remove from task list and add to completed task
 * 
 * count completed task
 * 
 * reward for completed tasks
 */

// grab each element 
const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const completedBtn = document.getElementById('completedBtn')
const completedList = document.getElementById('completedList')
const completedTasks = document.getElementById('completedTasks')
let taskArray = []
let task = {}
let badges = [
    {
        id: 1,
        badge: 'blue',
        imgUrl: 'bluebadge.jpeg'
    },
    {
        id: 2,
        badge: 'green',
        imgUrl: 'greenbadge.jpeg'
    },
    {
        id: 3,
        badge: 'gold',
        imgUrl: 'goldbadge.jpeg'
    }
]


addTaskBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    validateInput()
})

// take input 
const validateInput =()=> {
    
    if (taskInput.value == '') {
        alert('Please enter a task before submitting')
    } else {
        // console.log(taskInput.value);
        makeTask(taskInput.value)
    }
}

// make task 
const makeTask =(item)=> {

    const timestamp = new Date()

    task = {
        id: taskArray.length + 1,
        task: item,
        isCompleted: false,
        dateAdded: timestamp.toDateString(),
        dateCompleted: ''
    }

    addTask(task)
}

// add task to taskArray 
const addTask =(obj)=> {

    taskArray = [...taskArray, obj]
    // console.log(taskArray);
    makeTaskItem(taskList, obj)

}

// make li for each task 

const makeTaskItem =(el, item)=> {

    const listItem = document.createElement('li')
    listItem.classList.add('list-group-item')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', `taskId-${item.id}`)
    checkbox.classList.add('form-check-input', 'checkbox')

    const label = document.createElement('label')
    label.classList.add('form-check-label', 'text-capitalize','mx-2', 'task-label')
    label.setAttribute('for', `taskId-${item.id}`)
    label.innerText = item.task

    listItem.appendChild(checkbox)
    listItem.appendChild(label)

    el.appendChild(listItem)

}

// completed button 
completedBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('click');
    validateCompletedTasks()

})

// validate checked tasks 
const validateCompletedTasks =()=> {

    let completedArray = []
    const checkboxes = document.querySelectorAll('.checkbox')
    const allTasks = document.querySelectorAll('.task-label')
    
    for (let i = 0; i < checkboxes.length; i++) {
        
        if (checkboxes[i].checked && (allTasks[i].getAttribute('for') == checkboxes[i].getAttribute('id'))) {
            allTasks[i].classList.add('text-success')
            completedArray = [...completedArray, allTasks[i]]
        }
    }
    completedTasks.innerText = completedArray.length
    makeCompleteItem(completedArray)
    
}

// make li for completedList 
const makeCompleteItem =(arr)=> {

    
    arr.forEach(item => {
        const task = item.innerText 
        // console.log(task)
        const completedItem = document.createElement('li')
        completedItem.classList.add('list-group-item', 'text-success', 'text-capitalize', 'completed-item')
        completedItem.innerText = task 
        
        completedList.appendChild(completedItem)
    });

    awardBadge(arr)

}

// award badges
const awardBadge =(arr)=> {
    const numOfTasks = taskArray.length
    const numOfCompleted = arr.length 

    let completedToTaskRatio = numOfCompleted / numOfTasks

    console.log(completedToTaskRatio);

    
}