const fns=require('./../Data/shotMatrix');

exports.post=(req,res)=>{
  var infoText,p1_status,p2_status,p3_status,newStatus;
  var {runs,cp1_status,cp2_status,cp3_status,bball,cb1_runs,cb2_runs,cb3_runs,cb4_runs,cb5_runs,cb6_runs}=req.body;
  runs=parseInt(runs);
  if(runs===10||runs===11||runs===12){
    switch(cp1_status){
      case 'strike':cp1_status='out';
      break;
      case 'playing':
      break;
      case 'out':
      break;
      default:cp1_status='strike';
      break;
    }
    switch(cp2_status){
      case 'strike':cp2_status='out';
      break;
      case 'playing':
      break;
      case 'out':
      break;
      default:cp2_status='strike';
      break;
    }
    switch(cp3_status){
      case 'strike':cp3_status='out';
      break;
      case 'playing':
      break;
      case 'out':
      break;
      default:cp3_status='strike';
      break;
    }
    runs=0;
     infoText=`It's Out`;
  }
  else{
    if((runs===1||runs===3)){
      newStatus=fns.status(cp1_status,cp2_status,cp3_status);
      p1_status=newStatus.p1_status;
      p2_status=newStatus.p2_status;
      p3_status=newStatus.p3_status;
    }
    if(runs===13||runs===14){
      runs=0;
    }

    cp1_status=p1_status;
    cp2_status=p2_status;
    cp3_status=p3_status;
    infoText=`🤖 scored ${runs} runs`;
  }

  switch(bball){
    case 1: cb1_runs=runs;
     break;
    case 2: cb2_runs=runs;
     break;
    case 3: cb3_runs=runs;
     break;
    case 4: cb4_runs=runs;
     break;
    case 5: cb5_runs=runs;
     break;
    case 6: cb6_runs=runs;
     break;
    default:
       break;
  }


  res.send({
    "set_attributes":{
      "cp1_status":cp1_status,
      "cp2_status":cp2_status,
      "cp3_status":cp3_status,
      "runs":runs,
      "cb1_runs":cb1_runs,
      "cb2_runs":cb2_runs,
      "cb3_runs":cb3_runs,
      "cb4_runs":cb4_runs,
      "cb5_runs":cb5_runs,
      "cb6_runs":cb6_runs,
    },
    "messages":[
      {"text":infoText}
    ]
  });
}