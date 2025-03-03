require('dotenv').config();

module.exports = {
    database: {
        mongo_uri: process.env.MONGO_URI || 'mongodb://localhost:27017/task_management'
    }
};