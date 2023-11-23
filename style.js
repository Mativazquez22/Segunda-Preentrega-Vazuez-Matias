// Función para calcular pagos en cuotas
function calcularCuotas(monto, cuotas) {
    // Verificar que el número de cuotas sea válido (mayor que cero)
    if (cuotas <= 0) {
      console.log("El número de cuotas debe ser mayor que cero.");
      return;
    }
  
    // Inicializar un array para almacenar el detalle de las cuotas
    var detalleCuotas = [];
  
    // Calcular el monto de cada cuota y almacenar el detalle en el array
    var montoPorCuota = monto / cuotas;
    for (var i = 1; i <= cuotas; i++) {
      detalleCuotas.push({ cuota: i, monto: montoPorCuota });
    }
  
    // Llamar a la función para mostrar el detalle de las cuotas
    mostrarDetalleCuotas(detalleCuotas);
  }
  
  // Función para mostrar el detalle de las cuotas
  function mostrarDetalleCuotas(detalleCuotas) {
    console.log("Detalle de pagos en cuotas:");
    detalleCuotas.forEach(function (cuota) {
      console.log("Cuota " + cuota.cuota + ": $" + cuota.monto.toFixed(2));
    });
  }
  
  // Ejemplo de uso
  var montoTotal = 1000;
  var numeroDeCuotas = 5;
  
  calcularCuotas(montoTotal, numeroDeCuotas);
  