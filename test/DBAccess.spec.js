const assert = require('assert');
const PowerUser = require('../src/PowerUser');
const { writeToDBForce, readFromDB } = require('../src/DatabaseGateway');

describe('DB access', () => {
    it('test PowerUser', () => {
        const powerUser = new PowerUser();
        
        writeToDBForce(powerUser, 'payload');
        assert.strictEqual(readFromDB(), 'payload');
    });
});
