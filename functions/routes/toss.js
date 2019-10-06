const fns=require('./../Data/shotMatrix');
const sms=require('./../Data/random');

exports.post=(req,res)=>{
  var tossRes=Math.round(Math.random());
  var tossArr=[
    'https://i.ibb.co/g9q36NP/Toss-k0-LI-621x414-Live-Mint.jpg',
    'https://i.ibb.co/ZhvkC7j/01-TOSSweb1-article-Large.jpg',
    'https://i.ibb.co/YfT6jmk/England-Australia-Cricket-World-Cup-1151933.jpg',
    'https://i.ibb.co/C9LdgFP/india-vs-pakistan.jpg',
    'https://i.ibb.co/wK97KPr/The-Toss-594x360.jpg'

  ]
  


  if(tossRes===0){
   let tossText1=`${req.body.first_name} lost the Toss`;
         res.send({
           "set_attributes":{
                            "tossWon":0
                            },
            "messages": [
                              {
                                "attachment":{
                                  "type":"template",
                                  "payload":{
                                    "template_type":"generic",
                                    "image_aspect_ratio": "square",
                                    "elements":[
                                      {
                                        "title":tossText1,
                                        "image_url":tossArr[sms.random(4,0)]
                                        
                                      }
                                    ]
                                  }
                                }
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
                "messages": [
                              {
                                "attachment":{
                                  "type":"template",
                                  "payload":{
                                    "template_type":"generic",
                                    "image_aspect_ratio": "square",
                                    "elements":[
                                      {
                                        "title":tossText2,
                                        "image_url":tossArr[sms.random(4,0)]
                                        
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
               });
    }
}