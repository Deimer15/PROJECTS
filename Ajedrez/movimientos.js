let temp = '',
    ficha_ant = '',
    ficha_act = '';
const fichas_negras = {
    torre: document.getElementById('18').innerHTML,
    caballo: document.getElementById('28').innerHTML,
    alfil: document.getElementById('38').innerHTML,
    reina: document.getElementById('48').innerHTML,
    rey: document.getElementById('58').innerHTML,
    peon: document.getElementById('17').innerHTML
};
const fichas_blancas = {
    torre: document.getElementById('11').innerHTML,
    caballo: document.getElementById('21').innerHTML,
    alfil: document.getElementById('31').innerHTML,
    reina: document.getElementById('51').innerHTML,
    rey: document.getElementById('41').innerHTML,
    peon: document.getElementById('12').innerHTML
};
const move = function(clicked_id) {
    if (temp === '') {
        temp = document.getElementById(clicked_id).innerHTML;
        ficha_ant = document.getElementById(clicked_id);
        document.getElementById(clicked_id).innerHTML = '';
    } else {
        if (temp === fichas_negras.torre) {
            ficha_act = document.getElementById(clicked_id);
            if (ficha_ant.dataset.fila === ficha_act.dataset.fila || ficha_ant.dataset.columna === ficha_act.dataset.columna) {
                if (parseInt(ficha_ant.id, 10) > parseInt(ficha_act.id, 10)) {
                    for (let i = parseInt(ficha_ant.id, 10) - 1; i >= parseInt(ficha_act.id, 10); i--) {
                        if (document.getElementById(i).innerHTML !== '') {
                            alert('Esta ficha no se puede mover a esta posicion');
                            ficha_ant.innerHTML = temp;
                            temp = '';
                            break;
                        }
                    }
                } else {
                    for (let i = parseInt(ficha_ant.id, 10) + 10; i <= parseInt(ficha_act.id, 10); i + 10) {
                        if (document.getElementById(i).innerHTML !== '') {
                            alert('Esta ficha no se puede mover a esta posicion');
                            ficha_ant.innerHTML = temp;
                            temp = '';
                            break;
                        }
                    }
                }
            } else {
                alert('Esta ficha no se puede mover a esta posicion');
                ficha_ant.innerHTML = temp;
                temp = '';
            }
        }
    }
}