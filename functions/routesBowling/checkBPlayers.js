const fns=require('./../Data/shotMatrix');


exports.post=(req,res)=>{
  var {cp1,cp2,cp3,ub1,ub2,cp1_status,cp2_status,cp3_status,cp1_conf,cp2_conf,cp3_conf,cp1_img,cp2_img,cp3_img,bball,uscore,cscore}=req.body;
  var {batting, bowler, pStyle, bStyle,econ,hitRate,conf}='0';
  var wicket=0;
  var cp1_batting='',cp2_batting='',cp3_batting='';

  if(cp1_status==='strike'){
    batting=cp1;
    conf=cp1_conf;
    cp1_batting='on Strike';
  }
  else if(cp2_status==='strike'){
    batting=cp2;
    conf=cp2_conf;
    cp2_batting='on Strike';
  }
  else{
    batting=cp3;
    conf=cp3_conf;
    cp3_batting='on Strike';
  }

  if(bball>=0&&bball<=6){
    bowler=ub1;
  }
  else if(bball>6){
    bowler=ub2;
  }
  for(var i in fns.batsman){
    if(fns.batsman[i].name===batting){
      pStyle=fns.batsman[i].style;
      for(var j in fns.bowlers){
        if(fns.bowlers[j].name===bowler){
          bStyle=fns.bowlers[j].style;
          if(pStyle==='left handed'){
            econ=fns.bowlers[j].lecon;
          }
          else{
            econ=fns.bowlers[j].recon;
          }
        }
      }
      if(bStyle==='fast'){
        hitRate=fns.batsman[i].fRate;
      }
      else{
        hitRate=fns.batsman[i].sRate;
      }
    }
  }
  if(cp1_status==='out'){
    wicket++;
  }
  if(cp2_status==='out'){
    wicket++;
  }
  if(cp3_status==='out'){
    wicket++;
  }

  res.send({
    "messages":[
    
            {
              "text":`Player 1: ${up1}\t ${up1_batting}\n${up1_status}\nConfidence: ${up1_conf}\n\n
                      Player 2: ${up2}\t ${up2_batting}\n${up2_status}\nConfidence: ${up2_conf}\n\n
                      Player 3: ${up3}\t ${up3_batting}\n${up3_status}\nConfidence: ${up3_conf}\n\n
                      Score: ${uscore} \n Wickets:${wicket}\n\nComp Score:${cscore}\n\nUser Batting`
              
            }
    ]      
  });
  }