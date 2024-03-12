export class User {

    id?: number         // optional attribute
    userName: string
    password: string
    category: string
    status: string
    department: string

    constructor( userName: string, password: string, category: string, status: string, department: string) {
        this.userName = userName
        this.password = password
        this.category = category
        this.status = status
        this.department = department
    }

}
