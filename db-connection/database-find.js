const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://greenmiles:greenmiles@greenmiles.xbeih.mongodb.net/GreenMiles?authSource=admin&replicaSet=atlas-14319z-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// connect to your cluster
client.connect((err, client2) => {
  if (err) throw err;
  // specify the DB's name
  const db = client2.db("GreenMiles");
  const collection = db.collection("userdata");

  var query = { user: "Daniel ZHANG" };
  function find() {
    collection.find(query).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      client2.close();
    })
  }
  find()
  console.log("Database created!", db.databaseName, collection.collectionName);
});