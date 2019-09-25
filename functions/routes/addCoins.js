exports.post=(req,res)=>{

    console.log('touched add Coin');
    var coin=1000;
    var tResult='failed';
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
    tResult='success';
    return 0;
    }).catch(err => {
    console.log('Error failure', err);
    tResult='failed';
    });
 });

    res.send({
        "messages":[
        {"text":"Coins added 1000"}
        ]
    });
}