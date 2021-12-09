const $calcularSalario = document.querySelector("#btn-calcular");
const $limpiarSalario = document.querySelector("#btn-limpiar");

$calcularSalario.onclick = function () {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);

  document.querySelector("#salario-mensual").value = salarioMensual;
  return false;
};
function calcularSalarioMensual(salarioAnual) {
  const MESES = 12;
  return Math.round(salarioAnual / MESES);
}
