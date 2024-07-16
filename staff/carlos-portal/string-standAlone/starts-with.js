//Starts with
/*Me dan una palabra y un patron por el que empieza la palabra 
debo comprobar que asi sea y que hay match en los caracteres




*/

function empieza(string, starter) {
    if (string == null || starter == null|| starter.length>string.length) {
        return "";
        // aquqi un if por si se dan valores no validos o el patron es mayor que la palabra 

    }
    let i = 0;
    while (i < starter.length) {// hago un bucle que itere sobre el starter y compruebo que el  starter esta incluido
        if (string[i] !== starter[i]) {
            return false;
        }
        i++;
    }
    return true; //si todo concuerda 
}

//Tests
let result1 = empieza('console log', 'log');
console.assert(result1 === 'console log'.empieza('log'), { result: result1, message: 'Test 1 no pasado' });
let result2 = empieza('javascript', 'script');
console.assert(result2 === 'javascript'.empieza('script'), { result: result2, message: 'Test 2 no pasado' });
let result3 = empieza('abcde', 'f');
console.assert(result3 === 'abcde'.empieza('e'), { result: result3, message: 'Test 3 no pasado' });

let result4 = empieza('console log', 'console');
console.assert(result4 === 'console log'.empieza('console'), { result: result4, message: 'Test 4 no pasado' });
let result5 = empieza('javascript', 'script');
console.assert(result5 === 'javascript'.empieza('java'), { result: result5, message: 'Test 5 no pasado' });
let result6 = empieza('abcde', 'f');
console.assert(result6 === 'abcde'.empieza('z'), { result: result6, message: 'Test 6 no pasado' });
