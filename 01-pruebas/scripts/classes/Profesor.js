import UserC from "./Usuario.js"

export default class Teacher extends UserC {
    constructor(nameU, lastName, email, active, teachedCourses) {
        super(nameU, lastName, email, active)
        this.teachedCourses = teachedCourses
    }
    getCourses(){
        return this.teachedCourses
    }
}