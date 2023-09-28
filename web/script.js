const contenedor = document.getElementById('container-row')
const btnCrear = document.getElementById('btn-new')
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
let html = ""
let option = ''

const inputTitle = document.getElementById('inputTitle')
const inputDescription = document.getElementById('inputDescription')
const inputPoster = document.getElementById('inputPoster')

btnCrear.addEvenntListener('click', () => {
  option = "new"
  inputTitle.value = ""
  inputDescription.value = ""
  inputPoster.value = ""
  myModal.show()  
})

fetch('http://localhost:3000/api/tasks')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(tareas => {
        html += `
        <article class="col d-flex justify-content-center  mb-3" data-id="${tareas.id}">
            <div class="card" style="width: 18rem;">
                <img src="${tareas.poster}"
                    class="card-img-top" alt="Nuevo Titulo">
                    <div class="card-body">
                    <h5 class="card-title">${tareas.title}</h5>
                    <p class="card-text">${tareas.description}</p>
                    <div>
                        <button href="#" class="btn btn-success">Editar</button>
                        <button href="#" class="btn btn-danger">Borrar</button>
                    </div>
                </div>
            </div>
        </article>        
        `       
        contenedor.innerHTML = html
    });
})