// Objetos Literales
// Atributos de los Objetos

const nameU = "K'onhin"
const lastName = "Claro"
const age = 25
const father = {
    name: "Edmin C.",
    age: 49
}

// ES6+ Si la propiedad tiene el mismo nombre atributo que se esta pasando en variable, solo se escribe la variable y automaticamente se asigna la propiedad con ese mismo nombre.

const user = {
    nameU,
    lastName,
    age,
    father
}

// Al modificar el contenido de un objeto aparece lo mismo el mismo objeto antes y despues de manipular el contenido

user.genre = "male"

// En el caso de que ya exista una pripiedad en el console si se nota el antes y después.

// Métodos de los objetos
// Lo que puede hacer un objeto

const users = {
    // Atributos del objeto
    nameU: "K'onhin",
    lastName: "Claro",
    age: 25,
    correo: 'konhinclago@gmail.com',
    activo: true,
    // Métodos - Se parece a una función pero no es lo mismo
    sayHi(){
        console.log(`Hola, mi nombre es ${this.nameU} ${this.lastName} y tengo ${this.age} años.`)
    }
}


console.log(users)