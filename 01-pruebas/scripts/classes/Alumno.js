import UserC from "./Usuario.js"

export default class Alumn extends UserC {
    constructor(nameU, lastName, email, active ,takenCourses) {
        super(nameU, lastName, email, active)
        this.takenCourses = takenCourses
    }
}