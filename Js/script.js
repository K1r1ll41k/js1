// let userName = "дед Максим"
// let years = 12

// console.log("Привіт мене звати " + userName + " мені "+ years+ "років")
//  let x = 10;
//  let y = 2;
//  x = 21;

//  let u = x+y;

//  console.log(u);


// let rNum = Math.floor(Math.random()*100);

// console.log(rNum);

// let storona = rNum;
// let ploscha = storona * storona;

// console.log("Сторона квадрата дорівнює " + storona + "cм");
// console.log("Площа квадрата зі стороною " + storona + " дорівнює " + ploscha + "см");


// let stor1 = Math.floor(Math.random() * 100);
// let stor2 = Math.floor(Math.random() * 100);

// let perim = stor1 * 2 + stor2 * 2;

// console.log("Перша сторона прямокутника " + stor1 + "cм")

// console.log("Друга сторона прямокутника " + stor2 + "cм")

// console.log("Периметр прямокутника " + perim + "cм")


// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");

// console.log(`${num1} + ${num2} = ${num1 + num2}`);


// let conf = confirm("whot sup?");
// alert(conf);

// let userName = prompt("Введіть своє ім'я");
// let userOld = +prompt("Введіть свій вік");

// let userYear = 2023 - userOld;
// console.log("Привіт, " + userName);
// console.log("Вітаю у моєму скрипті");
// console.log("Твій рік народження: " + userYear);



// let num = +prompt("enter number");
// console.log("Введене число: " + num);
// console.log("Наступне: " + (num + 1));
// console.log("Наступне: " + (num + 2));



// let rCube = +prompt("Введіть ребро куба");
// console.log("Ребро куба " + rCube);
// let V = rCube**3;
// let S = rCube * rCube *6;
// console.log("Об'єм куба " + V);
// console.log("Площа поверхні куба " + S);



// let val = confirm("are you developer?");
// if(val) {
//     alert("whot sup bro?");
// }



// let pass1 = prompt("enter password");
// let pass2 = prompt("confirm password");

// if(pass1==pass2){
//     alert("Password ascepted")
// }

// if(pass1 != pass2){
//     alert("Password not ascepted")
// }



// let userOld = +prompt("Введіть свій вік");
// if (userOld < 18) {
//     alert("Ви підліток");
// } else {
//     alert("Ви доросла людина")
// }



// let num1 = Math.floor(Math.random()*100);
// let num2 = Math.floor(Math.random()*100);

// let answer = +prompt("Скільки буде " + num1 + " + " + num2)

// if(num1 + num2 == answer) {
//     alert("Молодець, вірно!");
// } else {
//     alert("Не вірно!");
// }


// let count = 10
// while(count>0) {
//     console.log("Привіт світ!");
//     count --;
// }



// let num;
// let max = 0;

// do{
//     num = +prompt("enter number");
//     if(num>max) {
//         max = num
//     }
// }while(num);

// console.log("max number " + max);



// for (let i = 0; i < 3; i++) {
//     alert(i);
// }



// for(let i = 10; i>0; i--) {
//     console.log("Привіт світ!");
// }



// for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 1) {
//         console.log(i);
//     }
// }



// while(true) {
//     let num = +prompt("enter >10");
//     if (num < 10) {
//         continue;
//     }else {
//         break;
//     }
// }



// let num = +prompt("enter number");
// let sum = 0;
// for (let i = 0; i < num; i++){
//     if(num % i == 0) {
//         sum += i;
//     }
// }
// console.log("сумма подільників "+sum)



// let i = 0;
// while(i < 5)
// {i++
//     console.log(`значення ${i}`);
// };



// for (let x = 1; x < 10; x++) {
//     console.log("Таблиця множення на " + x);
//     for (let y =1; y  < 10; y++) {
//         console.log(`${y} * ${x} = ${x * y}`);
//     }
//     console.log('');
// }



// let side = prompt();
// let str = "";

// drawBox();

// function drawBox() {
//     for(let i = 1; i <= side; i++){
//         for(let j = 1; j <= side; j++) {
//             str += " * ";
//         }
//         console.log(str);
//         str = ""
//     }
// }



