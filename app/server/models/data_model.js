class DataModel {
    constructor() {
        this.data = [];
        this.errors = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        const personById = this.data.find(person => person.id === id);
        if (personById === undefined) {
            return null;
        } else {
            return personById;
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
        if (updatePerson === undefined) {
            return false;
        } else {
            this.data.obj = obj;
            Object.assign(updatePerson, obj)
            return true;
        }
    }

    delete(id) {
        const delPerson = this.data.find(person => person.id === id);
        if (delPerson === undefined) {
            return false;
        } else {
            this.data.pop(person => person.id === id);
            return true;
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