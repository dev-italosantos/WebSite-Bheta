function CelsiusParaFahreheit() {
	var c = parseFloat(document.getElementById('c').value);
	var	f = (c * 9 + 160) / 5;

	mostrarResultadoCpF.innerHTML = "Essa temperatura em Fahrenheit é " + "<span style='color: #d79; font-weight: bolder;'>" + f.toFixed(2) + "</span>";
}

function FahrenheitParaCelsius() {
	var f = parseFloat(document.getElementById('f').value);
	var c = 0;
	c = (5 * f - 160) / 9;

	mostrarResultadoFpC.innerHTML = "Essa temperatura em Celsius é " + "<span style='color: #d79; font-weight: bolder;'>" + c.toFixed(2) + "</span>";	
}

function CelsiusParaKelvin () {
	var c = parseFloat(document.getElementById('cK').value);
	var k = 0;
	k = parseFloat(c) + 273;

	mostrarResultadoCpK.innerHTML = "Essa temperatura em Kelvin é " + "<span style='color: #d79; font-weight: bolder;'>" + k.toFixed(2) + "</span>";
}

function KelvinParaCelsius() {
	var k = parseFloat(document.getElementById('kC').value);
	var c = 0;
	c = k - 273;

	mostrarResultadoKpC.innerHTML = "Essa temperatura em Celsius é " + "<span style='color: #d79; font-weight: bolder;'>" + c.toFixed(2) + "</span>";
}

function KelvinParaFahrenheit () {
	var k = parseFloat(document.getElementById('kF').value);
	var f = 0;
	f = (9 * k - 2457 + 160) / 5;

	mostrarResultadoKpF.innerHTML = "Essa temperatura em Fahrenheit é " + "<span style='color: #d79; font-weight: bolder;'>" + f.toFixed(2) + "</span>";
}

function FahrenheitParaKelvin () {
	var f = parseFloat(document.getElementById('fK').value);
	var k = 0;
	k = (5 * f - 160 + 2457) / 9;

	mostrarResultadoFpK.innerHTML = "Essa temperatura em Kelvin é " + "<span style='color: #d79; font-weight: bolder;'>" + k.toFixed(2) + "</span>";
}