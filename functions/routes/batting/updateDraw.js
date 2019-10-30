exports.post=(req,res)=>{
    
    var {ub1_runs,ub2_runs,ub3_runs,ub4_runs,ub5_runs,ub6_runs,cb1_runs,cb2_runs,cb3_runs,cb4_runs,cb5_runs,cb6_runs,first_name}=req.body;
    var ubdCount=0;
    var cbdCount=0;
    var winner='';

    if(ub1_runs===4||ub1_runs===6){ubdCount++}
    if(ub2_runs===4||ub2_runs===6){ubdCount++}
    if(ub3_runs===4||ub3_runs===6){ubdCount++}
    if(ub4_runs===4||ub4_runs===6){ubdCount++}
    if(ub5_runs===4||ub5_runs===6){ubdCount++}
    if(ub6_runs===4||ub6_runs===6){ubdCount++}

    if(cb1_runs===4||cb1_runs===6){cbdCount++}
    if(cb2_runs===4||cb2_runs===6){cbdCount++}
    if(cb3_runs===4||cb3_runs===6){cbdCount++}
    if(cb4_runs===4||cb4_runs===6){cbdCount++}
    if(cb5_runs===4||cb5_runs===6){cbdCount++}
    if(cb6_runs===4||cb6_runs===6){cbdCount++}

    if(ubdCount>cbdCount){
        winner='user';
    }
    else if(ubdCount<cbdCount){
        winner='comp';
    }
    else{ 
        
        winner=(Math.round(Math.random()))?'comp':'user';
     }
    
    
    res.send({
        "set_attributes":{
            "winner":winner
        },
        "messages":[
            {"text":`${first_name} hit ${ubdCount} boundaries\n Comp hit ${cbdCount} boundaries`},
            { "text":"Winner decided on the basis of number of boundaries!!"}
        ],
        
    });
}