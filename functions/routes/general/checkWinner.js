exports.post=(req,res)=>{
    var {uscore,cscore}=req.body;
    var winner;
    uscore=parseInt(uscore);
    cscore=parseInt(cscore);
    
    if(uscore>cscore){
      winner='user';
    }
    else if(cscore>uscore){
      winner='🤖';
    }
    else{
      winner='draw';
    }
    res.send({
      "set_attributes":{
        "winner":winner
      },
      "messages":[
        { "text":`And the winner is ${winner}`}
      ]
    });
  }