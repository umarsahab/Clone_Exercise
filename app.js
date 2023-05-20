var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')
var button5 = document.getElementById('btn5')
var button6 = document.getElementById('btn6')
var button7 = document.getElementById('btn7')





var textBold = document.getElementById('bold').value





var bold = false;
var italic = false;
var centreText = false;
var rightText = false;
var leftText = false;
var eraseText = false;
var underLine = false;

button1.addEventListener('click', boldTheText)
button2.addEventListener('click', italicTheText)
button3.addEventListener('click', centreTheText)
button4.addEventListener('click', rightTheText)
button5.addEventListener('click', leftTheText)
button6.addEventListener('click', underLineTheText)
button7.addEventListener('click', eraseAllText)

function boldTheText() {

    if (bold) {
        document.getElementById('bold').style.fontWeight = '500';
        document.getElementById('btn1').style.fontWeight = '500';
        bold = false;
    } else {
        document.getElementById('bold').style.fontWeight = 'bold';
        document.getElementById('btn1').style.fontWeight = 'bold';
        bold = true;
    }
}
function italicTheText() {
    if (italic) {
        document.getElementById('bold').style.fontStyle = 'normal';
        document.getElementById('btn2').style.fontStyle = 'normal';
        italic = false;
    } else {
        document.getElementById('bold').style.fontStyle = 'italic';
        document.getElementById('btn2').style.fontStyle = 'italic';
        italic = true;
    }
}
function centreTheText() {
    if (centreText) {
        document.getElementById('bold').style.textAlign = 'start';
        document.getElementById('btn3').style.textAlign = 'start';
        centreText = false;
    } else {
        document.getElementById('bold').style.textAlign = 'center';
        document.getElementById('btn3').style.textAlign = 'center';
        centreText = true;
    }
}

function rightTheText() {
    if (rightText) {
        document.getElementById('bold').style.textAlign = 'start';
        document.getElementById('btn4').style.textAlign = 'start';
        rightText = false;
    } else {
        document.getElementById('bold').style.textAlign = 'right';
        document.getElementById('btn4').style.textAlign = 'right';
        rightText = true;
    }
}
function leftTheText() {
    if (leftText) {
        document.getElementById('bold').style.textAlign = 'right';
        document.getElementById('btn5').style.textAlign = 'right';
        leftText = false;
    } else {
        document.getElementById('bold').style.textAlign = 'left';
        document.getElementById('btn5').style.textAlign = 'left';
        leftText = true;
    }
}
function underLineTheText() {
    if (underLine) {
        document.getElementById('bold').style.textDecoration = '';
        document.getElementById('btn6').style.textDecoration = 'none';
        underLine = false;
    } else {
        document.getElementById('bold').style.textDecoration = 'underline';
        document.getElementById('btn6').style.textDecoration = 'underline';
        underLine = true;
    }
}

function eraseAllText() {
    if (eraseText) {
        document.getElementById('bold').value = ' ';
        eraseText = false;
    } else {
        document.getElementById('bold').value = document.getElementById('bold').value
        eraseText = true;
    }
}

var color0 = document.getElementById('grey')
var color1 = document.getElementById('deepink')
var color2 = document.getElementById('red')
var color3 = document.getElementById('green')
var color4 = document.getElementById('orange')
var color5 = document.getElementById('Blue')
var color6 = document.getElementById('Purple')
var color7 = document.getElementById('Black')
var color8 = document.getElementById('White')
var color9 = document.getElementById('Yellow')
var grey = false;
var pink = false;
var red = false;
var green = false;
var orange = false;
var blue = false;
var purple = false;
var black = false;
var white = false;
var yellow = false;

color0.addEventListener('click' , changeColor1) 
color1.addEventListener('click', changeColor2)
color2.addEventListener('click', changeColor3)
color3.addEventListener('click', changeColor4)
color4.addEventListener('click', changeColor5)
color5.addEventListener('click', changeColor6)
color6.addEventListener('click', changeColor7)
color7.addEventListener('click', changeColor8)
color8.addEventListener('click', changeColor9)
color9.addEventListener('click', changeColor10)

function changeColor1() {
    if (grey) {
        document.getElementById('bold').style.color = 'black';
        grey = false;
    } else {
        document.getElementById('bold').style.color = 'grey';
        grey = true;
    }
}
function changeColor2() {
    if (pink) {
        document.getElementById('bold').style.color = 'black';
        pink = false;
    } else {
        document.getElementById('bold').style.color = 'deeppink';
        pink = true;
    }
}
function changeColor3() {
    if (red) {
        document.getElementById('bold').style.color = 'black';
        red = false;
    } else {
        document.getElementById('bold').style.color = 'red';
        red = true;
    }
}
function changeColor4() {
    if (green) {
        document.getElementById('bold').style.color = 'black';
        grey = false;
    } else {
        document.getElementById('bold').style.color = 'green';
        green = true;
    }
}
function changeColor5() {
    if (orange) {
        document.getElementById('bold').style.color = 'black';
        orange = false;
    } else {
        document.getElementById('bold').style.color = 'orange';
        orange = true;
    }
}
function changeColor6() {
    if (blue) {
        document.getElementById('bold').style.color = 'black';
        blue = false;
    } else {
        document.getElementById('bold').style.color = 'blue';
        blue = true;
    }
}
function changeColor7() {
    if (purple) {
        document.getElementById('bold').style.color = 'black';
        purple = false;
    } else {
        document.getElementById('bold').style.color = 'purple';
        purple = true;
    }
}
function changeColor8() {
    if (black) {
        document.getElementById('bold').style.color = 'black';
        black = false;
    } else {
        document.getElementById('bold').style.color = 'black';
        black = true;
    }
}
function changeColor9() {
    if (white) {
        document.getElementById('bold').style.color = 'black';
        white = false;
    } else {
        document.getElementById('bold').style.backgroundColor = 'black';

        document.getElementById('bold').style.color = 'white';
        white = true;
    }
}
function changeColor10() {
    if (yellow) {
        document.getElementById('bold').style.color = 'black';
        yellow = false;
    } else {
        document.getElementById('bold').style.color = 'yrllow';
        yellow = true;
    }
}

var greyColor = document.getElementById('grey')
greyColor.addEventListener('click' , changeColor1)
var grey = false

function changeColor1(){
    if(grey){ 
    document.getElementById('bold').style.color = 'black';
    grey = true
    }else{
    document.getElementById('bold').style.color = 'grey';
grey = true;
    }
}