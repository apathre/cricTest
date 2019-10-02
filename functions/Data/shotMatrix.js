const fns=require('./random')

exports.shot=[
    [0,1,2],
    [3,4,5]
  ]
  
  exports.batsman=[
    {
      name:"Alex Bailes",
      style:"left-handed",
      sRate:fns.random(95,70),
      fRate:fns.random(95,70),
      img:"https://i.ibb.co/VY3rVBv/ipl-player-2-done.jpg"
      
      
    },
    {
      name:"Ken Stokes",
      style:"right-handed",
      sRate:fns.random(95,70),
      fRate:fns.random(95,70),
      img:"https://i.ibb.co/2Zgjs2T/test-batsman-3-done.jpg"
    },
    {
      name:"Nihar Kohli",
      style:"right-handed",
      sRate:fns.random(95,70),
      fRate:fns.random(95,70),
      img:"https://i.ibb.co/GdqJz9T/ipl-player-5-done.jpg"
    },
    {
      name:"Mukesh Raina",
      style:"left-handed",
      sRate:fns.random(95,70),
      fRate:fns.random(95,70),
      img:"https://i.ibb.co/zrLPLsC/ipl-player-3-done.jpg"
  
    },
    {
      name:"V S Rahul",
      style:"left-handed",
      sRate:fns.random(95,70),
      fRate:fns.random(95,70),
      img:"https://i.ibb.co/X4BgWdc/test-batsman-2-done.jpg"
    },
    { 
      name:"Chetan Gujara",
      style:"right-handed",
      sRate:fns.random(95,70),
      fRate:fns.random(95,70),
      img:"https://i.ibb.co/1QG7mqd/test-batsman-1-done.jpg"
    }
    
  ]
  
  exports.bowlers=[
    {
      name:"Vaheer Khan",
      style:"off spin",
      lecon:fns.random(95,70),
      recon:fns.random(95,70)
    },
    {
      name:"Fakir Hassan",
      style:"leg spin",
      lecon:fns.random(95,70),
      recon:fns.random(95,70)
    }
  ]
  
  
  exports.strongAir=(conf,pitch)=>{
  var run=0;
    if(pitch==='dead'){ 
        run=(conf>=0&&conf<=25)?10:
            (conf>25&&conf<=40)?1:
            (conf>40&&conf<=43)?10:
            (conf>43&&conf<=65)?2:
            (conf>65&&conf<=68)?10:
            (conf>70&&conf<=90)?4:
            (conf>90&&conf<=93)?10:
            (conf>93&&conf<=98)?6:
            (conf>98&&conf<=99)?10:
            (conf===100)?6*Math.round(Math.random()):11;
    }
    else if(pitch==='green'){
      run=(conf>=0&&conf<=25)?10:
      (conf>25&&conf<=40)?1:
      (conf>40&&conf<=43)?10:
      (conf>43&&conf<=65)?2:
      (conf>65&&conf<=68)?10:
      (conf>70&&conf<=90)?4:
      (conf>90&&conf<=93)?10:
      (conf>93&&conf<=98)?6:
      (conf>98&&conf<=99)?10:
      (conf===100)?6*Math.round(Math.random()):11;

    }
    else{                                                   //pitch is damp
      run=(conf>=0&&conf<=25)?10:
            (conf>25&&conf<=40)?1:
            (conf>40&&conf<=43)?10:
            (conf>43&&conf<=65)?2:
            (conf>65&&conf<=68)?10:
            (conf>70&&conf<=90)?4:
            (conf>90&&conf<=93)?10:
            (conf>93&&conf<=98)?6:
            (conf>98&&conf<=99)?10:
            (conf===100)?6*Math.round(Math.random()):11;

    }
    return run;
  }
  exports.strongGround=(conf,pitch)=>{
    var run=0;
      if(pitch==='dead'){
        run=(conf>=0&&conf<=10)?0:
            (conf>10&&conf<=35)?1:
            (conf>35&&conf<=60)?2:
            (conf>60&&conf<=65)?11:
            (conf>65&&conf<=80)?3:
            (conf>80&&conf<=82)?11:4*Math.round(Math.random());
      }
      else if(pitch==='green'){
        run=(conf>=0&&conf<=10)?0:
            (conf>10&&conf<=35)?1:
            (conf>35&&conf<=60)?2:
            (conf>60&&conf<=65)?11:
            (conf>65&&conf<=80)?3:
            (conf>80&&conf<=82)?11:4*Math.round(Math.random());
      }
      else{
        run=(conf>=0&&conf<=10)?0:
            (conf>10&&conf<=35)?1:
            (conf>35&&conf<=60)?2:
            (conf>60&&conf<=65)?11:
            (conf>65&&conf<=80)?3:
            (conf>80&&conf<=82)?11:4*Math.round(Math.random());

      }
    return run;
  }
  exports.strongDefence=(conf,pitch)=>{
    var run=0;
    if(pitch==='dead'){
        run=(conf>=0&&conf<=10)?0:
            (conf>10&&conf<=25)?0:
            (conf>25&&conf<=70)?0:1;
    }
    else if(pitch==='green'){
      run=(conf>=0&&conf<=10)?0:
            (conf>10&&conf<=25)?0:
            (conf>25&&conf<=70)?0:1;

    }
    else{
      run=(conf>=0&&conf<=10)?0:
            (conf>10&&conf<=25)?0:
            (conf>25&&conf<=70)?0:1;

    }
    return run;
  }
  exports.weakAir=(conf,pitch)=>{
    var run=0;
    if(pitch==='dead'){
        run=(conf>=0&&conf<=5)?1:
            (conf>5&&conf<=15)?2:
            (conf>15&&conf<=30)?3:
            (conf>30&&conf<=65)?4:6;
    }
    else if(pitch==='green'){
      run=(conf>=0&&conf<=5)?1:
            (conf>5&&conf<=15)?2:
            (conf>15&&conf<=30)?3:
            (conf>30&&conf<=65)?4:6;

    }
    else{
      run=(conf>=0&&conf<=5)?1:
            (conf>5&&conf<=15)?2:
            (conf>15&&conf<=30)?3:
            (conf>30&&conf<=65)?4:6;

    }
    return run;
  }
  exports.weakGround=(conf,pitch)=>{
    var run=0;
    if(pitch==='dead'){
        run=(conf>=0&&conf<=25)?1:
            (conf>25&&conf<=45)?2:
            (conf>45&&conf<=48)?11:
            (conf>50&&conf<=80)?3:4;
    }
    else if(pitch==='green'){
      run=(conf>=0&&conf<=25)?1:
            (conf>25&&conf<=45)?2:
            (conf>45&&conf<=48)?11:
            (conf>50&&conf<=80)?3:4;

    }
    else{
      run=(conf>=0&&conf<=25)?1:
            (conf>25&&conf<=45)?2:
            (conf>45&&conf<=48)?11:
            (conf>50&&conf<=80)?3:4;
    }
    return run;
  }
  exports.weakDefence=(conf,pitch)=>{
    var run=0;
    if(pitch==='dead'){
        run=(conf>=0&&conf<=2)?0:
            (conf>2&&conf<=65)?1:2;
    }
    else if(pitch==='green'){
      run=(conf>=0&&conf<=2)?0:
            (conf>2&&conf<=65)?1:2;
    }
    else{
      run=(conf>=0&&conf<=2)?0:
            (conf>2&&conf<=65)?1:2;
    }
    return run;
  }
  
  
  
  exports.hitOrNot=(bStyle,sRate,fRate)=>{
  
    if(bStyle==="off spin"||bStyle==="leg spin"){
      hitRate=sRate;
    }
    else{
      hitRate=fRate;
    }
    var hit=Math.floor(Math.random()*100);
    console.log('hit',hit,'hitRate:',hitRate);
    if(hit<=hitRate){
      return 1;
    }
    else{
      return 0;
    }
  }
  
  exports.bStrengthNo=(bowling,cb1_name,cb2_name,cb1_econ,cb2_econ)=>{
     rnd=Math.floor(Math.random()*100);
     
     if(bowling===cb1_name){
       res=(rnd<=cb1_econ)?0:1;
     }
     else{
       res=(rnd<=cb2_econ)?0:1;
     }
     return res;
  }
  
  exports.shotType=(conf)=>{
    if(conf>=0&&conf<30){
      shotType=1;  //shot type = ground
    }
    else if(conf>=30&&conf<40){
      shotType=0;
    }
    else if(conf>=40&&conf<45){
      shotType=1;
    }
    else if(conf>=45&&conf<60){
      shotType=0;
    }
    else if(conf>60&&conf<65){
      shotType=1;
    }
    else{
      shotType=0; //shot type=air
    }
    return shotType;
  }
  
  exports.status=(p1_status,p2_status,p3_status)=>{
    switch(p1_status){
        case 'strike':p1_status='playing';
        break;
        case 'playing':p1_status='strike';
        break;
        default:
        break;
      }
      switch(p2_status){
        case 'strike':p2_status='playing';
        break;
        case 'playing':p2_status='strike';
        break;
        default:
        break;
      }
      switch(p3_status){
        case 'strike':p3_status='playing';
        break;
        case 'playing':p3_status='strike';
        break;
        default:
        break;
      } 
      status={p1_status,p2_status,p3_status};
    
      return status;
  }
  
  exports.scoreMessage0=[
    {
      text:"Dot Ball!!"
    },
    {
      text:"No runs!! Batsman needs to think of rotating the strike"
    },
    {
      text:"Great Ball from the bowler. No runs"
    },
    {
      text:"no run, length delivery going across"
    },
    {
      text:"no run, the ball again lobs up, this time no one at silly point. Another bumper and batsman does well to jab the ball out into the off-side"
    },
    {
      text:"no run, banged in short, Batsman somehow sways away from that and lets it go"
    },
    {
      text:"no run, tucked just wide of mid on, but they decide against a single"
    },
    {
      text:"no run, past the outside edge, the ball rising off a length to beat a slightly uncertain push off the back foot"
    },
    {
      text:"no run, pushed across him, outside off, and it's left alone"
    },
    {
      text:"no run, Batsman skips down and spanks a drive, but straight at mid off"
    }
  ]
  exports.scoreMessage1=[
    {
      text:"Batsman sneaked a single"
    },
    {
      text:"Oh, a knick on the outer edge. A single"
    },
    {
      text:"A single off the bat"
    },
    {
      text:"1 run, stays back and tucks the ball past for a single. Did it well by playing it with soft hands and getting it away from the man under the helmet"
    },
    {
      text:"1 run, gets squared up and gets an outer edge for the ball to go past gully for a single"
    },
    {
      text:"1 run, short delivery again, was at the ribs, Batsman stays inside the line of the ball and nudges it fine for a single to fine leg"
    },
    {
      text:"1 run, hops back and tucks it behind square for a single"
    },
    {
      text:"1 run, Batsman flashes outside off, the ball coming off the outside edge and bouncing down to third man"
    },
    {
      text:"1 run, worked into the leg side, another single is the result"
    },
    {
      text:"1 run, Batsman is late to pull against this short ball and gets an inside edge towards backward square leg"
    }
  ]
  exports.scoreMessage2=[
    {
      text:"Two runs!!"
    },
    {
      text:"Good running between the wickets. And 2 runs"
    },
    {
      text:"Fielder on the covers and 2 runs"
    },
    {
      text:"2 runs, gets deep in his crease and tucks it off his hips for a double."
    },
    {
      text:"2 runs, shuffles beside, lets the ball come beside and once again has his steery-square-punches, in front of point"
    },
    {
      text:"2 runs, very soft poke .. and the edge is just short of first slip. Natural nip away"
    },
    {
      text:"2 runs, uppercut over cover point, and they're back for two. Not particularly well timed, but he gets enough on it to clear the inner ring"
    },
    {
      text:"2 runs, cutter, and it's fetched into the leg side. The ball rolls into vacant space in front of deep midwicket, and they rush back for a second"
    },
    {
      text:"2 runs, goes for the pull again, gets an inside edge towards fine leg"
    },
    {
      text:"2 runs, worked down wide of long on, back for the second"
    }
  ]
  exports.scoreMessage3=[
    {
      text:"Three runs"
    },
    {
      text:"Great shot by the batsman. And sneaked 3 runs"
    },
    {
      text:"Good fielding and saved 4 runs. 3 runs on the board!!"
    },
    {
      text:"3 runs, that's a nice shot! Brings about a loud applause from the crowd. That was full on the sticks and Batsman presented a straight enough bat to get it past mid-on"
    },
    {
      text:"3 runs, slightly too full marginally outside off and Batsman square-drives it through cover point off the front foot for a triple"
    },
    {
      text:"3 runs, fuller delivery and the batter drives it. Threads the ball into the gap and gets a triple as the ball slowed down near the fence."
    },
    {
      text:"3 runs, fuller delivery and Batsman mistimes the drive through the covers for a triple. Came more off the toe-end of the bat"
    },
    {
      text:"3 runs, He threw his bat at it, it clipped the outside edge and went wide of short third. They will take three"
    },
    {
      text:"3 runs, that's a nice shot! Brings about a loud applause from the crowd. That was full on the sticks and Batsman presented a straight enough bat to get it past mid-on"
    },
    {
      text:"3 runs, width dished outside off and Batsman spanks it through the covers. Fielder sprints to his left from deep point and dives to save a run"
    }
  ]
  exports.scoreMessage4=[
    {
      text:"What a boundary !!"
    },
    {
      text:"Ball went like a bullet to the boundary. 4 runs"
    },
    {
      text:"A square cut !! and 4 runs"
    },
    {
      text:"FOUR, drives and drives handsomely! That was serene from Batsman. Leant into the drive and got it past the man at cover. The front foot not really bending much but he looked really balanced"
    },
    {
      text:"FOUR, firm push, thick edge, four. There was that gap between slips and gully, the ball traverses the gap and flies away to the fence."
    },
    {
      text:"FOUR, too full. Batsman gets out a stride, driving through the line really well as it screeches away through the covers"
    },
    {
      text:"FOUR, tickled away fine and that races away to the fine leg fence for a four"
    },
    {
      text:"FOUR, throws his bat at it and gets a thickish edge for the ball to race away into the cordon for a four."
    },
    {
      text:"FOUR runs, slower one full outside off, Batsman goes down and slogs it towards deep midwicket, one bounce and over the boundary line"
    },
    {
      text:"FOUR runs, misdirected down the leg side, and Batsman meets this one with a powerful orthodox sweep, placing it to perfection to collect a boundary"
    }
  ]
  exports.scoreMessage6=[
    {
      text:"Over the ground. And 6!!"
    },
    {
      text:"Helicopter shot and in the stands. 6 runs"
    },
    {
      text:"Ball went high in the air. 6 runs"
    },
    {
      text:"SIX runs, a slower full toss around off, Batsman opens up and smashes over the bowler's head"
    },
    {
      text:"SIX runs, fuller outside off and Batsman goes big, towards long-on, Fielder positions himself right at the boundary and takes the catch but also takes a small step back and ends up stepping on to the boundary line. He throws the ball in but that was too late. The third umpire just confirms the same."
    },
    {
      text:"SIX runs, some innovation there from Batsman, was a slower one coming in, Batsman just reverse pulls it over short third man for a six"
    },
    {
      text:"SIX runs, HUGE! Batsman spots one in the slot and just swats through the line to send it arcing high into the night sky and well over the boundary"
    },
    {
      text:"SIX runs, down on one knee and clears deep square leg, was a length ball outside off, Batsman goes across and down and sweeps it for a six"
    },
    {
      text:"SIX, that was slammed! Batsman knelt down and punished that delivery by employing the slog sweep."
    },
    {
      text:"SIX, one of the cleanest hits of the evening! Down on his knee as he connects the slogsweep to perfection, clears deep mid-wicket as the ball sails into the stands for half-a-dozen"
    }
  ]
  
  exports.scoreMessage10=[
    {
      text:"OUT, short outside off, and Batsman pulled it straight to the man on the boundary! Fielder hardly had to move there, at deep square leg."
    },
    {
      text:'OUT, Caught by Fielder!! He has chipped it straight to the man at mid-wicket.'
    },
    {
      text:"OUT Caught & Bowled!! That was hit sweetly by Batsman but he ends up hitting it straight back to the bowler."
    },
    {
      text:"OUT Caught by wicket keeper!! Edged and taken! Short and wide outside off, Batsman throws his hands at this one and gets a feather to the keeper."
    },
    {
      text:"OUT Caught!! Was a low full toss and Batsman went across early. However, shot isn't placed well and Fielder at deep square leg doesn't really have to budge at all. "
    },
    {
      text:" OUT !! Edge, and lovely catch from Fielder."
    },
    {
      text:"OUT Caught by Keeper !! Flat length ball outside off, Batsman hops back to cut and gets a healthy outside edge."
    },
    {
      text:"OUT Caught by Fielder!! The timing isn't there this time, he's got this more towards the bottom half and Fielder gets around at long-off for a really calm catch at the boundary. "
    },
    {
      text:"OUT Caught by Fielder!! Edged and that's a lovely grab at second slip."
    },
    {
      text:"OUT Caught by Fielder!! Bowler bowls it short and cramps the batsman for room, batsman still tries to go for the pull and his miscue could only travel as far as mid-on."
    }
  ] //catch out texts
  exports.scoreMessage11=[
    {
      text:"Bad call and it's a run-out!!"
    },
    {
      text:"OUT! There's a mix-up and run-out!!"
    },
    {
      text:"OUT, Batsman has run himself out! Crazy! He glanced this to fine leg and decided to take on a risky second."
    }
  ] //run out texts
  
  exports.scoreImage12=[
    {
      img:'https://i.ibb.co/6tz1hnr/giphy.gif'
    },
    {
      img:'https://i.ibb.co/2k4Cfws/giphy.gif'
    },
    {
      img:'https://i.ibb.co/m5xyN8J/test-bowled-12.gif'
    },
    {
      img:'https://i.ibb.co/bvsVR0N/test-bowled-13.gif'
    }
  ] //bowled gifs
  
  exports.scoreMessage12=[
    {
      text:"OUT Bowled!!"
    },
    {
      text:"OUT Bowled!! Cleaned up! beaten by the lack of pace."
    },
    {
      text:"OUT Bowled!! The Batsman completely missed this"
    },
    {
      text:"OUT bowled!! And the bails are in the air "
    },
    {
      text:"OUT bowled!! Knocking the bails off"
    },
    {
      text:"OUT bowled!! What a bowling"
    },
    {
      text:"OUT bowled!! And the batsman walks back to the pavillion"
    },
    {
      text:"Oh! He misses the ball and bowled"
    }
  ]
  
  exports.bowlingImages=[
    {
      img:'https://i.ibb.co/mGwys5N/giphy.gif'
    },
    {
      img:'https://i.ibb.co/MkGS5t0/bowling-1.gif'
    },
    {
      img:'https://i.ibb.co/nL1ZtKD/Bowling-2.gif'
    },
    {
      img:'https://i.ibb.co/t82P888/bowling-3.gif'
    },
    {
      img:'https://i.ibb.co/tCnFkDq/bowling-4.gif'
    },
    {
      img:''
    },
    {
      img:''
    },
    {
      img:''
    },
    {
      img:''
    },
    {
      img:''
    }
  ]