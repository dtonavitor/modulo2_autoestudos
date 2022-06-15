
// Exercício 1
function centena() {
    var num = document.querySelector("#num").value;

    if (num.length < 3 || num.length > 3) {
        window.alert("Número deve conter 3 dígitos");
    }
    else {
        var centena = num[0]
        if (centena % 2 === 0) {
            document.querySelector("#result").innerHTML = "O dígito da centena é par."
        }
        else {
            document.querySelector("#result").innerHTML = "O dígito da centena é ímpar."
        }
    }
    
}


// Exercício 2
function sum(){
    var val = document.querySelector("#val").value;
    var sum = 0;
    for (i = 0; i < val.length; i++) {
        sum += parseInt(val[i]);
    }

    document.querySelector("#sum").innerHTML = "Soma dos dígitos: " + sum;
}


// Exercício 3
function order() {
    var name1 = document.querySelector("#name1").value;
    var name2 = document.querySelector("#name2").value;
    var name3 = document.querySelector("#name3").value;

    arr_names = [name1, name2, name3];

    for (i = 0; i < arr_names.length; i++) {
        for (j = 0; j < arr_names.length - 1; j++) {
            if (arr_names[j] > arr_names[j + 1]) {
                var swap = 0
                swap = arr_names[j];
                arr_names[j] = arr_names[j + 1];
                arr_names[j + 1] = swap;
            }
        }
    }

    document.querySelector("#check").innerHTML = `${arr_names[0]}, ${arr_names[1]}, ${arr_names[2]}`
}

// Exercício 4
function fibonacci() {
   var n = parseInt(document.querySelector("#n").value);

   var series = [1, 1];
   
   for (i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
   }

   document.querySelector("#series").innerHTML = `Sequência de Fibonacci com ${n} elementos:  ${series}`;
}

// Exercício 5
function prime() {
    var val1 = parseInt(document.querySelector("#val1").value);
    var val2 = parseInt(document.querySelector("#val2").value);

    var arr_prime = [];

    if (val1 > val2) {
        window.alert("O primeiro número deve ser menor");
        console.log(val1, val2)
    }

    for (var i = val1; i <= val2; i++) {
        var code = 0;

        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                code = 1;
                break;
            }
        }

        if (i > 1 && code == 0) {
            arr_prime.push(i);
        }
    }

    document.querySelector("#prime").innerHTML = "Números primos: " + arr_prime;
}


function reset() {
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#sum").innerHTML = "";
    document.querySelector("#check").innerHTML = "";
    document.querySelector("#series").innerHTML = "";
    document.querySelector("#prime").innerHTML = "";
}