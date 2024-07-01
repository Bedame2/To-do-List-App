const inputBox = document.querySelector('.addTask');
const listContainer = document.querySelector('.listTask');
const pageBody = document.body;
const header = document.querySelector('.fixedHeader');
const todoApp = document.querySelector('.todoList-app');

function enterKeyPress() {
    pageBody.addEventListener('keypress', function(e) {
        if (e.key == 'Enter' && inputBox.value != ''){
            taskList();
            inputBox.value = '';
        }
        saveData();
    })
};
enterKeyPress();

function addBtn() {
    if (inputBox.value === '') {
        alert('Try inputing some tasks');
    }
    else {
        taskList();
    }
    inputBox.value = '';
    saveData();
};

function taskList() {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let cancelTask = document.createElement('cancelTask');
    cancelTask.innerHTML = "\u00d7";
    li.appendChild(cancelTask);
};

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "CANCELTASK") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// Save input even after refreshing
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// get Saved input
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();

// HEADER ON SCROLL CHANGE BEHAVIOUR FUNCTIONALITY
// Select the element to change the background color
// Define the scroll event listener
window.addEventListener('scroll', () => {
  // Calculate the scroll distance
  const scrollY = window.scrollY;

  // Change the background color based on scroll position
  if (scrollY > 100) {
    header.style.backgroundColor = '#f2f2f2';
  } else {
    header.style.backgroundColor = '#ffffff';
  }
});

