// get all the elements from the document using document object
var textInput = document.getElementById('new-task');
var addTask = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder = document.getElementById('completed-tasks');

// function to create the dynamic elements

var createElements = function(taskString){

	var listItem = document.createElement('li');

	var checkBox = document.createElement('input');

	var label = document.createElement('label');

	var editInputText = document.createElement('input');

	var editButton = document.createElement('button');

	var deleteButton = document.createElement('button');
	// add types for created input tags
	checkBox.type = 'checkbox';

	editInputText.type = 'text';
	label.innerText = taskString;
	editButton.innerText = 'edit';
	editButton.className = 'edit';
	deleteButton.innerText = 'delete';
	deleteButton.className = 'delete';

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInputText);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;	


}
var taskStored;
var addTasks = function(){
	var listItem = createElements(textInput.value);
	console.log(listItem)
	if(textInput.value == ''){
		alert('please add the task')
	}
	else{
		incompleteTaskHolder.appendChild(listItem);
		localStorage.setItem('task', textInput.value)
		taskStored = localStorage.getItem('task');
		bindTaskEvents(listItem,complete);
		textInput.value = null;
	}
	
}

addTask.addEventListener('click', addTasks);


var bindTaskEvents = function(listItem, checkboxEventHndeler){
	
	var deleteBtn = listItem.querySelector('button.delete');
	var checkbox = listItem.querySelector('input[type="checkbox"]');
	var editInput = listItem.querySelector('button.edit');
	deleteBtn.onclick = deleteTask;
	checkbox.onchange = checkboxEventHndeler;
	editInput.onclick = editTaskInput;
}

var editTaskInput = function(){debugger;
	var listItem = this.parentNode;
	console.log(listItem);

	var editText = listItem.querySelector('input[type="text"]');

	var label = listItem.querySelector('label');

	var containsClass = listItem.classList.contains('editMode')
	console.log(containsClass)

	if(containsClass){
		label.innerText = editText.value;
	}
	else{
		editText.value = label.innerText;
	}
	listItem.classList.toggle('editMode');

}
var deleteTask = function(){
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem)
}

var incomplete = function(){
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,complete)

}
var complete = function(){
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,incomplete)

}
console.log(incompleteTaskHolder.children);



for(var i=0;i<incompleteTaskHolder.children.length;i++){
	bindTaskEvents(incompleteTaskHolder.children[i],complete)

}

for(var i=0;i<completedTaskHolder.children.length;i++){
	bindTaskEvents(completedTaskHolder.children[i],incomplete)
}
