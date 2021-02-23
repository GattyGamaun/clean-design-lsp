module.exports = class PowerUser {
    constructor() {
        this.accessRights = new Map();
    }

    setupAccessRight(right, value) {
        this.accessRights.set(right, value);
    }

    getValueOfAccessRight(right) {
        return this.accessRights.get(right) || false;
    }
}
