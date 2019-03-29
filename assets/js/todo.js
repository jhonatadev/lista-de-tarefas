let data = [{
	id: 1,
	title: "Estudar HTML"
}, {
	id: 2,
	title: "Estudar CSS"
}, {
	id: 3, 
	title: "Estudar JS"
}, {
	id: 4, 
	title: "Estudar Nodejs"
}];

data.forEach(task => {
	let li = document.createElement('li');

	li.innerHTML = `
		<input type="checkbox" id="task-${task.id}">
		<label for="task-${task.id}">${task.title}</label>
	`;

	document.querySelector('.todo').appendChild(li);
});
