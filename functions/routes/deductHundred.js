const admin=require('firebase-admin');
const functions=require('firebase-functions');

let db=admin.firestore();

exports.post=(req,res)=>{

    var coin=req.body.bet;
    var newCoins=0;
    var tResult='failed';
    let data={
        messenger_id:req.body['messenger user id']
    }
    let userRef = db.collection('users').doc(`${data.messenger_id}`);
    let transaction = db.runTransaction(t => (
        t.get(userRef)
        .then(doc => {
            tResult='success';
            if(doc.data().coins>coin){
                newCoins = doc.data().coins - coin;
                t.update(userRef, {coins: newCoins});
                res.send({
                    "set_attributes":{
                        "deducted":tResult,
                        "coins":newCoins
                    },
                    "messages":[
                        {"text":"Coins Updated!!"}
                    ]
                });
            }
            else {
                res.send({
                    "messages":[
                        {
                            "attachment": {
                              "type": "template",
                              "payload": {
                                "template_type": "button",
                                "text": "Coin Balance is low. Please recharge to play again",
                                "buttons": [
                                  {
                                    "type": "web_url",
                                    "url": "https://paytm.com",
                                    "title": "Recharge"
                                  },
                                 ]
                               }
                            }
                        }
                    ]
                });
            }
            return 0;   
        }).then(result => {
    console.log('Transaction success100', result);
    tResult='success';
    return 0;
    }).catch(err => {
    console.log('Transaction failure100:', err);
    tResult='failed';
    res.send({
        "set_attributes":{
            "deducted":tResult,
        },
        "messages":[
            {"text":"Coins Update failed!!"}
        ]
     });
    })
 ));

 

    
}