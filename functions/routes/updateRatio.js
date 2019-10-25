const admin=require('firebase-admin');

let db=admin.firestore();

exports.post=(req,res)=>{
    
    var data={
        messenger_id:req.body['messenger user id'],
        userWins:req.body.userWins,
        compWins:req.body.compWins
    }

    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {
        let newUserWins = data.userWins;
        let newCompWins = data.compWins;
        let newRatio=parseInt(newUserWins)/parseInt(newCompWins);
            t.update(userRef, {userWins:newUserWins, compWins:newCompWins, winRatio:newRatio});
            return 0;
    }).then(result => {
    console.log('Update Wins success');
    return 0;
    }).catch(err => {
    console.log('update wins failure:', err);
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