// let kilometrs = +prompt("enter kilometers");
// function convert_to_miles(km){
//     return km * 0.6214;
// }
// let result = convert_to_miles(kilometrs);
// alert(result);



// let w = +prompt("enter width");
// let h = +prompt("enter height");
// let l = +prompt("enter length");

// function volume(a,b,c) {
//     return a*b*c;
// }
// alert(volume(w,h,l));



// let malyavka = confirm("тобі більше ніж 7 років?");
// if(malyavka) {
//     alert("гайда в школу, давай давай оп оп")
// } else{
//     alert("доживи до цього мялявка")
// }



// let n1 = +prompt("введіть 1 число");
// let n2 = +prompt("введіть 2 число");
// if(n1>n2) {
//     alert("Перше число більше");
// } else if(n1==n2){
//     alert("числа рівні");
// } else{
//     alert("Друге число більше");
// }



// let n1 = +prompt("введіть число від 1 до 3");
// if(n1==1) {
//     alert("Молодeць ти ввів 1");
// } else if(n1==2){
//     alert("Молодець ти ввів 2");
// } else if(n1==3){
//     alert("Молодець ти ввів 3");
// } else {
//     alert("Ну ти математик")
// }



// let a = Math.floor(Math.random()*100);
// let b = Math.floor(Math.random()*100);

// let result = +prompt("Скільки буде " + a + " + " + b);

// if (result == (a+b)) {
//     alert("Молодець, вірно!");
// } else {
//     alert("Не вірно!!!");
// }



// let fruits = ["Яблуко", "Апельсин", "Слива"];
// fruits[3] = "Ананас"
// console.log(fruits.length);

// let fruits = [10,20,30,40,50,60,70,80];
// for(let i=0; i < fruits.length; i++){
//     if (i % 2 == 0) {
//         fruits[i]=fruits[i] * 2; 
//     }

// }
// console.log(fruits);



// let games = ["wot blitz", "minecraft", "rocket league"]
// let reverseGames = [];

// for (let i = 0; i < games.length; i++){
//     reverseGames.push(games[games.length - 1 - i]);

// }
// console.log(reverseGames);



// let userNumber = +prompt("Вкажіть кількість елементу масиву");
// let arr = [];
// let sumArr = 0;
// for(let i = 0; i < userNumber; i++){
//     let randomValue = Math.floor(Math.random()*100);
//     arr.push(randomValue);
//     sumArr += randomValue;
// }
// console.log(arr);
// console.log(sumArr);

function rnd(a) {
    return Math.floor(Math.random() * a);
}



