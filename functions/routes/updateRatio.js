const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{
    var bet=req.body.bet;
    var tResult='';
    var multiple=1.8;
    let data={
        messenger_id:req.body['messenger user id']
    }

    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {
        let newUserWins = req.body['userWins'];
        let newCompWins=req.body['compWins'];
            t.update(userRef, {userWins:newUserWins, compWins:newCompWins});
            return 0;
    }).then(result => {
    console.log('Update Wins success');
    tResult='success';
    return 0;
    }).catch(err => {
    console.log('update wins failure:', err);
    tResult='failed';
    });
 });

 res.send({
    "messages":[
            {
                "text":"Wins updated!!"
            }
        ]
    });
}