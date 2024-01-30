let cvs = document.getElementById("cvs");
let ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;


let lw = 10;
let myColor = "black";
let isMouseDown = false;

let fillBtn = document.getElementById("fill");
let clearBtn = document.getElementById("clear");


let colorPicker = document.getElementById("color");
let linW = document.getElementById("lineW");
let lineWeightValue = document.getElementById("lineWeightValue");


colorPicker.addEventListener("chenge", function () {
    myColor = colorPicker.value;
});

lineWeightValue.addEventListener("input", function () {
    lw = lineW.value;
    lineWeightValue.innerHTML - lw;
});

cvs.addEventListener("mousedown", function () {
    isMouseDown = true;
});

cvs.addEventListener("mouseup", function () {
    ctx.beginPath();
});


function clearAll() {
    ctx.clearRect(0,0, cvs.width, cvs.height);
}

function fillIn() {
    ctx.fillStyle = myColor;
    ctx.fillRect(0,0, cvs.width, cvs.height);
}

fillBtn.onclick = function () {
    fillIn();
}

clearBtn.onclick = function () {
    clearAll();
}

cvs.addEventListener("mousemove", function (event) {
    if (isMouseDown) {
        ctx.lineWidth = lw;
        ctx.fillStyle = myColor;
        ctx.strokeStyle = myColor;
        ctx.lineTo(event.clientX,event.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(event.clientX,event.clientY, lw / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(event.clientX,event.clientY);
    }
    
    if (weather="cool") {
        console.log('cool')
    } else {
        console.log('no');
    }
});



cvs.addEventListener("touchstart", function() {
    isMouseDown = true;
});

cvs.addEventListener("touchend", function () {
    isMouseDown = false;
});

cvs.addEventListener("touchmove", function (event) {
    if (isMouseDown) {
        ctx.lineWidth = lw;
        ctx.fillStyle = myColor;
        ctx.strokeStyle = myColor;
        ctx.lineTo(event.touches[0].clientX, event.touches[0].clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(event.touches[0].clientX, event.touches[0].clientY, lw / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(event.touches[0].clientX, event.touches[0].clientY);
    }
});