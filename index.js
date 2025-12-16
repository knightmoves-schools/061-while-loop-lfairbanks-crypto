

function markAsDone(todos) {
	let i = 0;
	while (i < todos.length) {
		todos[i] = 'done - ' + todos[i];
		i++;
	}
	return todos;
}

// expose to global for browser tests
if (typeof window !== 'undefined') {
	window.markAsDone = markAsDone;
}

