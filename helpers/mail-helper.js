const nodemailer =  require('nodemailer'); // khai báo sử dụng module nodemailer
const sendMail = (toEmail, code) => {
    const transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: 'mailypd02033@gmail.com',
            pass: 'hoilamgi'
        }
    });
    const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Mai Ly',
        to: toEmail,
        subject: 'Code Change Password',
        text: 'You recieved message from ',
        html: '<p>' + code + '</p>'
    }
    return transporter.sendMail(mainOptions);
}
module.exports = sendMail;