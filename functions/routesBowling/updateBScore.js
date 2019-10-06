const fns=require('./../Data/shotMatrix');
const sms=require('./../Data/random');
//variable declaration
var strike,bowling,shotNo,bStyle,runs;

//functions
exports.post=(req,res)=>{
  var {cp1,cp2,cp3,ub1,ub2,
   cp1_style,cp2_style,cp3_style,
   cp1_sRate,cp1_fRate,
   cp2_sRate,cp2_fRate,
   cp3_sRate,cp3_fRate,
   cp1_conf,cp2_conf,cp3_conf,
   cp1_status,cp2_status,cp3_status,
   ub1_style,ub2_style,
   ub1_lecon,ub1_recon,
   ub2_lecon,ub2_recon,
   ub1_status,ub2_status,
   fieldType,pitch_type }=req.body;
  

  if(cp1_status==='strike'){
    strike=cp1;
    conf=cp1_conf;
    pStyle=cp1_style;
  }
  else if(cp2_status==='strike'){
    strike=cp2;
    conf=cp2_conf;
    pStyle=cp2_style;
  }
  else{
    strike=cp3;
    conf=cp3_conf;
    pStyle=cp3_style;
  }
  if(ub1_status==='bowling'){
    bowling=ub1;
    bStyle=ub1_style;
  }
  else{
    bowling=ub2;
    bStyle=ub2_style;
  }
  //identifying Ball Strength
  if(pStyle==="left-handed"){
    bStrengthNo=fns.bStrengthNo(bowling,ub1,ub2,ub1_lecon,ub2_lecon);
  }
  else{
    bStrengthNo=fns.bStrengthNo(bowling,ub1,ub2,ub1_recon,ub2_recon);
  }
  //Identifying whether he hit the ball ot not
  console.log('strike:',strike,'bStyle:',bStyle,'cp1_sRate:',cp1_sRate);
  let hitOrNot=(strike===cp1)?fns.hitOrNot(bStyle,cp1_sRate,cp1_fRate):
  (strike===cp2)?fns.hitOrNot(bStyle,cp2_sRate,cp2_fRate):fns.hitOrNot(bStyle,cp3_sRate,cp3_fRate);
  
  if(pitch_type==='green'){
    hitOrNot=hitOrNot+20;
  }
  if(hitOrNot){
      //identify which shot to play  
      shotNo=fns.shotType(conf);
   
      var matrixRes=fns.shot[bStrengthNo][shotNo];
      
      
      switch(matrixRes){
        case 0:runs=fns.strongAir(conf,pitch_type);
        break;
        case 1:runs=fns.strongGround(conf,pitch_type);
        break;
        case 2:runs=fns.strongDefence(conf,pitch_type);
        break;
        case 3:runs=fns.weakAir(conf,pitch_type);
        break;
        case 4:runs=fns.weakGround(conf,pitch_type);
        break;
        case 5:runs=fns.weakDefence(conf,pitch_type);
        break;
        default:runs=10;
        break;
      }
      
     //text message to be displayed
     switch(runs){
       case 0:text=fns.scoreMessage0[sms.random(9,0)].text;
        break;
       case 1:text=fns.scoreMessage1[sms.random(9,0)].text;
        break;
       case 2:text=fns.scoreMessage2[sms.random(9,0)].text;
        break;
       case 3:text=fns.scoreMessage3[sms.random(9,0)].text;
        break;
       case 4:text=fns.scoreMessage4[sms.random(9,0)].text;
        break;
       case 6:text=fns.scoreMessage6[sms.random(9,0)].text;
        break;
       case 10:text=fns.scoreMessage10[sms.random(9,0)].text;
        break; //catch out code
       case 11:text=fns.scoreMessage11[sms.random(2,0)].text;
        break; //run out code
       default: text='Thats Out!!';
        break;
     }
     img='https://i.ibb.co/y4nZrZz/bowler.gif';
  }
  else{
    runs=12; //bowled code
    text=fns.scoreMessage12[sms.random(7,0)].text;
    img=fns.scoreImage12[sms.random(4,0)].img;
  }
  
  res.send({
    "set_attributes":{
      "runs":runs
    },
    "messages":[
      {
      "attachment": {
        "type": "image",
        "payload": {
          "url": img
        }
      }
    },
    {
      "text":text
    }
    ]
  });
  
}