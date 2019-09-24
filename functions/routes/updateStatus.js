const fns=require('./../Data/shotMatrix');
exports.post=(req,res)=>{
  var infoText,p1_status,p2_status,p3_status;
  var {runs,up1_status,up2_status,up3_status,ball}=req.body;
  

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
    [p1_status,p2_status,p3_status]=fns.status(up1_status,up2_status,up3_status);
  }
  
  if(ball%6===0){
    [p1_status,p2_status,p3_status]=fns.status(up1_status,up2_status,up3_status);
  }
  
   up1_status=p1_status;
   up2_status=p2_status;
   up3_status=p3_status;
   infoText=`You scored ${runs} runs`;

  }

  res.send({
    "set_attributes":{
      "up1_status":up1_status,
      "up2_status":up2_status,
      "up3_status":up3_status,
      "runs":runs
    },
    "messages":[
      { "text":infoText }
    ]
  });
}