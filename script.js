
import { addTask } from './components/addTask.js';
import { displayTasks } from './components/readTasks.js';

// Constante que guarda (data attributes) para que no tener que usar un id o clase.
const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

displayTasks();
