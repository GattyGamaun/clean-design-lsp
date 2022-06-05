const User = require('./User');

module.exports = class GenericUser extends User {
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
