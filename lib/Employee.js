class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}

// let newEmployee = new Employee( 'Mithrastus', 9, 'B0mbastus@gmail.com')