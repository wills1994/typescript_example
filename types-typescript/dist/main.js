"use strict";
// Number Explicit
let phone;
//phone = '+367128815'; --> Error de tipo
phone = 924234669;
// Numero inferido
let phoneMovil = 637128815;
// let phoneMovil = true; --> Error esta definido antes
let hex = 0xf00d;
let binary = 0b101;
let octal = 0o744;
// Type: Boolean
let isPro;
isPro = true;
// isPro = 1; --> Error
// String
let username = 'anbreaker';
username = 'Javier';
// username = true; --> Error
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo =>', userInfo);
