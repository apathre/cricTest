const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{

    var coin=1000;

    let data={
        messenger_id:req.body['messenger user id']
    }
    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {
        let newCoins = doc.data().coins + coin;
            t.update(userRef, {coins: newCoins});
            return 0;
    }).then(result => {
    console.log('Added Coins');
    return 0;
    }).catch(err => {
    console.log('Error failure', err);
    });
 });

    res.send({
        "messages":[
        {"text":"Coins added: 1000"}
        ]
    });
}