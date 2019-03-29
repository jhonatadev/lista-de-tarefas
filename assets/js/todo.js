let data = [];

function renderTodo(){

	document.querySelector('.todo').innerHTML = '';

	data.forEach(task => {
	
	let li = document.createElement('li');

	li.innerHTML = `
		<input type="checkbox" id="task-${task.id}">
		<label for="task-${task.id}">${task.title}</label>
		<i class="far fa-trash-alt fa-lg"></i>
	`;

	li.querySelector('input').addEventListener("change", e => {
		
		if (e.target.checked) {
			li.classList.add('complete');
		} else {
			li.classList.remove('complete');
		}

	});

	li.querySelector('i').addEventListener('click', e => {

		let i = e.target;
		let li = i.parentNode;
		let input = li.querySelector('input');
		let id = input.id;
		let idArray = id.split('-');
		let todoId = idArray[1];

		data = data.filter(task => task.id !== parseInt(todoId));

		renderTodo();

	})

	document.querySelector('.todo').append(li);
});

}

document.querySelector('#new-task').addEventListener('keyup', e => {
	if(e.key === 'Enter'){
		data.push({
			id: data.length+1,
			title: e.target.value
		});

		e.target.value = "";

		renderTodo();
	};
});

renderTodo();