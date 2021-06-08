class DataModel {
    constructor() {
        this.data = [];
        this.errors = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        const personId = this.data.find(person => person.id === id);
        if (personId != "") {
            return personId
        } else {
            return null;
        }
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        const updatePerson = this.data.find(person => person.id === id);
        if (updatePerson != "") {
            this.data.obj = obj;
            return true;
        } else {
            return false;
        }
    }

    delete(id) {
        const delPerson = this.data.find(person => person.id === id);
        if (delPerson != "") {
        //if (this.data.id === id) {
            delete data.obj;
            return true;
        } else {
            return false;
        }
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;