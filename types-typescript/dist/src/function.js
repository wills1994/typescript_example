"use strict";
// Funciones en TypeScript
// Usamos TS, definimos tipos para paramentros
/*
function createPicture(title:string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia', '2020-03-20'); // --> Error
*/
// Parametros opcionales
function createPicture(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
// Flat Array Function
let createPic = (title, date, size) => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};
const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);
//Tipo de retorno en TypeScript
function handleError(code, message) {
    // Procesamineto
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has ocurred';
    }
}
let result = handleError(200, 'OK'); // Devuelve un string
console.log('result', result);
try {
    result = handleError(404, 'error'); // Devuelve un error que debemos capturar.
    console.log('result', result);
}
catch (error) {
    console.log('Se produjo un error y lo capturamos');
}
