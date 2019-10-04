const admin=require('firebase-admin');
const db=admin.firestore();

exports.post=(req,res)=>{

    var {messenger_id}=req.body;

    let userRef = db.collection('users').doc(`${messenger_id}`);
    let transaction = db.runTransaction(t => (
        t.get(userRef)
        .then(doc => {
            newCount = doc.data().game_number + 1;
            t.update(userRef, {game_number: newCount});
            return 0;   
        }).then(result => {
    console.log('Game Number Updated', result);
    return 0;
    }).catch(err => {
    console.log('Game Number Update Failed', err);
    })
 ));
  res.send(200);
}