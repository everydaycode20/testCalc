
var screen = document.getElementById("texto");

const btns = document.querySelectorAll(".btn");

var number = 0;

var array = [];

var contador = 0;

var prevN;

var nextN;

var status = "nr";

var mode;

screen.value = 0;

btns.forEach(function(e){

    e.addEventListener("click", function(b){

        const btn = b.currentTarget.classList;

        if(btn.contains("clear")){
            screen.value = 0;
            array = [];
            contador = 0;
        }
        if(btn.contains("divide")){
            array = [];
            contador = 0;
            status = "r";
            mode = 1;
            prevN = parseInt(screen.value).toFixed(5);
            if(Number.isInteger(prevN)){
                prevN = screen.value;
            }
            else{
                prevN = parseFloat(screen.value).toFixed(5);
            }
        }
        if(btn.contains("sum")){
            array = [];
            contador = 0;
            status = "r";
            mode = 2;
            prevN = parseInt(screen.value).toFixed(5);
            if(Number.isInteger(prevN)){
                prevN = screen.value;
            }
            else{
                prevN = parseFloat(screen.value).toFixed(5);
            }
        }
        if(btn.contains("minus")){
            array = [];
            contador = 0;
            status = "r";
            mode = 3;
            prevN = parseInt(screen.value).toFixed(5);
            if(Number.isInteger(prevN)){
                prevN = parseInt(screen.value);
            }
            if(!Number.isInteger(prevN)){
                prevN = parseFloat(screen.value).toFixed(5);
            }
        }
        if(btn.contains("multiply")){
            array = [];
            contador = 0;
            status = "r";
            mode = 4;
            console.log("multi");
            prevN = parseInt(screen.value);
            if(Number.isInteger(prevN)){
                prevN = screen.value;
            }
            else{
                prevN = parseFloat(screen.value).toFixed(5);
            }
        }
        if(btn.contains("backspace")){
            array.pop()
            screen.value =  array.join('');
            nextN = screen.value;
            if(array.length == 0){
                screen.value = 0;
            }
            console.log(nextN);
        }
        if(btn.contains("one")){
            screen.value = num(1);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("two")){
            screen.value = num(2);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("three")){
            screen.value = num(3);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("four")){
            screen.value = num(4);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("five")){
            screen.value = num(5);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("six")){
            screen.value = num(6);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("seven")){
            screen.value = num(7);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("eight")){
            screen.value = num(8);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("nine")){
            screen.value = num(9);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("zero")){
            screen.value = num(0);
            nextN = parseInt(screen.value);
        }
        else if(btn.contains("equal")){
            var result = total(mode,prevN, nextN);

            screen.value = result;

            array = [];
        }
        var y = array.toString();
        console.log(y);
    });
    
});

function num(ne){

    array.push(parseInt(ne));
    
    return parseInt(array.join(''));
}

function total(stat,prevNumber,nextNumber){
    if(stat == 1){
        console.log(prevNumber + " / " + nextNumber);
        if(Number.isInteger(parseInt(prevNumber)) && Number.isInteger(parseInt(nextNumber))){
            var result = (parseInt(prevNumber)/parseInt(nextNumber));
            console.log("funciona 1/");
        }
        if(Number.isInteger(parseInt(prevNumber)) && !Number.isInteger(parseFloat(nextNumber))){
            var result = (parseInt(prevNumber)/parseFloat(nextNumber).toFixed(5));
            console.log("funciona 2/");
        }
        if(Number.isInteger(parseInt(nextNumber)) && !Number.isInteger(parseFloat(prevNumber))){
            var result = (parseFloat(prevNumber)/parseInt(nextNumber)).toFixed(5);
            console.log("funciona 3/");
        }        

        return result;
    }
    if(stat == 2){
        if(Number.isInteger(parseInt(prevNumber)) && Number.isInteger(parseInt(nextNumber))){
            var result = (parseInt(prevNumber)+parseInt(nextNumber));
            console.log("funciona 1+");
        }
        if(Number.isInteger(parseInt(prevNumber)) && !Number.isInteger(parseFloat(nextNumber))){
            var result = (parseInt(prevNumber)+parseFloat(nextNumber).toFixed(5));
            console.log("funciona 2+");
        }
        if(Number.isInteger(parseInt(nextNumber)) && !Number.isInteger(parseFloat(prevNumber))){
            var result = (parseFloat(prevNumber)+parseInt(nextNumber)).toFixed(5);
            console.log("funciona 3+");
        }

        console.log(prevNumber + " + " + nextNumber);

        return result;
    }
    if(stat == 3){

        if(Number.isInteger(parseInt(prevNumber)) && Number.isInteger(parseInt(nextNumber))){
            var result = (parseInt(prevNumber)-parseInt(nextNumber));
            console.log("funciona 1+");
        }
        if(Number.isInteger(parseInt(prevNumber)) && !Number.isInteger(parseFloat(nextNumber))){
            var result = (parseInt(prevNumber)-parseFloat(nextNumber).toFixed(5));
            console.log("funciona 2+");
        }
        if(Number.isInteger(parseInt(nextNumber)) && !Number.isInteger(parseFloat(prevNumber))){
            var result = (parseFloat(prevNumber)-parseInt(nextNumber)).toFixed(5);
            console.log("funciona 3+");
        }

        console.log(prevNumber + " - " + nextNumber);

        return result;
    }
    if(stat == 4){
        if(Number.isInteger(parseInt(prevNumber)) && Number.isInteger(parseInt(nextNumber))){
            var result = (parseInt(prevNumber)*parseInt(nextNumber));
            console.log("funciona 1+");
        }
        if(Number.isInteger(parseInt(prevNumber)) && !Number.isInteger(parseFloat(nextNumber))){
            var result = (parseInt(prevNumber)*parseFloat(nextNumber).toFixed(5));
            console.log("funciona 2+");
        }
        if(Number.isInteger(parseInt(nextNumber)) && !Number.isInteger(parseFloat(prevNumber))){
            var result = (parseFloat(prevNumber)*parseInt(nextNumber)).toFixed(5);
            console.log("funciona 3+");
        }
        return result;
    }
    
}