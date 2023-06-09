
export function obtenerDiferenciaYear(year){
  return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
  let incremento;

  switch(marca) {
    // Europeo
    case "1":
      incremento = 1.3;
      break;

      // Americano
    case "2":
      incremento = 1.15;
      break;

      // Asiático
    case "3":
      incremento = 1.05;
      break;
    
    default: 
      break;
  }

  return incremento;
}

export function calcularPlan(plan) {
  return (plan === "1") ? 1.20 : 1.50;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: "USD",
  })
}