// get the elements form html using document object

var textInput = document.getElementById('new-task');
var addTask = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder = document.getElementById('completed-tasks');

// common function to create list items

var createElements = function(taskString){
	//  create li
	var listItem = document.createElement('li');
	// checkbox
	var checkBox = document.createElement('input');
	// label
	var label = document.createElement('label');

	// editInputText
	var editInputText = document.createElement('input');

	var editButton = document.createElement('button');

	var deleteButton = document.createElement('button');


	// adding type to the created input elements
	checkBox.type = 'checkbox';
	editInputText.type = 'text';
	label.innerText = taskString;

	// adding text to buttons and class name
	editButton.innerText = 'EDIT';
	editButton.className = 'edit';
	deleteButton.innerText = 'DELETE';
	deleteButton.className = 'delete';

	// append all elements to listitem
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInputText);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

var deleteTask = function(){
	var li = this.parentNode;
	var ul = li.parentNode;
	ul.removeChild(li)
}
var editTask = function(){
	var listitem = this.parentNode;

	var editText = listitem.querySelector('input[type="text"]');
	var label = listitem.querySelector('label');

	var containsClass = listitem.classList.contains('editMode');

	if(containsClass){
		label.innerText = editText.value;
	}else{
		editText.value = label.innerText;
	}

	listitem.classList.toggle('editMode');


}
var competedTask = function(){
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
	bindEvents(listItem,incompleteTask);

}
var incompleteTask = function(){
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem)
	bindEvents(listItem,competedTask);

}
var bindEvents = function(listItem,eventHndeler){
	// get the elements from the dynamically added elements(li)
	var deleteButton = listItem.querySelector('button.delete');
	var editButton = listItem.querySelector('button.edit');
	var checkBox = listItem.querySelector('input[type="checkbox"]');

	deleteButton.onclick = deleteTask;
	editButton.onclick = editTask;
	checkBox.onchange = eventHndeler;


}

var addTasks = function(){

	var listItem = createElements(textInput.value);	
	console.log(listItem)
	if(textInput.value == ''){
		alert('please enter the task')
	}
	else{
		incompleteTaskHolder.appendChild(listItem);
		bindEvents(listItem,competedTask);
		localStorage.setItem('taskName',textInput.value)
		sessionStorage.setItem('name', "digitallync");

		localStorage.clear();

		textInput.value = null;

	}
}

addTask.addEventListener('click', addTasks);

console.log(incompleteTaskHolder.children)

for(var i=0;i<incompleteTaskHolder.children.length;i++){
		bindEvents(incompleteTaskHolder.children[i],competedTask);

}
for(var i=0;i<completedTaskHolder.children.length;i++){
		bindEvents(completedTaskHolder.children[i],incompleteTask);

}
console.log(localStorage.getItem('taskName'));



