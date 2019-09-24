const fns=require('./../Data/shotMatrix');


exports.post=(req,res)=>{
  var { cp1,cp2,cp3,ub1,ub2}=req.body;

  for(var i in fns.batsman){
   
     if(fns.batsman[i].name===cp1){
        cp1_style=fns.batsman[i].style;
        cp1_sRate=fns.batsman[i].sRate;
        cp1_fRate=fns.batsman[i].fRate; 
        cp1_runs=0;
        cp1_conf=fns.random(25,0);
        cp1_img=fns.batsman[i].img;
     }
     if(fns.batsman[i].name===cp2){
        cp2_style=fns.batsman[i].style; 
        cp2_sRate=fns.batsman[i].sRate;
        cp2_fRate=fns.batsman[i].fRate;
        cp2_runs=0;
        cp2_conf=fns.random(25,0);
        cp2_img=fns.batsman[i].img;
     }
     if(fns.batsman[i].name===cp3){
        cp3_style=fns.batsman[i].style;  
        cp3_sRate=fns.batsman[i].sRate;
        cp3_fRate=fns.batsman[i].fRate;
        cp3_runs=0;
        cp3_conf=fns.random(25,0);
        cp3_img=fns.batsman[i].img;
     }
  }

  for(var j in fns.bowlers){
    console.log('ub1:',ub1);
    if(fns.bowlers[j].name===ub1){
        ub1_style=fns.bowlers[j].style;  
        ub1_lecon=fns.bowlers[j].lecon;
        ub1_recon=fns.bowlers[j].recon;
     }
    if(fns.bowlers[j].name===ub2){
        ub2_style=fns.bowlers[j].style;
        ub2_lecon=fns.bowlers[j].lecon;
        ub2_recon=fns.bowlers[j].recon;
     }
  }


  res.send({
    "set_attributes":{
      "cp1_style":cp1_style,
      "cp1_conf":cp1_conf,
      "cp1_fRate":cp1_fRate,
      "cp1_sRate":cp1_sRate,
      "cp1_runs":cp1_runs,
      "cp1_img":cp1_img,

      "cp2_style":cp2_style,
      "cp2_conf":cp2_conf,
      "cp2_fRate":cp2_fRate,
      "cp2_sRate":cp2_sRate,
      "cp2_runs":cp2_runs,
      "cp2_img":cp2_img,

      "cp3_style":cp3_style,
      "cp3_conf":cp3_conf,
      "cp3_fRate":cp3_fRate,
      "cp3_sRate":cp3_sRate,
      "cp3_runs":cp3_runs,
      "cp3_img":cp3_img,

      "ub1_style":ub1_style,
      "ub1_lecon":ub1_lecon,
      "ub1_recon":ub1_recon,

      "ub2_style":ub2_style,
      "ub2_lecon":ub2_lecon,
      "ub2_recon":ub2_recon
    },
    "messages":[
    {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
            {
              "title":`Batsman 1: ${cp1}`,
              "image_url":cp1_img,
              "subtitle":`Style: ${cp1_style}\nConfidence: ${cp1_conf}`
            },
            {
              "title":`Batsman 2: ${cp2}`,
              "image_url":cp2_img,
              "subtitle":`Style: ${cp2_style}\nConfidence: ${cp2_conf}`
            },
            {
              "title":`Batsman 3: ${cp3}`,
              "image_url":cp3_img,
              "subtitle":`Style: ${cp3_style}\nConfidence: ${cp3_conf}`
            }
          ]
        }
      }
    }
  ]
  });


}