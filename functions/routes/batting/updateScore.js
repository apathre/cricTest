const fns=require('../../Data/shotMatrix');
const sms=require('../../Data/random');
//variable declaration
var strike,bowling,shot,bStyle,runs;

//functions
exports.post=(req,res)=>{
  var {up1,up2,up3,cb1,cb2,
   up1_style,up2_style,up3_style,
   up1_sRate,up1_fRate,
   up2_sRate,up2_fRate,
   up3_sRate,up3_fRate,
   up1_conf,up2_conf,up3_conf,
   up1_status,up2_status,up3_status,
   cb1_style,cb2_style,
   cb1_lecon,cb1_recon,
   cb2_lecon,cb2_recon,
   cb1_status,cb2_status,
   shotType,pitch_type }=req.body;
  

  if(up1_status==='strike'){
    strike=up1;
    conf=up1_conf;
    pStyle=up1_style;
  }
  else if(up2_status==='strike'){
    strike=up2;
    conf=up2_conf;
    pStyle=up2_style;
  }
  else{
    strike=up3;
    conf=up3_conf;
    pStyle=up3_style;
  }
  if(cb1_status==='bowling'){
    bowling=cb1;
    bStyle=cb1_style;
  }
  else{
    bowling=cb2;
    bStyle=cb2_style;
  }
  //identifying Ball Strength
  if(pStyle==="left-handed"){
    bStrengthNo=fns.bStrengthNo(bowling,cb1,cb2,cb1_lecon,cb2_lecon);
  }
  else{
    bStrengthNo=fns.bStrengthNo(bowling,cb1,cb2,cb1_recon,cb2_recon);
  }
  //Identifying whether he hit the ball ot not
  let hitOrNot=(strike===up1)?fns.hitOrNot(bStyle,up1_sRate,up1_fRate):
  (strike===up2)?fns.hitOrNot(bStyle,up2_sRate,up2_fRate):fns.hitOrNot(bStyle,up3_sRate,up3_fRate);
  
  if(hitOrNot){
        
      var shotNo=(shotType==='Air'||shotType==='air')?0:
                (shotType==='Ground'||shotType==='ground')?1:2;
      
      var matrixRes=fns.shot[bStrengthNo][shotNo];
      
      conf=parseInt(conf);
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
        default:console.log('error in matrixRes');
        break;
      }
     switch(runs){
       case 0:text=fns.scoreMessage0[fns.random(9,0)].text;
        break;
       case 1:text=fns.scoreMessage1[fns.random(9,0)].text;
        break;
       case 2:text=fns.scoreMessage2[fns.random(9,0)].text;
        break;
       case 3:text=fns.scoreMessage3[fns.random(9,0)].text;
        break;
       case 4:text=fns.scoreMessage4[fns.random(9,0)].text;
        break;
       case 6:text=fns.scoreMessage6[fns.random(9,0)].text;
        break;
       case 10:text=fns.scoreMessage10[fns.random(9,0)].text;
        break; //catch out code
       case 11:text=fns.scoreMessage11[fns.random(2,0)].text;
        break; //run out code
       default: text='Thats Out!!';
        break;
     }
     img='';
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