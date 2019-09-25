const functions =require('firebase-functions');
const admin=require('firebase-admin');

admin.initializeApp(functions.config().firebase);


const express = require('express');
const cors=require('cors')({origin:true});
const bodyParser = require('body-parser');
const app = express();


//Defining match variables
const createUser=require('./routes/createUser');
const toss=require('./routes/toss.js');
const compDecideToss=require('./routes/compDecideToss.js');
const checkWinner=require('./routes/checkWinner');
const deductHundred=require('./routes/deductHundred');
const deductThousand=require('./routes/deductThousand');
const updateWin=require('./routes/updateWin');
const updateDraw=require('./routes/updateDraw');

//Defining batting variables
const allocateTeam=require('./routes/allocateTeam.js');
const updateScore=require('./routes/updateScore');
const updateConfidence=require('./routes/updateConfidence');
const initializeAttributes=require('./routes/initializeAttributes');
const updateStatus=require('./routes/updateStatus');
const checkBatting=require('./routes/checkBatting');
const checkPlayers=require('./routes/checkPlayers');
const chooseOpener=require('./routes/chooseOpener');

//Defining bowling variables
const allocateBTeam=require('./routesBowling/allocateBTeam');
const initializeBTeam=require('./routesBowling/initializeBTeam');
const updateBScore=require('./routesBowling/updateBScore');
const updateBConfidence=require('./routesBowling/updateBConfidence');
const updateBStatus=require('./routesBowling/updateBStatus');
const checkBowling=require('./routesBowling/checkBowling');
const checkBPlayers=require('./routesBowling/checkBPlayers');

//routes
app.get('/abc',(req,res)=>{
    res.send("Hello User!!");
});
app.post('/toss',toss.post);
app.post('/compDecideToss',compDecideToss.post);
app.post('/checkWinner',checkWinner.post);
app.post('/createUser',createUser.post);
app.post('/deductHundred',deductHundred.post);
app.post('/deductThousand',deductThousand.post);
app.post('/updateWin',updateWin.post);
app.post('/updateDraw',updateDraw.post);

//routes batting
app.post('/allocateTeam',allocateTeam.post);
app.post('/initializeAttributes',initializeAttributes.post);
app.post('/updateScore',updateScore.post);
app.post('/updateConfidence',updateConfidence.post);
app.post('/updateStatus',updateStatus.post);
app.post('/checkBatting',checkBatting.post);
app.post('/checkPlayers',checkPlayers.post);
app.post('/chooseOpener',chooseOpener.post);

//routes Bowling
app.post('/allocateBTeam',allocateBTeam.post);
app.post('/initializeBTeam',initializeBTeam.post);
app.post('/updateBScore',updateBScore.post);
app.post('/updateBConfidence',updateBConfidence.post);
app.post('/updateBStatus',updateBStatus.post);
app.post('/checkBowling',checkBowling.post);
app.post('/checkBPlayers',checkBPlayers.post);


exports.app = functions.https.onRequest(app);

   
