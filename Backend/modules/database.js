const mongoose = require('mongoose')
const config = require('./config')
const dotenv = require('dotenv')
dotenv.config()

class Database {
  constructor() {
    this.db = null
  }

  async connect() {

    this.db = mongoose.connection;

    try {
      await mongoose.connect(process.env.DB_CONNECTION || config.DB_CONNECTION, 
        { useFindAndModify: false, 
          useNewUrlParser: true , 
          useCreateIndex: true, 
          useUnifiedTopology: true,})
    } catch (e) {
      console.log("error al conectar a la base de datos")
      console.error(e)
    }
  }
}

module.exports = new Database()

