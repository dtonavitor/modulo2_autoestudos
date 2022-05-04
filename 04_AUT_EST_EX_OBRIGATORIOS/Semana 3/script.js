function calculate(){
    var g = 10.0
    var V0 = document.getElementById("V0").value;
    var t = V0/g
    var h = (V0**2)/(2*g)
    document.getElementById("time").innerHTML = "Tempo total de subida (em segundos): " + t;
    document.getElementById("height").innerHTML = "Altura máxima (em metros): " + h;
}

function reset(){
    document.getElementById("time").innerHTML = " ";
    document.getElementById("height").innerHTML = " ";
}
