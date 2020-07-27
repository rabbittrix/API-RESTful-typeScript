import * as mongoose from "mongoose";

class Database {
  private DB_URL = "mongodb://localhost/db_portal";
  //private DB_URL = "mongodb://link-db/db_portal"; connection with azure

  createConnection(){
    mongoose.connect(this.DB_URL);
  }
}

export default Database;