const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        const authPerson = this.data.find(person => person.email === email && person.password === password);
        if (authPerson === undefined) {
            return false;
        } else {
            return true;
        }
    }

    getByEmail(email) {
        let personByEmail = this.data.find(person => person.email === email);
        if (personByEmail === undefined) {
            return null;
        } else {
            return personByEmail;
        }
    }

    getByMatricNumber(matricNumber) {
        const personByMatNo = this.data.find(person => person.matricNumber === matricNumber)
        //if(User.matricNumber === matricNumber) {
        if (personByMatNo === undefined) {
            return null;
        } else {
            return personByMatNo;
        }
    }

    validate(obj) {
        this.errors = [];
        for (const key in obj){
            if (obj[key] === '' || obj[key] === undefined || obj[key] === null){                 
                this.errors.push(`${key} should not be empty.`);
            }
        }

        if (this.data.find(person => person.email === obj.email) != undefined) {
            this.errors.push("A user with specified email address already exists");
        } 
        
        if (this.data.find(person => person.matricNumber === obj.matricNumber) != undefined) {
            this.errors.push("A user with specified matric number already exists");
        } 
        
        if (obj.password.length < 7) {
            this.errors.push("Password should have at least 7 characters");
        } 
        
        if (this.errors.length === 0) {
            return true;
        } else {
            return false;
        }

    }
        

    
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};