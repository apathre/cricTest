const fns=require('../../Data/shotMatrix');
const sms=require('../../Data/random');


exports.post=(req,res)=>{
  var { up1,up2,up3,cb1,cb2}=req.body;

  for(var i in fns.batsman){
   
     if(fns.batsman[i].name===up1){
        up1_style=fns.batsman[i].style;
        up1_sRate=fns.batsman[i].sRate;
        up1_fRate=fns.batsman[i].fRate; 
        up1_runs=0;
        up1_conf=sms.random(25,0);
        up1_img=fns.batsman[i].img;
     }
     if(fns.batsman[i].name===up2){
        up2_style=fns.batsman[i].style; 
        up2_sRate=fns.batsman[i].sRate;
        up2_fRate=fns.batsman[i].fRate;
        up2_runs=0;
        up2_conf=sms.random(25,0);
        up2_img=fns.batsman[i].img;

     }
     if(fns.batsman[i].name===up3){
        up3_style=fns.batsman[i].style;  
        up3_sRate=fns.batsman[i].sRate;
        up3_fRate=fns.batsman[i].fRate;
        up3_runs=0;
        up3_conf=sms.random(25,0);
        up3_img=fns.batsman[i].img;
     }
  }

  for(var j in fns.bowlers){
    console.log('cb1:',cb1);
    if(fns.bowlers[j].name===cb1){
        cb1_style=fns.bowlers[j].style;  
        cb1_lecon=fns.bowlers[j].lecon;
        cb1_recon=fns.bowlers[j].recon;
     }
    if(fns.bowlers[j].name===cb2){
        cb2_style=fns.bowlers[j].style;
        cb2_lecon=fns.bowlers[j].lecon;
        cb2_recon=fns.bowlers[j].recon;
     }
  }


  res.send({
    "set_attributes":{
      "up1_style":up1_style,
      "up1_conf":up1_conf,
      "up1_fRate":up1_fRate,
      "up1_sRate":up1_sRate,
      "up1_runs":up1_runs,
      "up1_img":up1_img,

      "up2_style":up2_style,
      "up2_conf":up2_conf,
      "up2_fRate":up2_fRate,
      "up2_sRate":up2_sRate,
      "up2_runs":up2_runs,
      "up2_img":up2_img,

      "up3_style":up3_style,
      "up3_conf":up3_conf,
      "up3_fRate":up3_fRate,
      "up3_sRate":up3_sRate,
      "up3_runs":up3_runs,
      "up3_img":up3_img,

      "cb1_style":cb1_style,
      "cb1_lecon":cb1_lecon,
      "cb1_recon":cb1_recon,

      "cb2_style":cb2_style,
      "cb2_lecon":cb2_lecon,
      "cb2_recon":cb2_recon,

    },
    "messages": [
    {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
            {
              "title":`Batsman 1: ${up1}`,
              "image_url":up1_img,
              "subtitle":`Style: ${up1_style}\nConfidence: ${up1_conf}`,
              "buttons":[
                {
                  "type":"show_block",
                  "block_names":["up1 open"],
                  "title":`Choose ${up1}`
                }
              ]
            },
            {
              "title":`Batsman 2: ${up2}`,
              "image_url":up2_img,
              "subtitle":`Style: ${up2_style}\nConfidence: ${up2_conf}`,
              "buttons":[
                {
                  "type":"show_block",
                  "block_names":["up2 open"],
                  "title":`Choose ${up2}`
                }
              ]
            },
            {
              "title":`Batsman 3: ${up3}`,
              "image_url":up3_img,
              "subtitle":`Style: ${up3_style}\nConfidence: ${up3_conf}`,
              "buttons":[
                {
                 "type":"show_block",
                  "block_names":["up3 open"],
                  "title":`Choose ${up3}`
                }
              ]
            }
          ]
        }
      }
    }
  ]
  });


}