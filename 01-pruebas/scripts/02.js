// Función constructora va en mayuscula y singular

// Es necesario hacer la función constructura con la palabra function
function User (nameU, lastName, email, active) {
    this.nameU = nameU
    this.lastName = lastName
    this.email = email
    this.active = active
}

// const user1 = new User('Konhin', 'Claro', 'konhinclaro@gmail.com', true)
// const user2 = new User('Marimbo', 'Badido', 'luz.mathphys@gmail.com', true)

// console.log(user1)
// console.log(user2)

// Clases - moldes para crear objetos
class UserC {
    constructor(nameU, lastName, email, active){
        this.nameU = nameU
        this.lastName = lastName
        this.email = email
        this.active = active
    }
    sayMyName(){
        return `My name is ${this.nameU}`
    }
    // Métodos que podemos encontrar en OOP
    // BUENAS PRÁCTICAS DE OOP
    // GET -> Obtener
    // SET -> Dar
    getName() {
        return this.nameU
    }
    getLastName(){
        return this.lastName
    }
    setlastName(newLastName){
        this.lastName = newLastName
    }
}

// Instanciar una clase, aquí se crea el objeto
const user1 = new UserC("K'onhin", 'Claro', 'konhinclaro@gmail.com', true)
const user2 = new UserC('Marimbo', 'Badido', 'luz.mathphys@gmail.com', true)

user1.setlastName('Moctezuma')
console.log(`${user1.getName()} ${user1.getLastName()}`)

// Herencia

class Teacher extends UserC {
    constructor(nameU, lastName, email, active, teachedCourses, rate) {
        super(nameU, lastName, email, active)
        this.teachedCourses = teachedCourses
        this.rate = rate
    }
}

class Alumn extends UserC {
    constructor(nameU, lastName, email, active ,takenCourses) {
        super(nameU, lastName, email, active)
        this.takenCourses = takenCourses
    }
}

// Instanciar objetos a partir de clases con herencia

const currentUser = new Alumn("K'onhin", 'Claro', 'konhinclaro@gmail.com', true, ["docker", "graphQL"])

const currentTeacher = new Teacher("Mike", 'Nieva', 'mivenieva@gmail.com', true, ["React", "NodeJS"], 10)

// console.log(currentUser)
console.log(currentTeacher)