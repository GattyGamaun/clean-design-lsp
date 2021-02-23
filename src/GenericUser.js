const PowerUser = require('./PowerUser');

module.exports = class GenericUser extends PowerUser {
    constructor(protectedRights = new Set()) {
        super();
        this.protectedRights = protectedRights;
    }

    setupAccessRight(right, value) {
        if (!this.protectedRights.has(right)) {
           this.accessRights.set(right, value);
        }
    }
}
