const fns=require('./../Data/shotMatrix');
const sms=require('./../Data/random');

exports.post=(req,res)=>{
  
  cp1=fns.batsman[Math.round(sms.random(5,0))].name;
  
  do{
    cp2=fns.batsman[Math.round(sms.random(5,0))].name;
  }while(cp2===cp1);
  
  do{
      cp3=fns.batsman[Math.round(sms.random(5,0))].name;
    }while(cp3===cp1||cp3===cp2);
 
  ub1=fns.bowlers[Math.round(Math.random())].name;

  do{
    ub2=fns.bowlers[Math.round(Math.random())].name;
  }while(ub2===ub1);
  
  res.send(
    {
  "set_attributes":
    {
      "cp1": cp1,
      "cp2": cp2,
      "cp3": cp3,
      "ub1": ub1,
      "ub2": ub2
    },
  "messages":[
    { "text":"Team Allocated"}
  ]
}
  );
}