// Export it to make it available outside
export const addUser = (user, pass) => {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://greenmiles:greenmiles@greenmiles.xbeih.mongodb.net/GreenMiles?authSource=admin&replicaSet=atlas-14319z-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  // connect to your cluster
  client.connect((err, client2) => {
    if (err) throw err;
    // specify the DB's name
    const db = client2.db("GreenMiles");
    const collection = db.collection("userdata");

    var myobj = { user: user, password: pass, miles: "37" };
    collection.insertOne(myobj, function (err, r) {
      if (err) throw err;
      console.log('inside insertOne')
      // close connection
      client2.close();
    });

    console.log("Database created!", db.databaseName, collection.collectionName);
  });
}
addUser("tho", "234")
