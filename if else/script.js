function checkAge (age) {
    if (age > 18 ){
        console.log('Pass')
    } else if (age === 18){
        console.warn('Ok, but not enogh')
    } else {
        console.error('You shall not pass')
    }
}
checkAge(18)
checkAge(21)
checkAge(15)


function checkNum (num) {
    if (num > 0 ){
        console.log('1')
    } else if (num < 0){
        console.warn('-1')
    } else {
        console.error('0')
    }
}
checkNum(0)
checkNum(1)
checkNum(-1)


let result;
let a = 1;
let b = 2;

 (a + b < 4) ? result = 'Нижче' : result = 'Вище';



let message;

 (login == 'Працівник') ?
message = 'Привіт' :
  (login == 'Директор') ?
    message = 'Вітаю' :
  (login == '') ?
    message = 'Немає логіну'
 :
    message = '';
