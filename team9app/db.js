
var mc = require("mongodb").MongoClient;

//to hold object 
var dbo;


//database url
let dbUrl = "mongodb+srv://root:root@cluster0.efqyh.mongodb.net/test?retryWrites=true&w=majority"


//connnecting to Database

function initDb() {
    mc.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log("Error while connecting to Databaseu", err);
        }
        else {
            console.log("Connected to Database successfully");
            dbo = client.db("321foundation");
            admincollectionobj = dbo.collection("adminCollection");
            coursecollectionobj = dbo.collection('courseCollection'); 
            schoolcollectionobj = dbo.collection('schoolCollection');
            countercollectionobj = dbo.collection('counterCollection');
    }
});
}

//returning database object
function getDb(){
    return{
        admincollectionobj: admincollectionobj,
        coursecollectionobj: coursecollectionobj,
        schoolcollectionobj : schoolcollectionobj,
        countercollectionobj : countercollectionobj,
    }
}

module.exports = {
    getDb,
    initDb
}