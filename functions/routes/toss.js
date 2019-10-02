const fns=require('./../Data/shotMatrix');
const sms=require('./../Data/random');

exports.post=(req,res)=>{
  var tossRes=Math.round(Math.random());
  var tossArr=[
    "https://i.ibb.co/FwcRQL6/giphy.gif",
    "https://i.ibb.co/QMm7Xfd/giphy.gif"
  ]
  


  if(tossRes===0){
   let tossText1=`${req.body.first_name} lost the Toss`;
         res.send({
           "set_attributes":{
                            "tossWon":0
                            },
           "messages":[
                      {
                        "attachment": {
                        "type": "image",
                        "payload": {
                                     "url": tossArr[sms.random(1,0)]
                                   }
                             }
                        },
                        {
                          "text":tossText1
                        }
                      ]
         });
  }
  else{
    let tossText2=`${req.body.first_name} won the Toss`;
          res.send({
           "set_attributes":{
                            "tossWon":1
                            },
           "messages":[
                    {
                        "attachment": {
                        "type": "image",
                        "payload": {
                                     "url": tossArr[sms.random(1,0)]
                                   }
                             }
                        },
                        {
                          "text":tossText2
                        }
                ]
          });
    }
}