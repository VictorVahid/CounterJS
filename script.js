const botaoFiltro = document.querySelectorAll(".btn-counter");
let contador = 0;
function displayNumber() {
	const numberDisplay = document.getElementById("number-counter");
	numberDisplay.innerHTML = contador;
}

botaoFiltro.forEach((botao) => {
	botao.addEventListener("click", () => {
		const manageCounter = botao.dataset.action;
		if (manageCounter === "reset") {
			contador = 0;
		} else if (manageCounter === "incremento") {
			contador++;
		} else if (manageCounter === "decremento") {
			if (contador > 0) {
				contador--;
			}
		}
		displayNumber();
	});
});
displayNumber();
