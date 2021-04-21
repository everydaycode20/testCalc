
var screen = document.getElementById("texto");

const btns = document.querySelectorAll(".btn");

var number = 0;

var array = [];

var contador = 0;

var prevN = 0;

var nextN = 0;

var status = "nr";

var mode = "e";

screen.value = 0;

let cntdr = false;

btns.forEach((e) => {

    e.addEventListener("click", (b) => {

        const btn = b.currentTarget.classList;
        
        let number = btn[1];
        
        if (btn.contains(number) && parseInt(number) <= 9) {
            screen.value = num(parseInt(number));
        }
        else if(btn.contains("point")){
            if (contador >= 1) {
                screen.value = num("");
            }
            else{
                if (screen.value === "0") {
                    array.pop();
                    screen.value = num("0.");
                    contador++;
                }
                else{
                    contador++;
                    screen.value = num(".");
                }
            }
        }
        else if(btn.contains("backspace")){
            let char = array.pop();
            screen.value =  array.join('');
            if(array.length == 0){
                screen.value = 0;
            }
            if (char === ".") {
                contador = 0;
            }
        }
        else if(btn.contains("clear")){
            array = [];
            screen.value = num(0);
            cntdr = false;
            mode = "e";
            contador = 0;
        }
        else if(btn.contains("sum")){
            prevN = screen.value;
            mode = "s";
            array = [];
            contador = 0;
        }
        else if (btn.contains("minus")) {
            prevN = screen.value;
            mode = "m";
            array = [];
            contador = 0;
        }
        else if (btn.contains("minus")) {
            prevN = screen.value;
            mode = "m";
            array = [];
            contador = 0;
        }
        else if (btn.contains("multiply")) {
            prevN = screen.value;
            mode = "multi";
            array = [];
            contador = 0;
        }
        else if (btn.contains("divide")) {
            prevN = screen.value;
            mode = "div";
            array = [];
            contador = 0;
        }
        else if(btn.contains("equal")){
            nextN = screen.value;
            let result = total(prevN, nextN, mode);

            screen.value = result;
            if(typeof result == "string"){
                screen.style.fontSize = "25px";
            }
            
            cntdr = false;
            array = [];
        }
    });
});

let cont = 0;
let arr = [];

let num = ne => {
    if(typeof ne == "string"){
        if (ne === "") {
            array.push();
            return array.join('');
        }
        else{
            array.push(ne);
            return array.join('');
        }
    }
    else{
        array.push(parseFloat(ne));
        return parseFloat(array.join(''));
    }
}

let total = (prevNumber, nextNumber, op) => {
    let resultado;
    if (op === "s") {
        resultado = (parseFloat(prevNumber) + parseFloat(nextNumber));
    }
    else if (op === "m") {
        resultado = (parseFloat(prevNumber) - parseFloat(nextNumber));
    }
    else if (op === "multi") {
        resultado = (parseFloat(prevNumber) * parseFloat(nextNumber));
    }
    else if(op === "div"){
        resultado = (parseFloat(prevNumber) / parseFloat(nextNumber));
    }
    
    return resultado;
}