export class Home {
    home_id: number
    nombre: string
    apellido: string
    email: string
    password: string
    created_at: Date
    updated_at: Date

    constructor(home){
        this.home_id = home.home_id
        this.nombre = home.nombre
        this.apellido = home.apellido
        this.email = home.email
        this.password = home.password
        this.created_at = home.created_at
        this.updated_at = home.updated_at
    }
    
}
