const exp = require('express');
const mongoDb =require('mongodb').MongoClient;
const path = require('path');
const cors = require('cors');
const adminApp = require("./apis/adminApi");


const app = exp();

app.use('/admin', adminApp);


app.use(exp.static(path.join(__dirname,'./dist/team9app')));


const port = 2500;
app.listen(port, ()=> {
    console.log(`Server listening at port ${port}`);
});

// let dbUrl = "mongodb+srv://root:root@cluster0.efqyh.mongodb.net/test?retryWrites=true&w=majority"

// mongoDb.connect(dbUrl,{useUnifiedTopology:true,useNewUrlParser:true},(err,clientObj)=>{
//     if(err)
//     {
//         console.log('Error while connecting to the database',err);
//     }
//     else
//     {
//         console.log('Database connected successfully...');
//         dbo = clientObj.db('321foundation');
//         app.listen(port, ()=> {
//             console.log(`Server listening at port ${port}`);
//         });
//         admincollectionobj = dbo.collection("adminCollection");
//         coursecollectionobj = dbo.collection('courseCollection'); 
//         schoolcollectionobj = dbo.collection('schoolCollection');
//         countercollectionobj = dbo.collection('counterCollection');
//     }
// });


// function getDb(){
//     return{
//         admincollectionobj: admincollectionobj,
//         coursecollectionobj: coursecollectionobj,
//         schoolcollectionobj : schoolcollectionobj,
//         countercollectionobj : countercollectionobj,
//     }
// }


// module.exports = {
//     getDb,
// }
