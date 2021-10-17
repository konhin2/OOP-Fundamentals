 export default class Curso {
    constructor(nombre, poster, clases){
        this.nombre = nombre
        this.poster = poster
        this.clases = clases
        this.inscritos = []
    }
    getNombre(){
        return this.nombre
    }
    setNombre(nom){
        this.nombre = nom
    }
    getPoster(){
        return this.poster
    }
    setPoster(post){
        this.poster = post
    }
    getClases(){
        return this.clases
    }
    setClasses(classe){
        this.clases = classe
    }
    getInsc(){
        return this.inscritos
    }
    setInsc(insc){
        this.inscritos = insc
    }
}
