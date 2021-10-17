export default class UserC {
    constructor(nameU, lastName, email, active) {
        this.nameU = nameU
        this.lastName = lastName
        this.email = email
        this.active = active
    }
    sayMyName() {
        return `My name is ${this.nameU}`
    }
    // Métodos que podemos encontrar en OOP
    // BUENAS PRÁCTICAS DE OOP
    // GET -> Obtener
    // SET -> Dar
    getName() {
        return this.nameU
    }
    getLastName() {
        return this.lastName
    }
    getEmail() {
        return this.email
    }
    setlastName(newLastName) {
        this.lastName = newLastName
    }
}