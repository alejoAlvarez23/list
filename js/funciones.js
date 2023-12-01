const input = document.querySelector('#input')
const addBtn = document.querySelector('#btnAdd')
const ul = document.querySelector('ul')
const empty = document.querySelector('#empty')
const nombre = document.querySelector('h1')
var id = 0

//FUNCION NOMBRE
function ponerNombre (name){
        nombre.insertAdjacentHTML("beforeend", name,)
}

//funcion agregar tarea
function agregarTarea (tarea,){
    
    const elemento = `
                <li id="elemento_${id}" class="list-group-item list-group-item-action list-group-item-info">
                    <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
                        <button id="ok${id}" onclick="check(this)" type="button" class="btn btn-success "><img src="svg/check-circle.svg" alt=""></button>

                            <div id="tarea" class="text-center pt-2 px-1 w-75 " onclick="check(this)">${tarea}</div>

                        <button id="delete${id}" onclick="uncheck(this)" type="button" class="btn btn-danger "><img src="./svg/trash-fill.svg" alt=""></button>
                    </div>
                </li>`

        ul.insertAdjacentHTML("beforeend", elemento)
}

// PONER NOMBRE

// const nombres = prompt('poner nombre');
// ponerNombre(nombres);


// <<--AGREGAR TAREA ============>

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const tarea = input.value;
    if(tarea){
        agregarTarea(tarea);
    }
    input.value = ''
});

// check(e).addEventListener('click',(e)=>{
    
    // })
    // CHECK=====>
    
function check(e) {

    console.log("ok")
    e.parentElement.classList.add('bg-success');

}
 



// UNCHEK====>

function uncheck(e) {
   
    console.log("no ok");
    e.parentElement.parentElement.remove();

}