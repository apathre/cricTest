exports.post=(req,res)=>{
    var {opener,up1_conf,up2_conf,up3_conf}=req.body;
    up1_conf=parseInt(up1_conf);
    up2_conf=parseInt(up2_conf);
    up3_conf=parseInt(up3_conf);
   console.log('opener:',opener);
   switch(opener){
     case 'up1': up1_status='strike';
                 if(up2_conf>=up3_conf){
                    console.log('up1:up2_conf>');
                    up2_status='playing';
                    up3_status='bench';
                 }
                 else{ 
                   console.log('up1:up2_conf>');
                   up2_status='bench'; 
                   up3_status='playing'; }
       break;
     case 'up2': up2_status='strike';
                 if(up1_conf>=up3_conf){
                    console.log('up2:up1_conf>');
                    up1_status='playing';
                    up3_status='bench';
                 }
                 else{ console.log('up2:up3_conf>');
                       up3_status='playing'; 
                       up1_status='bench'; }
       break;
     case 'up3': up3_status='strike';
                 if(up1_conf>=up2_conf){
                   console.log('up3:up1_conf>');
                    up1_status='playing';
                    up2_status='bench';
                 }
                 else{ 
                       console.log('up3:up2_conf>');
                       up2_status='playing'; 
                       up1_status='bench'; }
       break;
     default: console.log('error in chooseOpener');
       break;
   }
   console.log('up1_status:',up1_status,'up2_status:',up2_status,'up3_status:',up3_status);
   res.send({
     "set_attributes":
     {
       'up1_status':up1_status,
       'up2_status':up2_status,
       'up3_status':up3_status
     }
   });
  }