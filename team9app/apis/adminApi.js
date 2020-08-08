const exp = require('express');

const adminApp = exp.Router();

const dbo = require('../server');


adminApp.post('/addcourse', (req, res) => {
    courseCollectionObj = dbo.getDb().coursecollectionobj;
    courseCollectionObj.insertOne(req.body, (err, success) => {
        if(err){
            res.send({message:"Error while inserting"});
        } else {
            res.send({message:"Successfully added"});
        }
    });
});

adminApp.get('/getcourses', (req, res) => {
    courseCollectionObj = dbo.getDb().coursecollectionobj;
    schoolCollectionObj = dbo.getDb().schoolcollectionobj;
    schoolCollectionObj.find({schoolName: req.body.school}, (err, arrObj) => {
        if(err){
            console.log(err);
            res.send(["Error while getting"]);
        } else {
            console.log(arrObj);
            let board = arrObj["boardName"];
            courseCollectionObj.find({grade:req.body.grade, subject: req.body.subject, boardName: board}).toArray((err, arrObj) => {
                if(err){
                    res.send({message:"Error while getting"});
                } else {
                    console.log(arrObj);
                    res.send({message:"Successfully added", arrObj: arrObj});
                }
            });
        }
    });
    
});

adminApp.post('/enablecourses', (req, res) => {
    courseCollectionobj = dbo.getDb().coursecollectionobj;
    courseCollectionobj.update({courseName: req.body.courseName}, {$set: { enabled: 1, $push : { schools: req.body.schoolName } } }, (err, success) => {
        if(err){
            res.send({message:"Error while updating"});
        } else {
            res.send({message:"Successfully updated"});
        }
    });
});


adminApp.post('/getstudentcourses', (req, res) => {
    courseCollectionObj = dbo.getDb().coursecollectionobj;
    schoolCollectionObj = dbo.getDb().schoolcollectionobj;
    schoolCollectionObj.find({schoolName: req.body.school}, (err, arrObj) => {
        if(err){
            console.log(err);
            res.send(["Error while getting"]);
        } else {
            courseCollectionObj.find({grade:req.body.grade, subject: req.body.subject}).toArray((err, arrObj) => {
                if(err){
                    res.send({message:"Error while getting"});
                } else {
                    console.log(arrObj);
                    reqObj = [];
                    arrObj.foreach(el => {
                        if(el["schools"].includes(req.body.schoolName)){
                            reqObj.push(el);
                        }
                    });
                    res.send({message:"Successful", reqObj: reqObj});
                }
            });
        }
    });
});


adminApp.post('/stinccounter', (req, res) => {
    counterCollectionObj = dbo.getDb().countercollectionobj;
    counterCollectionObj.find({courseName: req.body.courseName}).toArray((err, arrObj) => {
        if(err){
            console.log(err);
            res.send({message: "Error"});
        } else{
            if(arrObj.length === 0){
                counterCollectionObj.insertOne({courseName: req.body.courseName, teachers: 0, students: 1}, (err, success) => {
                    if(err){
                        res.send({message:"Error"});
                    } else {
                        res.send({message:"Success"});
                    }
                })
            } else {
                counterCollectionObj.update({courseName: arrObj[0]["courseName"]}, { $inc: { "students": 1 } }, (err, success) => {
                    if(err){
                        res.send({message: "Error"});
                    } else {
                        res.send({message: "Success"});
                    }
                })
            }
        }
    });
});

adminApp.post('/tinccounter', (req, res) => {
    counterCollectionObj = dbo.getDb().countercollectionobj;
    counterCollectionObj.find({courseName: req.body.courseName}).toArray((err, arrObj) => {
        if(err){
            console.log(err);
            res.send({message: "Error"});
        } else{
            if(arrObj.length === 0){
                counterCollectionObj.insertOne({courseName: req.body.courseName, teachers: 0, students: 1}, (err, success) => {
                    if(err){
                        res.send({message:"Error"});
                    } else {
                        res.send({message:"Success"});
                    }
                })
            } else {
                counterCollectionObj.update({courseName: arrObj[0]["courseName"]}, { $inc: { "teachers": 1 } }, (err, success) => {
                    if(err){
                        res.send({message: "Error"});
                    } else {
                        res.send({message: "Success"});
                    }
                });
            }
        }
    });
});

// adminApp.get('/getGradeData', (req, res) => {
//     let jsonData = require('../../Model/grade_df.json');
//     //console.log('This is after the read call');
//     res.send({jsonData:jsonData});  
// });


adminApp.get('/getRdData', async (req, res) => {

    let jsonData = require('../../Model/grade_df.json');
    //console.log('This is after the read call');
    res.send({jsonData:jsonData});  
  });

module.exports = adminApp



