// Importaciones
import Curso from "./classes/Curso.js"
import Teacher from "./classes/Profesor.js"
import Alumn from "./classes/Alumno.js"



// Arrow function - imprimer un curso en el DOM
// Recibe un objeto de tipo curso
const elem = document.getElementById("cursos")

const mostrarCurso = (curso) => {
    const hijo = document.createElement("div")

    hijo.classList.add('card')

    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">Clases: ${curso.getClases()}</span>
                </div>
            </div>
        </div>
    `
    elem.appendChild(hijo)
}

// Función para Profesor
const getParentTeacher = document.getElementById("profesores")

const crearProfe = (profe) => {
    const hijo = document.createElement('tr')

    hijo.innerHTML = `
        <td></td>
        <td>${profe.getName()}</td>
        <td>${profe.getLastName()}</td>
        <td>${profe.getEmail()}</td>
        <td>${profe.getCourses()}</td>
    `
    getParentTeacher.appendChild(hijo)
}

// Invocando la fución mostrarCurso
const formulario = document.getElementById("formCursos")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
})

const formProfe = document.getElementById("formProfesor")

formProfe.addEventListener("submit", (e) => {
    e.preventDefault()
    const target = e.target
    const profe = new Teacher(target.nombreProfesor.value, target.apellidoProfesor.value, target.emailProfesor.value, true, [target.cursosProfesor.value])
    console.log(profe)
    crearProfe(profe)
})

// const profe = new Teacher("Mike", "Nieva", "mike.nieva@gmail.com", true, ["React", "NodeJS"], 10)

// const alumno = new Alumn("K'onhin", "Claro", "konhinclaro@gmail.com", false, ["HTML", "CSS"])

// const alumno2 = new Alumn("Marimba", "Badido", "luz.mathphys@gmail.com", false, ["HTML", "CSS"])

// const html = new Curso('HTML desde cero', 'img.png', 7)

// // Spreed operator, tener lo que ya existe y añadir algo mas al array

// html.setInsc([...html.getInsc() , alumno])
// console.log(html)

// html.setInsc([...html.getInsc(), alumno2])
// console.log(html)