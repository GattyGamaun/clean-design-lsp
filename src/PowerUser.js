const User = require('./User');

module.exports = class PowerUser extends User {
    constructor() {
        super();
        this.accessRights = new Map();
    }
}
