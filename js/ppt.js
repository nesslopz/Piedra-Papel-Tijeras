/*
Piedra Rompe tijeras y aplasta lagarto
Papel cubre piedra, y desautoriza a Spock
Tijeras corta papel y decapita Lagarto
Lagarto come papel y envenena spock
Spock rompe tijeras y vaporiza piedra
*/


function revisar () {
var radios = document.getElementsByName('opcion');
var jugadorUsuario = document.getElementById('jugador1');
var jugadorMaquina = document.getElementById('jugador2');
for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
    	var opcionUsuario=radios[i].value;
	radios[i].checked=0;
    }
}
var opcionMaquina = Math.floor(Math.random()*5);
	var piedra = 0;
	var papel = 1;
	var tijeras = 2;
	var lagarto = 3;
	var spock = 4;
    var resultado = document.getElementById('finish');
    var ganador = document.getElementById('win');
    var perdedor = document.getElementById('lost');
    var empate = document.getElementById('empate');

document.getElementById("selection").classList.add('jugar');
setTimeout(function() {
    	document.getElementById("selection").classList.remove('jugar');
    }, 3100); 
          if (opcionUsuario == "piedra") {
	jugadorUsuario.style.backgroundImage="url('img/rock-atack.jpg')";
        	if (opcionMaquina == piedra) {
	jugadorMaquina.style.backgroundImage="url('img/rock-atack.jpg')";
        	empate.classList.add('aplicar');
        	}
        	else if (opcionMaquina == papel) {
        	jugadorMaquina.style.backgroundImage="url('img/paper-atack.jpg')";
        	perdedor.classList.add('aplicar');
        	}
        	else if (opcionMaquina == tijeras) {
        	jugadorMaquina.style.backgroundImage="url('img/tijeras-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/tijeras-lost.png')";
        	}
        	else if (opcionMaquina == lagarto) {
        	jugadorMaquina.style.backgroundImage="url('img/lagarto-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/lagarto-lost.jpg')";
        	}
        	else if (opcionMaquina == spock) {
        	jugadorMaquina.style.backgroundImage="url('img/spock-atack.jpg')";
        	perdedor.classList.add('aplicar');
        	}
        }
        else if (opcionUsuario == "papel") {
        	jugadorUsuario.style.backgroundImage="url('img/paper-atack.jpg')";
	if (opcionMaquina == piedra) {
	jugadorMaquina.style.backgroundImage="url('img/rock-atack.jpg')";
        	ganador.classList.add('aplicar');
        	}
        	else if (opcionMaquina == papel) {
        	jugadorMaquina.style.backgroundImage="url('img/paper-atack.jpg')";
        	empate.classList.add('aplicar');
        	}
        	else if (opcionMaquina == tijeras) {
        	jugadorMaquina.style.backgroundImage="url('img/tijeras-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/paper-lost.png')";
        	}
        	else if (opcionMaquina == lagarto) {
        	jugadorMaquina.style.backgroundImage="url('img/lagarto-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/paper-lost.png')";
        	}
        	else if (opcionMaquina == spock) {
        	jugadorMaquina.style.backgroundImage="url('img/spock-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/spock-lost.jpg')";
        	}
        }
        else if (opcionUsuario == "tijeras") {
        	jugadorUsuario.style.backgroundImage="url('img/tijeras-atack.jpg')";
	if (opcionMaquina == piedra) {
	jugadorMaquina.style.backgroundImage="url('img/rock-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/tijeras-lost.png')";
        	}
        	else if (opcionMaquina == papel) {
        	jugadorMaquina.style.backgroundImage="url('img/paper-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/paper-lost.png')";
        	}
        	else if (opcionMaquina == tijeras) {
        	jugadorMaquina.style.backgroundImage="url('img/tijeras-atack.jpg')";
        	empate.classList.add('aplicar');
        	}
        	else if (opcionMaquina == lagarto) {
        	jugadorMaquina.style.backgroundImage="url('img/lagarto-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/lagarto-lost.jpg')";
        	}
        	else if (opcionMaquina == spock) {
        	jugadorMaquina.style.backgroundImage="url('img/spock-atack.jpg')";
        	perdedor.classList.add('aplicar');
        	}
        }
        else if (opcionUsuario == "lagarto") {
        	jugadorUsuario.style.backgroundImage="url('img/lagarto-atack.jpg')";
	if (opcionMaquina == piedra) {
	jugadorMaquina.style.backgroundImage="url('img/rock-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/lagarto-lost.jpg')";
        	}
        	else if (opcionMaquina == papel) {
        	jugadorMaquina.style.backgroundImage="url('img/paper-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/paper-lost.png')";
        	}
        	else if (opcionMaquina == tijeras) {
        	jugadorMaquina.style.backgroundImage="url('img/tijeras-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/lagarto-lost.jpg')";
        	}
        	else if (opcionMaquina == lagarto) {
        	jugadorMaquina.style.backgroundImage="url('img/lagarto-atack.jpg')";
        	empate.classList.add('aplicar');
        	}
        	else if (opcionMaquina == spock) {
        	jugadorMaquina.style.backgroundImage="url('img/spock-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/spock-lost.jpg')";
        	}
        }

        else if (opcionUsuario == "spock") {
        	jugadorUsuario.style.backgroundImage="url('img/spock-atack.jpg')";
	if (opcionMaquina == piedra) {
	jugadorMaquina.style.backgroundImage="url('img/rock-atack.jpg')";
        	ganador.classList.add('aplicar');
        	}
        	else if (opcionMaquina == papel) {
        	jugadorMaquina.style.backgroundImage="url('img/paper-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/spock-lost.jpg')";
        	}
        	else if (opcionMaquina == tijeras) {
        	jugadorMaquina.style.backgroundImage="url('img/tijeras-atack.jpg')";
        	ganador.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/tijeras-lost.png')";
        	}
        	else if (opcionMaquina == lagarto) {
        	jugadorMaquina.style.backgroundImage="url('img/lagarto-atack.jpg')";
        	perdedor.classList.add('aplicar');
        resultado.style.backgroundImage="url('img/spock-lost.jpg')";
        	}
        	else if (opcionMaquina == spock) {
        	jugadorMaquina.style.backgroundImage="url('img/spock-atack.jpg')";
        	empate.classList.add('aplicar');
        	}
        }
        else {
        	alert("¿Que diablos has hecho?\nLo has cargado.\nRecarga porfavor.");
     	}
