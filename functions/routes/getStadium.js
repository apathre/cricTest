const fns=require('./../Data/shotMatrix');
const sms=require('./../Data/random');

exports.post=(req,res)=>{
    var rnd=sms.random(5,0);
    var stadiumImage=fns.stadiumImages[rnd].img;
    var stadiumText=fns.stadiumImages[rnd].text;
    console.log('stadium text:',stadiumText,stadiumImage);

    res.send(
        {
            "messages": [
               {
                 "attachment":{
                   "type":"template",
                   "payload":{
                     "template_type":"generic",
                     "image_aspect_ratio":"square",
                     "elements":[
                       {
                         "title":stadiumText,
                         "image_url":stadiumImage,
                       }
                     ]
                   }
                 }
               }
             ]
        });
    }