const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.name = name;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;
    }
}

class Projects extends DataModel {
    validate(obj) {
        this.errors = [];
        
        if (obj.authors === "" || obj.authors === undefined || obj.authors === null) {
            this.errors.push("authors should not be empty");
        } else if (! Array.isArray(obj.authors) ) {  
            this.errors.push("authors should be an array");
        }

        if (obj.tags === "" || obj.tags === undefined || obj.tags === null) {
            this.errors.push("tags should not be empty");
        } else if (! Array.isArray(obj.tags) ) {  
            this.errors.push("tags should be an array");
        }

        if (obj.id === "" || obj.id === undefined || obj.id === null) {                 
            this.errors.push("id should not be empty.");
        }

        if (obj.name === "" || obj.name === undefined || obj.name === null) {                 
            this.errors.push("name should not be empty.");
        }

        if (obj.abstract === "" || obj.abstract=== undefined || obj.abstract === null) {                 
            this.errors.push("abstract should not be empty.");
        }

        if (obj.createdBy === "" || obj.createdBy=== undefined || obj.createdBy === null) {                 
            this.errors.push("createdBy should not be empty.");
        }

        if (this.errors.length === 0){
            return true;
        } else {
            return false;
        }

    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};