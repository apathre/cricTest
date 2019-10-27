exports.post=(req,res)=>{  

    var {bball,cp1_status,cp2_status,cp3_status,uscore,cscore}=req.body;
    cscore=parseInt(cscore);
    uscore=parseInt(uscore);
    bball=parseInt(bball);
    var bowling_status,wicket=0;
    
    if((cscore<=uscore&&uscore>0)||(cscore>=uscore&&uscore===0)){
        if(bball>=3){
          bowling_status='match over';
        }
        else {
          if(cp1_status==='out'){
            wicket++;
          }
          if(cp2_status==='out'){
            wicket++;
          }
          if(cp3_status==='out'){
            wicket++;
          }
        }
        
        if(bball>=6||wicket===2){
            bowling_status='match over';
          }
        else{
            bowling_status='resume match'; 
          }
    }
    
    else{
      bowling_status='match over';
    
    }
    res.send({
      "set_attributes":{
        "bowling_status":bowling_status
      }
    });
    
    }
    