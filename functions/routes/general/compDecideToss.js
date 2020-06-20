exports.post=(req,res)=>{
    var tossDecide=Math.round(Math.random());
    var decision;
    if(tossDecide===0){
      decision='bowl';
    
      res.send({
        "set_attributes":{
          "compInnings":"bowl",
          "userInnings":"bat"
        },
        "messages":[
          { "text":`Computer decides to ${decision}`}
        ]
      });
    }
    else{
      decision='bat';
      res.send({
        "set_attributes":{
          "compInnings":"bat",
          "userInnings":"bowl"
        },
        "messages":[
          { "text":`Computer decides to ${decision}`}
        ]
      });
     }
  }
  