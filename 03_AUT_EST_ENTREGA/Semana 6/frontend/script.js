api = 'http://127.0.0.1:1809'


$(document).ready(function(){
    $("ul").append(" <li>Curso Enterprise Design Thinking Practioner da IBM</li>.");
    $("body").css({"font-family": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"})
    $("h1, h2, #main, #info, #profile").css({"text-align": "center"})
    $("h3, p, li").css({"text-align": "left"})

    activities.list();
});

var activities = {
    list() {
        $.ajax({
            url: api + '/viewactivities',
            type: 'GET',
            success: data => {
                var text = '';
                text += '<div class="insert" onclick="activity.insert()">Inserir</div>';
                data.forEach(element => {
                    text += '<div class="activities">';
                        text += '<div class="name">' + element.nome + '</div>';
                            text += '<div class="action" onclick="activity.update(' + element.id + ',\'' + element.nome + '\')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></div>';
                            text += '<div class="action" onclick="activity.delete(' + element.id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>';
                        text += '</div>';
                    text += '</div>';
                });
                $('#courses').html(text);
            }
        });
    }
};

var activity = {
    insert() {
        var name = prompt('Digite a atividade: ');
        if (name) {
            if (name.trim() !='') {
                $.ajax({
                    type: 'POST',
                    url: api + '/insertactivities',
                    data: {nome: name},
                }).done(function () {
                    activities.list();
                }).fail(function (msg) {
                    console.log("FAIL");
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    update(id, oldActivity) {

        var name = prompt('Digite a nova atividade: ', oldActivity);
        if (name) {
            if (name.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/updateactivities',
                    data: {nome: name, id: id},
                }).done(function () {
                    activities.list();
                }).fail(function (msg) {
                    console.log("FAIL");
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    delete(id) {
        if (confirm('Tem certeza que quer excluir? ')) {
            $.ajax({
                type:'POST',
                url: api + '/deleteactivities',
                data: {id: id},
            }).done(function () {
                activities.list();
            }).fail(function (msg) {
                console.log("FAIL");
            }).always(function (msg) {
                console.log('ALWAYS');
            });
        }
    },
}

/* Função que faz uma requisição GET */
function get() {
    $.get('http://127.0.0.1:1809/view', function(resultado) {
        var perfil = JSON.parse(resultado);
        $("#address").html(perfil.endereco);
        $("#phone").html(perfil.telefone);
        $("#birth").html(perfil.data_nascimento);
        $("#email").html(perfil.email);
        $(".button-get").hide();
    });
}