let JStitle = document.getElementById("JStitle");
JStitle.addEventListener("click", function () {
    document.body.style.backgroundColor = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`;
});


let bob = document.getElementById("bob");
console.log("bob");

bob.addEventListener("click", function () {
    bob.style.backgroundColor = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`;
    // bob.style.width = `${rnd(800)}px`;
    bob.style.color = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`;
    bob.innerHTML = `${rnd(100)}% крутості блока`;
    bob.style.transform = `rotate(${rnd(360)}deg)`;
})



let task_item1 = document.getElementById("task_item1");
let task_item2 = document.getElementById("task_item2");
let task_item3 = document.getElementById("task_item3");
let task_item4 = document.getElementById("task_item4");
let task_item5 = document.getElementById("task_item5");
let task_item6 = document.getElementById("task_item6");

task_item1.addEventListener("click", function () {
    task_item1.style.color = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
});
task_item2.addEventListener("click", function () {
    task_item2.style.borderRadius = "30px";
    setTimeout(() => {
        task_item2.style.borderRadius = "";
    }, 2000);
});
task_item3.addEventListener("click", function () {
    task_item3.style.backgroundColor = "royalblue"
    setTimeout(() => {
        task_item3.style.backgroundColor = ""
    }, 2000);
});
task_item4.addEventListener("click", function () {
    task_item4.style.backgroundColor = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
});
task_item5.addEventListener("click", function () {
    task_item5.style.fontFamily = "sans-serif";
    setTimeout(() => {
        task_item5.style.fontFamily = ""
    }, 2000);
});
task_item6.addEventListener("click", function () {
    task_item6.style.fontSize = "10px"
    setTimeout(() => {
        task_item6.style.fontSize = "";
    }, 2000);
})

let task_item6_flag = true;
task_item6.addEventListener("click", function () {
    if (task_item6_flag) {
        task_item6.style.fontSize = "10px";
        task_item6_flag = !task_item6_flag
    } else {
        task_item6.style.fontSize = "";
        task_item6_flag = !task_item6_flag
    }
})
let blink_block = document.querySelector(".blink_block");
let bb_flag = false;
setInterval(() => {
    if (bb_flag) {
        blink_block.style.opacity = "1";
    } else {
        blink_block.style.opacity = "0";
    }
    bb_flag = !bb_flag
}, 1000);

let inp_temp = document.querySelector(".inp_temp");
let inp_btn = document.querySelector(".inp_btn");

inp_btn.addEventListener("click", function () {
    let curVal = inp_temp.value;
    inp_btn.style.backgroundColor = curVal;
    inp_temp.value = "";
});


let box2 = document.querySelector(".box2");
let box2_flag = true;
box2.addEventListener("click", function () {
    if (box2_flag) {
        box2.style.backgroundColor = "red";
    } else {
        box2.style.backgroundColor = "";
    }
    box2_flag = !box2_flag
});



let box1553 = document.querySelector(".box1553");
let box1553_flag = 1;
box1553.addEventListener("click", function () {

    if (box1553_flag == 1) {
        box1553.style.borderRadius = "50%";
        box1553_flag = 2;
    } else if (box1553_flag == 2) {
        box1553.style.backgroundColor = "red";
        box1553_flag = 0;
    } else {
        box1553.style.borderRadius = "";
        box1553.style.backgroundColor = "";
        box1553_flag = 1;
    }
});



let text_inp = document.querySelector(".text_inp");
let text_p = document.querySelector(".text_p");

text_inp.addEventListener("input", function () {
    text_p.innerHTML = text_inp.value;
})



let box4 = document.querySelector(".box4");
let box4_flag = 1;
box4.addEventListener("click", function () {
    if (box4_flag == 1) {
        box4.style.backgroundColor = "green";
        box4_flag = 2;
    } else if (box4_flag == 2) {
        box4.style.width = "300px";
        box4_flag = 0;
    } else {
        box4.style.width = "";
        box4.style.backgroundColor = "";
        box4_flag = 1;
    }
});


let box5 = document.querySelector(".box5");
box5.addEventListener("click", function () {

    box5.style.backgroundColor = "red";
    box5.style.borderRadius = "15px";
    box5.style.width = "200px";
    setTimeout(() => {
        box5.style.width = "";
        box5.style.borderRadius = "";
        box5.style.backgroundColor = "";
    }, 2000);

});



setInterval(() => {
    if (box4_flag == 1) {
        box4.style.backgroundColor = "green";
        box4_flag = 2;
    } else if (box4_flag == 2) {
        box4.style.width = "300px";
        box4_flag = 0;
    } else {
        box4.style.width = "";
        box4.style.backgroundColor = "";
        box4_flag = 1;
    }
}, 2000);



let tl_inp = document.querySelector(".taskList_input");
let tl_btn = document.querySelector(".taskList_btn");
let tl_ol = document.querySelector(".taskList_ol");
let tl_count = 1;
function add() {
    let curVal = tl_inp.value;

    if(curVal) {
        let tl_item = document.createElement("li");
    tl_item.textContent = curVal;
    tl_item.id = `item${tl_count}`;
    tl_item.setAttribute("onclick", `removelItem(${tl_count})`);
    tl_count++;
    tl_ol.append(tl_item);
    tl_inp.value = "";
    }
}
tl_btn.addEventListener("click", add);


function removelItem(arg) {
    let elem = document.getElementById(`item${arg}`);
    elem.style.textDecoration = "line-through";
    setTimeout(() => {elem.remove()}, 500);
}