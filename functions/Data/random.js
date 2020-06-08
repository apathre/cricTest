exports.random=function(max,min){
    var rd= Math.floor(Math.random()*(max-min+1)+min);
    console.log(rd);
    return rd;
  }