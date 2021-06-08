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
        if (personId != ""){
       // if (User.email === email && User.password === password) {
            return true;
        } else {
            return false;
        }
    }

    getByEmail(email) {
        const personByEmail = this.data.find(person => person.email === email);
        if (personByEmail != "") {
        //if (User.email === email) {
            return personByEmail;
        } else {
            return null;
        }
    }

    getByMatricNumber(matricNumber) {
        const personByMatNo = this.data.find(person => person.matricNumber === matricNumber)
        //if(User.matricNumber === matricNumber) {
        if (personByMatNo != "") {
            return personByMatNo;
        } else {
            return null;
        }
    }

    validate(obj) {
        this.errors = [];
        if (obj.id === "") {
            this.errors.push("id should not be empty");
            return false;
        } else if (obj.firstname === "") {
            this.errors.push("firstname should not be empty");
            return false;
        } else if (obj.lastname === "") {
            this.errors.push("lastname should not be empty");
            return false;
        } else if (obj.email === "") {
            this.errors.push("email should not be empty");
            return false;
        } else if (obj.password === "") {
            this.errors.push("password should not be empty");
            return false;
        } else if (obj.matricNumber === "") {
            this.errors.push("matricNumber should not be empty");
            return false;
        } else if (obj.program === "") {
            this.errors.push("program should not be empty");
            return false;
        } else if (obj.graduationYear === "") {
            this.errors.push("graduationYear should not be empty");
            return false;
        } else if (this.data.find(person => person.email === obj.email) != '') {
            this.errors.push("A user with specified email address already exists");
            return false;
        } else if (this.data.find(person => person.matricNumber === obj.matricNumber) != "") {
            this.errors.push("A user with specified matric number already exists");
            return false;
        } else if (obj.password.length < 7) {
            this.errors.push("Password should have at least 7 characters");
            return false;
        } else {
            return true;
        }

    }
        

    
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};