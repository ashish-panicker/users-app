export class User {

    id: number
    userName: string
    password: string
    category: string
    status: string
    department: string

    constructor(id: number, userName: string, password: string, category: string, status: string, department: string) {
        this.id = id
        this.userName = userName
        this.password = password
        this.category = category
        this.status = status
        this.department = department
    }

}
