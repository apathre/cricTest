const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{
    
    var gameNum=0;
    let userRef = db.collection('game_players').doc(`player_num`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {    
        gameNum = parseInt(doc.data().game_num) + 1;
            t.update(userRef, { game_num: gameNum});
            return 0;
    }).then(result => {
      console.log('Player Number updated!!')
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
        "winRatio":0,
        "player_num":gameNum,
        "email":req.body.email
        }
        console.log('email:',data.email);
    let docRef = db.collection('users').doc(`${data.messenger_id}`);

    let setAda = docRef.set(data);
    
    res.status(200);
    return 0;
    }).catch(err => {
    console.log('Transaction failure:at createUser', err);
    });
 });  
    
    
    
    

}