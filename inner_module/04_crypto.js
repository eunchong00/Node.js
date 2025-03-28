// inner_module/04_crypto.js
const crypto = require('crypto');
const data = 'pw1234';
let secret = 'qwertyuioplkjhgfdsazxcvbnm';
let encData = crypto.createHmac('sha512', secret) //알고리즘
                    .update(data)
                    .digest('base64');
console.log(encData);