if (document.getElementById('fight').classList=="again") {
        document.getElementById('fight').classList.add('lucha');
        document.getElementById('batalla').classList.add('lucha'); 
        document.getElementById('fight').classList.remove('again');
        document.getElementById('batalla').classList.remove('again');
        }
    else {
        document.getElementById('batalla').classList.add('lucha'); 
        document.getElementById('fight').classList.add('lucha');
        }
setTimeout(function() {
    document.getElementById('batalla').classList.add('again');
    document.getElementById('fight').classList.add('again');
    setTimeout(function() {
    document.getElementById('batalla').classList.remove('lucha');
    document.getElementById('fight').classList.remove('lucha');
    ganador.classList.remove('aplicar');
    perdedor.classList.remove('aplicar');
    empate.classList.remove('aplicar');
    resultado.style.backgroundImage="url('none')";
    }, 1000);
}, 8000); 
}



function circles() {
var c=document.getElementById('selection').getElementsByTagName('label').length;
var div = 360 / c;
var radius = 100;
var parentdiv = document.getElementById('selection');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);
var offsetToChildCenter = -0;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 0; i <= c; i++) {
var childdiv = parentdiv.getElementsByTagName('label')[0];
var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
childdiv.style.top = (y + totalOffset).toString() + "px";
childdiv.style.left = (x + totalOffset).toString() + "px";
parentdiv.appendChild(childdiv);
}
}