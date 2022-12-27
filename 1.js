var prNum, tempOut;
prNum = Math.floor((Math.random() * 20) + 1);
console.log(prNum);
 
 
function f1(){
    var num, out;
 
    num = document.getElementById('mynum').value;
    out = document.getElementById('out');
 
    if (num == prNum) {
        out.innerHTML = 'Вы угадали';
    }
    else if (num > prNum){
        out.innerHTML = 'Вы ввели число больше чем нужно';
    }
    else {
        out.innerHTML = 'Вы ввели число меньше чем нужно';
    }
 
}