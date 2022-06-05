const User = require('./User');

module.exports = class GenericUser extends User {
    constructor(protectedRights = new Set()) {
        super();
        this.protectedRights = protectedRights;
    }

    setupAccessRight(right, isSetted) {
        if (this.hasNoProtectedRights(right)) {
           this.accessRights.set(right, isSetted);
        }
    }

    hasNoProtectedRights(right) {
        return !this.protectedRights.has(right);
    }
}
