
//la constante btn funciona para que si en un futuro le cambian el nombre a la clase de agregar no afecte su funcionamiento.
const btn = document.querySelector("[data-form-btn]")
// const input = document.querySelector("[data-form-input]")

const createTask = (evento) => {
    // console.log('crear tarea');
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input);
};

console.log(btn);
// console.log(input);
btn.addEventListener("click", createTask);


