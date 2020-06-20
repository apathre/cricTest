const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{
    var coin=req.body.coin;
    var newCoins=0;
    
    let data={
        messenger_id:req.body['messenger user id']
    }
    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => (
        t.get(userRef)
        .then(doc => {
                console.log('updated coins');
                newCoins=coin;
                t.update(userRef, {coins: newCoins});
            return 0;   
        }).then(result => {
    return 0;
    }).catch(err => {
    console.log('Transaction failure at update:', err);
    })));

}