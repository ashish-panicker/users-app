export class User {

    userName: string
    password: string
    category: string
    status: string
    description: string

    constructor(userName: string, password: string, category: string, status: string, description: string) {
        this.userName = userName
        this.password = password
        this.category = category
        this.status = status
        this.description = description
    }

}
