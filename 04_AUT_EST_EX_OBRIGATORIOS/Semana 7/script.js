
// Exercício 1
function addOne() {
    var num = parseInt(document.querySelector("#num").value);
    var add = num += 1;
    document.querySelector("#num").value = add;
}

function subtractOne() {
    var num = parseInt(document.querySelector("#num").value);
    var subtract = num -= 1;
    document.querySelector("#num").value = subtract;
}


// Exercício 2
function change(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;

    document.getElementById("val1").value = val2;
    document.getElementById("val2").value = val1;
}


// Exercício 3
function check() {
    var phone = document.querySelector("#phone").value;

    if (phone[0] != "(" | phone[3] != ")" | phone[9] != "-"){
        window.alert("Valor do telefone inválido")
    }
    else if (isNaN(phone[1] == true) | isNaN(phone[2]) == true | isNaN(phone[4]) == true | isNaN(phone[5]) == true | isNaN(phone[6]) == true | isNaN(phone[7]) == true | isNaN(phone[8]) == true
    | isNaN(phone[10]) == true | isNaN(phone[11])  == true | isNaN(phone[12]) == true | isNaN(phone[13]) == true) {
        window.alert("Valor do telefone inválido")
    }
    else {
        window.alert("Tudo certo")
    }
}

// Exercício 4
function calculate() {
   var people = parseInt(document.querySelector("#people").value);

   var value = 0
   
   if (document.querySelector("#periodD").checked == true) {
        if (people > 50) {
            value = people * 200 * 0.6;
        }
        else {
            value = people * 200;
        }
        document.querySelector("#value").innerHTML = "Valor total: " + value;
   }
   else if (document.querySelector("#periodN").checked == true) {
        value = people * 100;
        if (people > 50) {
            value = people * 100 * 0.8;
        }
        else {
            value = people * 100;
        }
        document.querySelector("#value").innerHTML = "Valor total: " + value;
   }
   else {
    window.alert("Período Inválido"); 
   }
}

// Exercício 5
function students() {
    var students = parseInt(document.querySelector("#students").value);
    for (j = 0; j < students; j++) {
        var elementoPai = document.body;
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var h4 = document.createElement("h4");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        
        var i1;
        var i2;
        
        h4.textContent = "Aluno " + (j + 1);

        p1.textContent = "Nota na prova: ";
        div1.appendChild(p1);

        p2.textContent = "Nota no trabalho: ";
        div2.appendChild(p2);
        

        i1 = document.createElement("input");
        i1.setAttribute("type", "number");
        i1.setAttribute("id", "test"+(j+1));
        div1.appendChild(i1);

        i2 = document.createElement("input");
        i2.setAttribute("type", "number");
        i2.setAttribute("id", "work"+(j+1));
        div2.appendChild(i2);

        p3.setAttribute("id", "mediaStudent"+(j+1));
        div2.appendChild(p3);

        

        elementoPai.appendChild(h4);
        elementoPai.appendChild(div1);
        elementoPai.appendChild(div2);
        

        }

        var button = document.createElement("button");
        var pGeral = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var p7 = document.createElement("p");

        button.textContent = "Calcular";
        div2.appendChild(button);

        pGeral.setAttribute("id", "mediaAll");
        div2.appendChild(pGeral);

        p4.setAttribute("id", "mediaTests");
        div2.appendChild(p4);

        p5.setAttribute("id", "mediaWorks");
        div2.appendChild(p5);
        
        p6.setAttribute("id", "testGrades");
        div2.appendChild(p6);

        p7.setAttribute("id", "workGrades");
        div2.appendChild(p7);


        button.onclick = function(){
            var tests = [];
            var works = [];
            var medias = [];
            var testSum = 0;
            var workSum = 0;
            var mediaAll = 0;
            for (l = 0; l < students; l++) {
                var t = parseInt(document.getElementById("test" + (l+1)).value);
                var w = parseInt(document.querySelector("#work" + (l+1)).value);
    
                media = (2 * t + 3 * w) / 5
                tests.push(t);
                works.push(w);
                medias.push(media);
                testSum += t;
                workSum += w;
                mediaAll += media;

                document.getElementById("mediaStudent" + (l+1)).innerHTML = "Média: " + media;
            }
            var testMedia = testSum / tests.length
            var workMedia = workSum / works.length
            mediaAll = mediaAll / medias.length

            for (i = 0; i < tests.length; i++) {
                for (j = 0; j < tests.length - 1; j++) {
                    if (tests[j] > tests[j + 1]) {
                        var swap = 0
                        swap = tests[j];
                        tests[j] = tests[j + 1];
                        tests[j + 1] = swap;
                    }
                }
            }
            for (i = 0; i < works.length; i++) {
                for (j = 0; j < works.length - 1; j++) {
                    if (works[j] > works[j + 1]) {
                        var swap = 0
                        swap = works[j];
                        works[j] = works[j + 1];
                        works[j + 1] = swap;
                    }
                }
            }
            document.querySelector("#mediaAll").innerHTML = "Média geral, considerando todos os alunos: " + mediaAll;
            document.querySelector("#mediaTests").innerHTML = "Média aritmética das notas de prova: " + testMedia;
            document.querySelector("#mediaWorks").innerHTML = "Média aritmética das notas de prova: " + workMedia;
            document.querySelector("#testGrades").innerHTML = `Menor e maior notas nas provas: ${tests[0]}, ${tests[tests.length - 1]}`
            document.querySelector("#workGrades").innerHTML = `Menor e maior notas nos trabalhos: ${works[0]}, ${works[works.length - 1]}`
    }
}


function reset() {
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#check").innerHTML = "";
    document.querySelector("#value").innerHTML = "";
    document.querySelector("#mediaAll").innerHTML = "";
    document.querySelector("#mediaTests").innerHTML = "";
    document.querySelector("#mediaWorks").innerHTML = "";
    document.querySelector("#testGrades").innerHTML = "";
    document.querySelector("#workGrades").innerHTML = "";
}