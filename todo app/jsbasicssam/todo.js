/*get the ref of all the elements*/
var taskInput = document.getElementById('new-task');
var addbutton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder = document.getElementById('completed-tasks');
	var listItem = document.createElement('li');
/*create a funtion and append elements to listItem*/
var createElements = function(taskString){

	var listItem = document.createElement('li');

	var checkBox = document.createElement('input');

	var label = document.createElement('label');

	var editTextInput = document.createElement('input');

	var editButton = document.createElement('button');

	var deleteButton = document.createElement('button');

	checkBox.type = 'checkbox';

	editTextInput.type = 'text';

	editButton.innerText = 'EDIT';
	editButton.className = 'edit';
	deleteButton.innerText = 'DELETE';
	deleteButton.className = "delete";

	label.innerText = taskString;

	/*append all created elements to listItem*/
	listItem.appendChild(checkBox);
	listItem.appendChild(editTextInput);
	listItem.appendChild(label);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;

}

var addTask = function(){
	var listItem = createElements(taskInput.value)
	incompleteTaskHolder.appendChild(listItem);
	taskInput.value = null;
	bindTaskEvents(listItem,completeTask)
}

/*register click event on add button*/
addbutton.addEventListener('click', addTask);

/*delete task*/
var deleteTask = function(){
	var listItem = this.parentNode;

	var ul = listItem.parentNode;

	ul.removeChild(listItem)
}



var bindTaskEvents = function(taskListItem,checkboxEventHandler){
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");


	deleteButton.onclick = deleteTask;

	checkBox.onchange = checkboxEventHandler;
}

var incompleteTask = function(){
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,completeTask)
}

var completeTask = function(){
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,incompleteTask)
}
var btn = document.getElementById('btn');

btn.onclick = function(){
	console.log(this)
}
