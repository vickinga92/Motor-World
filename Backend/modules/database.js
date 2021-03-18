const mongoose = require('mongoose');

const config = require('./config');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CONNECTION || config.mongoConfig, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}

