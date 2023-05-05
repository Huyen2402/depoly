// index.js -> bundle.js
var QRCode = require('qrcode');
exports.ScanQR = async (req, res, next)=>{
    let img='';
    let qr= await QRCode.toDataURL('I am Cuamotcang!');
   
    console.log(qr);
    
   
    img = `<image src= " `+qr+ `" />`;
    return res.send(img);
}
