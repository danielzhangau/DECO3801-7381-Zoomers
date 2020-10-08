const findItems = async () => { 
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://greenmiles:greenmiles@greenmiles.xbeih.mongodb.net/GreenMiles?authSource=admin&replicaSet=atlas-14319z-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    // connect to your cluster
    const client = await MongoClient.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('GreenMiles');
    // execute find query
    const items = await db.collection('userdata').find({}).toArray();
    console.log('All items', items);
    // close connection
    client.close();
};
findItems