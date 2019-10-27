exports.post=(req,res)=>{
  
    var {ball,up1_status,up2_status,up3_status,uscore,cscore}=req.body;
    var batting_status,wicket=0;
    uscore=parseInt(uscore);
    cscore=parseInt(cscore);
    ball=parseInt(ball);
    if((uscore<=cscore&&cscore>0)||(uscore>=cscore&&cscore===0)){
        if(ball>=3){
          batting_status='match over';
        }
        else {
          if(up1_status==='out'){
            wicket++;
          }
          if(up2_status==='out'){
            wicket++;
          }
          if(up3_status==='out'){
            wicket++;
          }
        }
        
        if(ball>=6||wicket===2){
            batting_status='match over';
          }
        else{
            batting_status='resume match';
          }
    }
    
    else{
      batting_status='match over';
    }
    res.send({
      "set_attributes":{
        "batting_status":batting_status
      }
    });
    }
    