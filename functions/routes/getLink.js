const nodeMailer = require('nodemailer');
exports.post=(req,res)=>{
    
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,  //true for 465 port, false for other ports
    auth: {
      user: 'pathreaig@gmail.com',
      pass: 'bh1w1ni!'
    }
  });
  const mailOptions = {
    from: '"Aditya Pathre" <pathreaig@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: 'Hello ', // Subject line
    text: `Hi, Click on this link to get your miniover coins: https://www.swadi.in/wp/checkout?FirstName=${data.first_name}&LastName=${data.last_name}&id=${data.id}`
    , // plain text body
    html: '<b>Hello world?</b>' // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send({success: false})
    } else {
      res.status(200).send({success: true});
    }
  });
    
    res.send({
        "messages":[
            {
                "text":"Link has been sent on you email id !!"
            }
        ]
    });
}