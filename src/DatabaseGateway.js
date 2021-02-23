class DatabaseGateway {
    static writeToDBForce(user, message) {
        user.setupAccessRight(DatabaseGateway.WRITE_TO_DATABASE, true);
        DatabaseGateway.writeToDB(user, message);
    }

    static writeToDB(user, message) {
        if (user.getValueOfAccessRight(DatabaseGateway.WRITE_TO_DATABASE)) {
            DatabaseGateway.database = message;
        }
    }

    static readFromDB() {
        return DatabaseGateway.database;
    }
}

DatabaseGateway.database = '';
DatabaseGateway.WRITE_TO_DATABASE = 'write to database';

module.exports = DatabaseGateway;
