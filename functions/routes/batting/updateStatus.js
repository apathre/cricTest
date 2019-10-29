const fns=require('../../Data/shotMatrix');

exports.post=(req,res)=>{
  var infoText,p1_status,p2_status,p3_status,newStatus;
  var {runs,up1_status,up2_status,up3_status,ball,ub1_runs,ub2_runs,ub3_runs,ub4_runs,ub5_runs,ub6_runs}=req.body;
  

  runs=parseInt(runs);
  if(runs===10||runs===11||runs===12){
      console.log('runs-out:',runs);
      switch(up1_status){
        case 'strike':up1_status='out';
        break;
        case 'playing':
        break;
        case 'out':
        break;
        default:up1_status='strike';
        break;
      }
      switch(up2_status){
        case 'strike':up2_status='out';
        break;
        case 'playing':
        break;
        case 'out':
        break;
        default:up2_status='strike';
        break;
      }
      switch(up3_status){
        case 'strike':up3_status='out';
        break;
        case 'playing':
        break;
        case 'out':
        break;
        default:up3_status='strike';
        break;
      }
      runs=0;
      infoText="That's Out!!";
    }

  
 
  else {
    if((runs===1||runs===3)){
    newStatus=fns.status(up1_status,up2_status,up3_status);
    p1_status=newStatus.p1_status;
    p2_status=newStatus.p2_status;
    p3_status=newStatus.p3_status;
  }
  if(runs===13||runs===14){
    runs=0;
  }
  
   up1_status=p1_status;
   up2_status=p2_status;
   up3_status=p3_status;
   infoText=`You scored ${runs} runs`;

  }
  
  
  switch(ball){
    case 1: ub1_runs=runs;
     break;
    case 2: ub2_runs=runs;
     break;
    case 3: ub3_runs=runs;
     break;
    case 4: ub4_runs=runs;
     break;
    case 5: ub5_runs=runs;
     break;
    case 6: ub6_runs=runs;
     break;
    default:
       break;
  }

  res.send({
    "set_attributes":{
      "up1_status":up1_status,
      "up2_status":up2_status,
      "up3_status":up3_status,
      "runs":runs,
      "ub1_runs":ub1_runs,
      "ub2_runs":ub2_runs,
      "ub3_runs":ub3_runs,
      "ub4_runs":ub4_runs,
      "ub5_runs":ub5_runs,
      "ub6_runs":ub6_runs,
    },
    "messages":[
      { "text":infoText }
    ]
  });
}