function calculate() {
    var num1 = parseInt(document.querySelector("#num1").value);
    var num2 = parseInt(document.querySelector("#num2").value);
    var op = document.querySelector("#op").value;
    op = op.trim();

    if (op == "+") {
        var result = num1 + num2;
        document.querySelector("#result").innerHTML = `${num1} + ${num2} = ${result}`;    
    }
    else if (op == "-") {
        var result = num1 - num2;
        document.querySelector("#result").innerHTML = `${num1} - ${num2} = ${result}`;  
    }
    else if (op == "*") {
        var result = num1 * num2;
        document.querySelector("#result").innerHTML = `${num1} * ${num2} = ${result}`;  
    }
    else if (op == "//") {
        var result = parseInt(num1 / num2);
        document.querySelector("#result").innerHTML = `${num1} // ${num2} = ${result}`;
    } 
    else if (op == "/") {
        var result = num1 / num2;
        document.querySelector("#result").innerHTML = `${num1} / ${num2} = ${result}`;  
    }
    else if (op == "%") {
        var result = num1 % num2;
        document.querySelector("#result").innerHTML = `${num1} % ${num2} = ${result}`;   
    }
    
}

function calculatePrice() {
    var price = document.querySelector("#price").value;
    nota100 = parseInt(price / 100);
    nota50 = parseInt((price % 100) / 50);
    nota20 = parseInt(((price % 100) % 50) / 20);
    nota10 = parseInt((((price % 100) % 50) % 20) / 10);
    nota5 = parseInt(((((price % 100) % 50) % 20) % 10) / 5);
    nota2 = parseInt((((((price % 100) % 50) % 20) % 10) % 5) / 2);
    nota1 = parseInt((((((price % 100) % 50) % 20) % 10) % 5) % 2);

   document.querySelector("#troco100").innerHTML = nota100 + " notas de R$100";
   document.querySelector("#troco50").innerHTML = nota50 + " notas de R$50";
   document.querySelector("#troco20").innerHTML = nota20 + " notas de R$20";
   document.querySelector("#troco10").innerHTML = nota10 + " notas de R$10";
   document.querySelector("#troco5").innerHTML = nota5 + " notas de R$5";
   document.querySelector("#troco2").innerHTML = nota2 + " notas de R$2";
   document.querySelector("#troco1").innerHTML = nota1 + " notas de R$1";
}

function order() {
    var focus = document.querySelector("#focus").value
    var lista = document.querySelector("#array").value;
    if (lista.includes(" ")) {
        document.querySelector("#lista").innerHTML = "Input Inválido";
    }
    else {
        lista = lista.split(",").map(Number);

        for (i = 0; i < lista.length; i++) {
            for (j = 0; j < lista.length - 1; j++) {
                if (lista[j] > lista[j + 1]) {
                    let troca = 0
                    troca = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = troca;
                }
            }
        }

        for (i = 0; i < lista.length; i++) {
            if (lista[i] == focus) {
                document.querySelector("#value").innerHTML = "Posição: " + (i + 1) + "ª";
            }
        }
        document.querySelector("#lista").innerHTML = "Lista ordenada: " + lista;
    }
}

function reset() {
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#troco100").innerHTML = "";
    document.querySelector("#troco50").innerHTML = "";
    document.querySelector("#troco20").innerHTML = "";
    document.querySelector("#troco10").innerHTML = "";
    document.querySelector("#troco5").innerHTML = "";
    document.querySelector("#troco2").innerHTML = "";
    document.querySelector("#troco1").innerHTML = "";
    document.querySelector("#value").innerHTML = "";
    document.querySelector("#lista").innerHTML = "";
}