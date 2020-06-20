const functions =require('firebase-functions');
const admin=require('firebase-admin');
const {google} = require('googleapis');

admin.initializeApp(functions.config().firebase);


const express = require('express');
const cors=require('cors')({origin:true});
const bodyParser = require('body-parser');
const app = express();


//Defining match variables
const createUser=require('./routes/general/createUser');
const toss=require('./routes/general/toss');
const compDecideToss=require('./routes/general/compDecideToss');
const checkWinner=require('./routes/general/checkWinner');
const deductHundred=require('./routes/general/deductHundred');
const deductThousand=require('./routes/general/deductThousand');
const updateWin=require('./routes/general/updateWin');
const updateDraw=require('./routes/batting/updateDraw');
const addCoins=require('./routes/general/addCoins');
const updateRatio=require('./routes/general/updateRatio');
const getStadium=require('./routes/general/getStadium');
const updateGameNo=require('./routes/general/updateGameNo');
const checkInProgress=require('./routes/general/checkInProgress');
const updateData=require('./routes/general/updateData');
const groza=require('./routes/general/groza');
const getLink=require('./routes/general/getLink');

//Defining batting variables
const allocateTeam=require('./routes/general/allocateTeam');
const updateScore=require('./routes/batting/updateScore');
const updateConfidence=require('./routes/batting/updateConfidence');
const initializeAttributes=require('./routes/batting/initializeAttributes');
const updateStatus=require('./routes/batting/updateStatus');
const checkBatting=require('./routes/batting/checkBatting');
const checkPlayers=require('./routes/batting/checkPlayers');
const chooseOpener=require('./routes/batting/chooseOpener');

//Defining bowling variables
const allocateBTeam=require('./routesBowling/allocateBTeam');
const initializeBTeam=require('./routesBowling/initializeBTeam');
const updateBScore=require('./routesBowling/updateBScore');
const updateBConfidence=require('./routesBowling/updateBConfidence');
const updateBStatus=require('./routesBowling/updateBStatus');
const checkBowling=require('./routesBowling/checkBowling');
const checkBPlayers=require('./routesBowling/checkBPlayers');

//Defining miniover variables
const quizList=require('./routes/miniover/quizList');


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
app.post('/addCoins',addCoins.post);
app.post('/updateRatio',updateRatio.post);
app.post('/getStadium',getStadium.post);
app.post('/updateGameNo',updateGameNo.post);
app.post('/checkInProgress',checkInProgress.post);
app.post('/updateData',updateData.post);
app.post('/groza/:id?',groza.post);
app.post('/getLink',getLink.post);


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

//routes miniOver
app.post('/quizList',quizList.post);






exports.app = functions.https.onRequest(app);

   
