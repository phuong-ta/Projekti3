function getId(id) {
    var getValue =id;
    //näytä käyttäjän input value
    document.getElementById('tulos').innerHTML += getValue;
}

function laske() {
    var x = document.getElementById('tulos').innerText;
    var tulos;
    if (x.search('%')>0) {
        var y = x.split('%');
        tulos =y[0]*y[1];
        document.getElementById('tulos').innerHTML = tulos +'%';
    } else {
        tulos = eval(x);
        document.getElementById('tulos').innerHTML = tulos;
    }
}

function deleteLastNum() {
    var x = document.getElementById('tulos').innerText;
    var poista = x.substring(0,x.length-1);
    document.getElementById('tulos').innerHTML = poista;
}

function reset() {
    window.location.reload(); 
}
