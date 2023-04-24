// index.js -> bundle.js
var QRCode = require('qrcode');
exports.ScanQR = async (req, res, next)=>{
    let img='https://res.cloudinary.com/datidmq6e/image/upload/v1678764939/2022-L7-CK2-40271110-03-1.jpg';
    let qr= await QRCode.toDataURL('I am Cuamotcang!');
   
    console.log(qr);
    
   
    img = `<image src= " `+qr+ `" />`;
    return res.send(img);
}
