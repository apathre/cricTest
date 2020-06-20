const fns=require('../../Data/shotMatrix');
const sms=require('../../Data/random');

exports.post=(req,res)=>{
  
  up1=fns.batsman[Math.round(sms.random(15,0))].name;
  
  do{
    up2=fns.batsman[Math.round(sms.random(15,0))].name;
  }while(up2===up1);
  
  do{
      up3=fns.batsman[Math.round(sms.random(15,0))].name;
     
    }while(up3===up1||up3===up2);
 
  cb1=fns.bowlers[Math.round(Math.random())].name;

  do{
    cb2=fns.bowlers[Math.round(Math.random())].name;
  }while(cb2===cb1);

  res.send(
    {
  "set_attributes":
    {
      "up1": up1,
      "up2": up2,
      "up3": up3,
      "cb1": cb1,
      "cb2": cb2
    },
  "messages":[
    { "text":"Team Allocated"}
  ]
}
  );
}