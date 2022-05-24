$(document).ready(function(){
    $("ul").append(" <li>Curso Enterprise Design Thinking Practioner da IBM</li>.");
    $("body").css({"font-family": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"})
    $("h1, h2, #main, #info, #profile").css({"text-align": "center"})
    $("h3, p, li").css({"text-align": "left"})
})

/* Função que faz uma requisição GET */
function get() {
    $.get('http://127.0.0.1:1808/view', function(resultado) {
        var perfil = JSON.parse(resultado);
        $("#address").html(perfil.endereco);
        $("#phone").html(perfil.telefone);
        $("#birth").html(perfil.data_nascimento);
        $("#email").html(perfil.email);
        $(".button-get").hide();
    });
}