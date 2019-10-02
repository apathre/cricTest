exports.post=function(req,res){
    var cpts, p1Conf, p2Conf,p3Conf, tRuns;
  
  //Input required p1Conf, p2Conf, p3Conf, runs, up1,up2,up3
    p1Conf=parseInt(req.body.up1_conf);
    p2Conf=parseInt(req.body.up2_conf);
    p3Conf=parseInt(req.body.up3_conf);
    
    tRuns= parseInt(req.body.runs);
    switch(tRuns){
          case 0:cpts=10;
            break;
          case 1:cpts=15;
            break;
          case 2:cpts=20;
            break;
          case 3:cpts=30;
            break;
          case 4:cpts=35;
            break;
          case 6:cpts=49;
            break;
          case 13:cpts=20;
           break;
          case 14:cpts=20;
           break;
          default:cpts=0;
            break;  
         }
      
      if(req.body.up1_status==='strike'){
             p1Conf=((p1Conf+cpts)>100)?100:(p1Conf+cpts);
      }
      else if(req.body.up2_status==='strike'){
        p2Conf=((p2Conf+cpts)>100)?100:(p2Conf+cpts);
      }
      else{
        p3Conf=((p3Conf+cpts)>100)?100:(p3Conf+cpts);
      }
      
      res.send({
        "set_attributes":{
          "up1_conf":p1Conf,
          "up2_conf":p2Conf,
          "up3_conf":p3Conf
        }
      });
       
  
  }