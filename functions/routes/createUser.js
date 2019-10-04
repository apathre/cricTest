const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{
    console.log('body:',db.collection('users'));
    let id=req.body['messenger user id'];
    let data={
        "messenger_id":req.body['messenger user id'],
        "first_name":req.body['first name'],
        "last_name":req.body['last name'],
        "gender":req.body['gender'],
        "signed_up":req.body['signed up'],
        "last_seen":req.body['last seen'],
        "game_number":0,
        "match_in_progress":0,
        "coins":0,
        "userWins":0,
        "compWins":0,
        "winRatio":0
        }
    let docRef = db.collection('users').doc(`${data.messenger_id}`);

    let setAda = docRef.set(data);
  
    res.status(200);

}