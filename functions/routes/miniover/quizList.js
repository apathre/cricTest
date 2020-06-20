const jwtClient = require('./../jwt/jwtClient');
const {google} = require('googleapis');

exports.post=async (request,response)=>{
    //console.log('Aisha:"T0"',request.body);
    var items=[];
    const auth = jwtClient.jwtClient();
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
        spreadsheetId: '1yFM6nLYG5gYl0_qxcuVi8j_OSpFfuQUHhWbW_ca9Q-8',
        range: 'Menu',
      }, 
      async (err, res) => {
      
      if (err) return console.log('The API returned an error: ' + err);
  
      try{     
            var rows = res.data.values;
            if (rows.length) {
              // Print columns A and E, which correspond to indices 0 and 4.
              rows.map((row) => {
              //console.log(`T1`);
                if(row[0]==='FALSE'){
                      element={
                        "title":row[1],
                        "image_url":row[4],
                        "subtitle":row[2],
                        "buttons":[
                          {
                            "type":row[6],
                            "target":row[8],
                            "caption":row[7],
                            
                          }
                        ]
                      }
                  items.push(element);
                }//end of if
                return 0;
            })//end of map  
            }//end of if  
            var load= 
                  {
                    "version":"v2",
                    "content":{
                      "messages":[
                        {
                        
                            "type":"cards",
                            "image_aspect_ratio":"square",
                            "elements":items
                          
                        //end of attachment
                        }]///end of message
                    }
                  }
                //console.log('T2');
                response.send(load);
          }catch(e){
            console.log('another error:',e);
          }  
          return 0;
      })//end of spreadsheet get
     
  } //end of exports.post