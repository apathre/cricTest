const fns=require('../../Data/shotMatrix');


exports.post=(req,res)=>{
  var {up1,up2,up3,cb1,cb2,up1_status,up2_status,up3_status,up1_conf,up2_conf,up3_conf,up1_img,up2_img,up3_img,ball,uscore,cscore}=req.body;
  var {batting, bowler, pStyle, bStyle,econ,hitRate,conf}='0';
  var wicket=0;
  var up1_batting='',up2_batting='',up3_batting='';


  if(up1_status==='strike'){
    batting=up1;
    conf=up1_conf;
    up1_batting='on Strike';
  }
  else if(up2_status==='strike'){
    batting=up2;
    conf=up2_conf;
    up2_batting='on Strike';
  }
  else{
    batting=up3;
    conf=up3_conf;
    up3_batting='on Strike';
  }

  if(ball>=0&&ball<=6){
    bowler=cb1;
  }
  else if(ball>6){
    bowler=cb2;
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
  if(up1_status==='out'){
    wicket++;
  }
  if(up2_status==='out'){
    wicket++;
  }
  if(up3_status==='out'){
    wicket++;
  }

  res.send({
    "messages":[
    
            {
              "text":`Player 1: ${up1}\n${up1_status}\nConfidence: ${up1_conf}\n\nPlayer 2: ${up2}\n${up2_status}\nConfidence: ${up2_conf}\n\nPlayer 3: ${up3}\n${up3_status}\nConfidence: ${up3_conf}\n\nScore: ${uscore}\nWickets:${wicket}\n\nComp Score:${cscore}\n\nUser Batting`       
            }
    ]      
  });
  }