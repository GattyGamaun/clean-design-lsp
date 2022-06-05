module.exports = class User {
    constructor() {
        this.accessRightToStatus = new Map();
    }

    setupAccessRight(right, isSetted) {
        this.accessRightToStatus.set(right, isSetted);
    }

    getValueOfAccessRight(right) {
        return this.accessRightToStatus.get(right) || false;
    }
}
