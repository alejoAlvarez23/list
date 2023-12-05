const input = document.querySelector('#input')
const addBtn = document.querySelector('#btnAdd')
const ul = document.querySelector('ul')
const empty = document.querySelector('#empty')
const nombre = document.querySelector('h1')
var id = 0
var contador = 0
//FUNCION NOMBRE
function ponerNombre (name){
        nombre.insertAdjacentHTML("beforeend", name,)
}

//funcion agregar tarea
function agregarTarea (tarea,id){

    const elemento = `
                <li id="elemento_${id}" class="list-group-item list-group-item-action list-group-item-info scale-up-vertical-top">
                    <div class="btn-group w-100 " role="group" aria-label="Basic mixed styles example">
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
    id++
});

// check(e).addEventListener('click',(e)=>{
    
    // })
    // CHECK=====>
    
function check(e) {
    console.log(contador)
    if(contador==0){
        setTimeout(()=>{       
        
            console.log('eliminar')
            e.parentElement.classList.remove('blur-in');
        },400)
        e.parentElement.classList.add('bg-success');
        e.parentElement.classList.add('text-decoration-line-through');
        e.parentElement.classList.add('blur-in');
        
        contador = 1;
    }
    else{
        setTimeout(()=>{       
        
            console.log('eliminar')
            e.parentElement.classList.remove('blur-in');
        },400)
        e.parentElement.classList.remove('bg-success');
        e.parentElement.classList.remove('text-decoration-line-through');
        e.parentElement.classList.add('blur-in');
         
        contador = 0;
    }
}



// UNCHEK====>

function uncheck(e) {
    e.parentElement.parentElement.classList.remove('scale-up-vertical-top');

    console.log('efecto eliminar');
    e.parentElement.classList.add('blur-out');
    e.parentElement.parentElement.classList.add('slide-right');
    setTimeout(()=>{       
        
        console.log('eliminar')
        e.parentElement.parentElement.remove();
    },500)

    // console.log("no ok");

}