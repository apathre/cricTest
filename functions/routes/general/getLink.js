const nodeMailer = require("nodemailer");

exports.post=(req,res)=>{
  console.log('touched this link funvtion');
  const data={
    email:req.body['user email'],
    first_name:req.body['first name'],
    last_name:req.body['last name'],
    id:req.body['messenger user id']
  };
  const transporter = nodeMailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,  //true for 465 port, false for other ports
    service:'gmail',
    auth: {
      user: 'pathreaig@gmail.com',
      pass: 'bh1w1ni!'
    }
  });
  const mailOptions = {
    from: '"Aditya Pathre" <pathreaig@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: 'Hello ', // Subject line
    html: `<b>Hello ${data.first_name}</b><p>Hi, Click on this link to get your miniover coins: https://www.swadi.in/wp/checkout?FirstName=${data.first_name}&LastName=${data.last_name}&id=${data.id}
    </p>` // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      
    } else {
      console.log('info:',info);
    }
  });
    
    res.send({
        "messages":[
            {
                "text":`Link has been sent on your email id !! Also ${mailOptions.text}`,
                
            }
        ]
    });
}