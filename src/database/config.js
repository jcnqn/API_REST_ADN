const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
        console.log('DB Online');

    } catch (error) {
        console.warn(error)
        throw new error('Error while trying to connect to DataBase');
    }
}

module.exports = {
    dbConnection,
}
