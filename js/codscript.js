function PAePG() {
	var a1 = document.getElementById('a1').value;
	var r  = document.getElementById('r').value;
	var n  = document.getElementById('n').value;
	var pa = parseInt(a1) + (parseInt(n) - 1) * r;
	var pg = parseInt(a1) * parseInt(r) ** (parseInt(n) - 1);

	if (r != 0 && r != null) {
		if (n != 0 && n != null) {
			resultadoPA.innerHTML = "<p style='color: #d79;'>" + "a<sub>" + n + "</sub> = " + pa + "</p>";
			resultadoPG.innerHTML = "<p style='color: #d79;'>" + "a<sub>" + n + "</sub> = " + pg + "</p>";
		} else {
			resultadoPA.innerHTML = "<p style='color: red;'>" + "Posição final não existente" + "</p>";
			resultadoPG.innerHTML = "<p style='color: red;'>" + "Posição final não existente" + "</p>";
		}
	} else {
		resultadoPA.innerHTML = "<p style='color: red;'>" + "A razão nao pode ser igual a 0!" + "</p>";
		resultadoPG.innerHTML = "<p style='color: red;'>" + "A razão nao pode ser igual a 0!" + "</p>";
	}
}

function areaTriangulo() {
	var alt  = parseInt(document.getElementById('alt').value);
	var base = parseInt(document.getElementById('base').value);
	var area = (base * alt) / 2;

	mostrarResultadoo.innerHTML = "A area do triangulo é = " + "<spam style='color: #d79;'>" + area + "</spam>";	
}



function areaQuadrado(){
	var lado = parseInt(document.getElementById('lado').value);
	var area = lado*lado;

	mostrarResultado2.innerHTML = "A area do quadrado é = " + "<spam style='color: #d79;'>" + area + "</spam>";	
}


function areaRetangulo(){
	var baseR = parseInt(document.getElementById('baseR').value);
	var altR  = parseInt(document.getElementById('altR').value);
	var area  = baseR * altR;

	mostrarResultado3.innerHTML = "A area do retângulo é = " + "<spam style='color: #d79;'>" + area + "</spam>";
}

function areaTrapezio() {
	var baseM  = parseInt(document.getElementById('baseM').value);
	var baseMn = parseInt(document.getElementById('baseMn').value);
	var altT   = parseInt(document.getElementById('altT').value);
	var area   = (baseM + baseMn) * altT / 2;
	
	mostrarResultado4.innerHTML= "A area do trapézio é = " + "<spam style='color: #d79;'>" + area + "</spam>";
}


function areaLosango(){
	var diagoM  = parseInt(document.getElementById('diagoM').value);
	var diagoMn = parseInt(document.getElementById('diagoMn').value);
	var area    = (diagoMn * diagoM) / 2;
	
	mostrarResultado5.innerHTML= "A area do trapézio é = " + "<spam style='color: #d79;'>" + area + "</spam>";
}

function areaCirculo() {
	var raio = parseInt(document.getElementById('raio').value);
	var area = Math.PI * (raio * raio);

	mostrarResultado6.innerHTML = "A area do circulo é = " + "<spam style='color: #d79;'>" + area.toFixed(2) + "</spam>";
}

function fatorial() {
	var fatorial = 1;
	var explicaFator = "";
	var num = parseInt(document.getElementById('fatorial').value);
	
	for(var ind = 1; ind <= num; ind++){
		
		fatorial *= ind;
		 if (ind < num) {
		 	explicaFator += ind+" x ";
		 } else {
		 	explicaFator += ind;
		 }

		 if (num > 170) {
		 	fatorial = "Valor máximo obtido";
		 }

	}
	
	// document.write(num + "! = " + fatorial);
	document.getElementById('explicaFator').innerHTML = explicaFator;
	mostrarResultadobg3.innerHTML = num + "! = " + fatorial;
}

function MediaP(){
	var nota1 = 1;
	var nota2 = 1;
	var nota3 = 1;
	var nota4 = 1;
	nota1 = parseInt(document.getElementById('not1').value);
	nota2  = parseInt(document.getElementById('not2').value);
	nota3 = parseInt(document.getElementById('not3').value);
	nota4 = parseInt(document.getElementById('not4').value);
	var Media  = ((nota1*1)+(nota2*2)+(nota3*3)+(nota4*4))/10;

	if (Media < 6) {
		resultadoMP.innerHTML = "A média é: " + "<spam style='color:red;'>" + Media +  "</spam>";
	}

	else {
		resultadoMP.innerHTML = "A média é: " + "<spam style='color:#d79;'>" + Media + "</spam>";	
	}

	
}