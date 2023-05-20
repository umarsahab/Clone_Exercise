var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')
var button5 = document.getElementById('btn5')
var button6 = document.getElementById('btn6')
var button7 = document.getElementById('btn7')
var button8 = document.getElementById('btn8')
var button9 = document.getElementById('btn9')





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
button8.addEventListener('click', colorsNames)
button9.addEventListener('click', bgColorNames)

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
var userTextColor = false;
var color = ['grey','deepink','red','green','orange','blue','purple','black','white','yellow']
function colorsNames(color){
    var userColor = +prompt("Which color do you want inter the number 1.Grey, 2.deeppink, 3.Red, 4.Green, 5.Orange, 6.Blue, 7.Purple, 8.Black, 9.White, 10.Yellow ")
    if(userColor === 0 && userTextColor){
        document.getElementById('bold').style.color = 'black'
    }else if(userColor === 1){
        document.getElementById('bold').style.color = 'grey'; 
        // userTextColor = false; 
    }else if(userColor === 2){
        document.getElementById('bold').style.color = 'deeppink'  
        // userTextColor = false; 
    }else if(userColor === 3){
        document.getElementById('bold').style.color =  'red';
        
    }else if(userColor === 4){
        document.getElementById('bold').style.color = 'green';  
    }else if(userColor === 5){
        document.getElementById('bold').style.color = 'orange';
    }else if(userColor === 6){
        document.getElementById('bold').style.color = 'blue';
    }else if(userColor === 7){
        document.getElementById('bold').style.color = 'purple';  
    }else if(userColor === 8){
        document.getElementById('bold').style.color = 'black';  
        document.getElementById('bold').style.backgroundColor = 'white';  

    }else if(userColor === 9){
        document.getElementById('bold').style.color = 'white'; 
        document.getElementById('bold').style.backgroundColor = 'black';  
    }else if(userColor === 10){
        document.getElementById('bold').style.color = 'yellow';  
    }else{
        alert('Please select the coloe')
    }
    userTextColor = true;
}
var userBgColor = false;
function bgColorNames(){
    var userbgColor = +prompt("Which color do you want inter the number 1.Grey, 2.deeppink, 3.Red, 4.Green, 5.Orange, 6.Blue, 7.Purple, 8.Black, 9.White, 10.Yellow ")
    if(userbgColor === 0 && userBgColor){
        document.getElementById('bold').style.backgroundColor = 'black'
    }else if(userbgColor === 1){
        document.getElementById('bold').style.backgroundColor = 'grey'; 
        // userTextColor = false; 
    }else if(userbgColor === 2){
        document.getElementById('bold').style.backgroundColor = 'deeppink'  
        // userTextColor = false; 
    }else if(userbgColor === 3){
        document.getElementById('bold').style.backgroundColor =  'red';
        
    }else if(userbgColor === 4){
        document.getElementById('bold').style.backgroundColor = 'green';  
    }else if(userbgColor === 5){
        document.getElementById('bold').style.backgroundColor = 'orange';
    }else if(userbgColor === 6){
        document.getElementById('bold').style.backgroundColor = 'blue';
    }else if(userbgColor === 7){
        document.getElementById('bold').style.backgroundColor = 'purple';  
    }else if(userbgColor === 8){
        document.getElementById('bold').style.color = 'white';  
        document.getElementById('bold').style.backgroundColor = 'black';  

    }else if(userbgColor === 9){
        document.getElementById('bold').style.backgroundColor = 'white'; 
        document.getElementById('bold').style.color = 'black';  
    }else if(userbgColor === 10){
        document.getElementById('bold').style.backgroundColor = 'yellow';  
    }else{
        alert('Please select the coloe')
    }
    userBgColor = true;
}



