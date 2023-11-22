class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance
      } 
      Database.instance = this
      Database.exists = true
      this.data = data
    }

    getData() {
      return this.data
    }
  }

  const firebase = new Database('FirebaseDB')
  console.log(firebase.getData())

  const mongo = new Database('mongoDB')
  console.log(mongo.getData())

  const postgresql = new Database('postgresql')
  console.log(postgresql.getData())