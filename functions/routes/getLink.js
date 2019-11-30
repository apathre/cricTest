exports.post=(req,res)=>{
    const data={
        id:req.body['messenger user id'],
        first_name:req.body['first name'],
        last_name:req.body['last name']
    }
    let url=`https://www.swadi.in/wp/checkout?FirstName=${data.first_name}&LastName=${data.last_name}&id=${data.id}`;

    res.send({
        "messages":[
            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"button",
                        "text":"Click this button to go for payment link",
                        "buttons":[
                            {
                                "type":"web_url",
                                "url":url,
                                "title":"Payment Link"
                            }
                        ]
                    }
                }
            }
        ]
    });
}