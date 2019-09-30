const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{
    var bet=req.body.bet;
    var pitch_type=req.body.pitch_type;
    
    let data={
        messenger_id:req.body['messenger user id']
    }

    var tResult='';
    var multiple=0;
    if(pitch_type==='dead'){
        multiple=1.4;
    }
    else if(pitch_type==='green'){
        multiple=1.6;
    }
    else{
        multiple=1.8;
    }

    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {
        let newCoins = doc.data().coins + (bet*multiple);
            t.update(userRef, {coins: newCoins});
            return 0;
    }).then(result => {
    console.log('Transaction success', result);
    tResult='success';
    return 0;
    }).catch(err => {
    console.log('Transaction failure:', err);
    tResult='failed'
    });
 });
        res.send({
            "set_attributes":{
                "updatedWin":tResult,
                "coins":newCoins
            },
            "messages":[
                {
                    "text":`Coin Balance increased 💰💰 \nCurrent Coins: ${newCoins}`
                }
            ]
        });

    
}