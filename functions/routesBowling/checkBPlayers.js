const fns=require('./../Data/shotMatrix');


exports.post=(req,res)=>{
  var {cp1,cp2,cp3,ub1,ub2,cp1_status,cp2_status,cp3_status,cp1_conf,cp2_conf,cp3_conf,cp1_img,cp2_img,cp3_img,bball,uscore,cscore,first_name}=req.body;
  var {batting, bowler, pStyle, bStyle,econ,hitRate,conf}='0';
  var wicket=0;
  var cp1_emoji='';
  var cp2_emoji='';
  var cp3_emoji='';

  if(cp1_status==='strike'){
    batting=cp1;
    conf=cp1_conf;
    cp1_emoji='🏏';
  }
  else if(cp2_status==='strike'){
    batting=cp2;
    conf=cp2_conf;
    cp2_emoji='🏏';
  }
  else{
    batting=cp3;
    conf=cp3_conf;
    cp3_emoji='🏏';
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
    cp1_emoji='☝️';
  }
  if(cp2_status==='out'){
    wicket++;
    cp2_emoji='☝️';
  }
  if(cp3_status==='out'){
    wicket++;
    cp3_emoji='☝️';
  }

  res.send({
    "messages":[
    
            {
              "text":`Player 1: ${cp1}\n${cp1_status}${cp1_emoji}\nConfidence: ${cp1_conf}\n\nPlayer 2: ${cp2}\n${cp2_status}${cp2_emoji}\nConfidence: ${cp2_conf}\n\nPlayer 3: ${cp3}\n${cp3_status}${cp3_emoji}\nConfidence: ${cp3_conf}\n\nScore: ${cscore} \nWickets:${wicket}\n\n${first_name} Score:${uscore}\n\n 🤖 Batting`
              
            }
    ]      
  });
  }