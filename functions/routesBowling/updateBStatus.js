const fns=require('./../Data/shotMatrix');

exports.post=(req,res)=>{
  var infoText,p1_status,p2_status,p3_status,newStatus;
  var {runs,cp1_status,cp2_status,cp3_status,bball}=req.body;
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



  res.send({
    "set_attributes":{
      "cp1_status":cp1_status,
      "cp2_status":cp2_status,
      "cp3_status":cp3_status,
      "runs":runs
    },
    "messages":[
      {"text":infoText}
    ]
  });
}