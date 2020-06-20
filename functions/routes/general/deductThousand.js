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
        let newCoins = parseInt(doc.data().coins - coin);
            t.update(userRef, {coins: newCoins});
            return 0;
    }).then(result => {
    console.log('Transaction success1000', result);
    res.send({
        "set_attributes":{
            "coins":newCoins
        },
        "messages":[
            {"text":"Coins Updated"}
        ]
    });
    return 0;
    }).catch(err => {
    console.log('Transaction failure1000:', err);
 
    res.send({
        "set_attributes":{
            "coins":newCoins
        },
        "messages":[
            {"text":"Coin Update failed!!"}
        ]
    });
    });
 });

    
}