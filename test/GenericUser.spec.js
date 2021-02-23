const assert = require('assert');
const GenericUser = require('../src/GenericUser');
const { WRITE_TO_DATABASE } = require('../src/DatabaseGateway');

describe('GenericUser', () => {
    it('should not get value of access right when right is protected', () => {
        const genericUser = new GenericUser(new Set([WRITE_TO_DATABASE]));
        genericUser.setupAccessRight(WRITE_TO_DATABASE, true);

        assert.strictEqual(genericUser.getValueOfAccessRight(WRITE_TO_DATABASE), false);
    });

    it('should get value of access right when right is not protected', () => {
        const CHANGE_IN_DATABASE = 'change in database';

        const genericUser = new GenericUser();
        genericUser.setupAccessRight(CHANGE_IN_DATABASE, true);

        assert.strictEqual(genericUser.getValueOfAccessRight(CHANGE_IN_DATABASE), true);
    });
});
