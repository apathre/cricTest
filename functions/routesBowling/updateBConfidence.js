exports.post=function(req,res){
    var cpts, p1Conf, p2Conf,p3Conf, tRuns;
  
  //Input required p1Conf, p2Conf, p3Conf, runs, up1,up2,up3
    p1Conf=parseInt(req.body.cp1_conf);
    p2Conf=parseInt(req.body.cp2_conf);
    p3Conf=parseInt(req.body.cp3_conf);
    tRuns= parseInt(req.body.runs);
    
    switch(tRuns){
          case 0:cpts=8;
            break;
          case 1:cpts=10;
            break;
          case 2:cpts=16;
            break;
          case 3:cpts=25;
            break;
          case 4:cpts=33;
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
      
      if(req.body.cp1_status==='strike'){
             p1Conf=((p1Conf+cpts)>100)?100:(p1Conf+cpts);
      }
      else if(req.body.cp2_status==='strike'){
        p2Conf=((p2Conf+cpts)>100)?100:(p2Conf+cpts);
      }
      else{
        p3Conf=((p3Conf+cpts)>100)?100:(p3Conf+cpts);
      }
      
      res.send({
        "set_attributes":{
          "cp1_conf":p1Conf,
          "cp2_conf":p2Conf,
          "cp3_conf":p3Conf
        }
      });
       
  
  }