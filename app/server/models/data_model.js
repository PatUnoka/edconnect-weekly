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
        /*const delPerson = this.data.find(person => person.id === id);
        if (delPerson === undefined) {
            return false;
        } else {
            let personIndex = this.data.indexOf(delPerson);
            this.data.splice(delPerson, personIndex);
            return true;
        }*/
        const delPerson = this.data.find(person => person.id === id);
        if (delPerson === undefined) {
            return false;
        } else {
            for (let i=0; i<this.data.length; i++) {
                if (this.data[i].id === id) {
                    this.data.splice(i, 1)
                    return true;
                    break;
                }
            }
                            
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