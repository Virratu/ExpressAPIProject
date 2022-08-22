const express = require('express');
const app = express();
const PORT = 3000;

var somePOST = [
    {tabNumb: 1,
     inn: 9999999,
     vacatuionType: 1,
     vacationStart: "10-01-2022",
     vacationDuration: 14
    }
];

var someGET = [
    {tabNumb: 1,
     wasCreated: 0,
     remains: 28
    }
];

app.use(express.json());

app.get("/API/getinfo", function(req, res){
    res.json(someGET);
 });

app.get("/API/gettest", function(req,res){
    res.json(somePOST);
});

app.post("/API/postsome", function(req,res){
    if(!req.body.tabNumb||
       !req.body.inn||
       !req.body.vacatuionType||
       !req.body.vacationStart||
       !req.body.vacationDuration){
        res.status(400);
        res.json({message:"Bad Request"});
       } else {
        somePOST.push({
            tabNumb: req.body.tabNumb,
            inn: req.body.inn,
            vacatuionType: req.body.vacatuionType,
            vacationStart: req.body.vacationStart,
            vacationDuration: req.body.vacationDuration
        });
        res.json({message: "Success"});
       }
});

app.post("/API/posttest", function(req,res){
    res.json(req.body)
});

app.listen(PORT);