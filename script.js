window.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
  const botones = document.querySelectorAll(".btn");

  let operacionActual = "";

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const valor = boton.textContent;

      if (valor === "=") {
        try {
          operacionActual = eval(operacionActual);
          pantalla.value = operacionActual;
        } catch (error) {
          pantalla.value = "Error";
          operacionActual = "";
        }
      } else if (valor === "C") {
        operacionActual = "";
        pantalla.value = "";
      } else {
        operacionActual += valor;
        pantalla.value = operacionActual;
      }
    });
  });
});