const admin=require('firebase-admin');
const db=admin.firestore();

exports.post=(req,res)=>{
    var {messenger_id}=req.body;
    let userRef=db.collection('users').doc(`${messenger_id}`);
    userRef.get()
      .then((doc)=>{
          var i=doc.data().match_in_progress;
          if(i){
              res.send({
                  "redirect_to_blocks":["resume match"]
              });
          }
          else{
              res.send(200);
          }
          return 0;
      })
      .catch((err)=>{
          console.log('error:',err);
      });
}