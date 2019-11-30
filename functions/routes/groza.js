const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{

    var add_coin=(parseInt(req.query.bullet))*2;

    let data={
        messenger_id:req.query.gunId
    }
    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {
        let newCoins = parseInt(doc.data().coins) + add_coin;
            t.update(userRef, {coins: newCoins});
            return 0;
    }).then(result => {
    console.log('Added Coins from Swadi');
    return 0;
    }).catch(err => {
    console.log(`Error adding coins from Swadi for user id: ${data.messenger_id} for ${add_coin} coins`, err);
    });
 });
}