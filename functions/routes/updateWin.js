const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{
    
    var data={
        messenger_id:req.body['messenger user id'],
        bet:req.body.bet,
        pitch_type:req.body.pitch_type
    }

    var tResult='';
    var multiple=0;
    var newCoins=0;
    var c_add=0;
    if(data.pitch_type==='dead'){
        multiple=1.4;
    }
    else if(data.pitch_type==='green'){
        multiple=1.6;
    }
    else{
        multiple=1.8;
    }

    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => {
    return t.get(userRef)
        .then(doc => {
        c_add=parseInt(data.bet*(multiple-1));
        let add=data.bet*multiple;
        newCoins = doc.data().coins + add;
        console.log('newCoins:',newCoins,'bet:',data.bet,'multiple:',multiple);
            t.update(userRef, {coins: newCoins});
            return 0;
    }).then(result => {
    console.log('Transaction success', result);
    tResult='success';
    res.send({
        "set_attributes":{
            "updatedWin":tResult,
            "coins":newCoins
        },
        "messages":[
            {
                "text":`Coin Balance increased 💰💰 \nBet:${data.bet}\nCoins added:${c_add}\nCurrent Coins: ${newCoins}`
            }
        ]
    });
    return 0;
    }).catch(err => {
    console.log('Transaction failure:at updateWin', err);
    tResult='failed';
    });
 });
        

    
}