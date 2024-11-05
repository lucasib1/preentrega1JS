const tasasDeCambio = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    ARS: 98.50 // Tasa de cambio de ejemplo, actualízala según sea necesario
};

const convertidorDeMoneda = (cantidad, deMoneda, aMoneda) => {
    if (!tasasDeCambio[deMoneda] || !tasasDeCambio[aMoneda]) {
        return "Moneda inválida";
    }
    const cantidadConvertida = (cantidad / tasasDeCambio[deMoneda]) * tasasDeCambio[aMoneda];
    return cantidadConvertida.toFixed(2);
};

const simularConversionDeMoneda = () => {
    const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));
    const deMoneda = prompt("Ingrese la moneda de origen (USD, EUR, GBP, JPY, ARS):").toUpperCase();
    const aMoneda = prompt("Ingrese la moneda de destino (USD, EUR, GBP, JPY, ARS):").toUpperCase();

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    const resultado = convertidorDeMoneda(cantidad, deMoneda, aMoneda);
    alert(`Cantidad convertida: ${resultado} ${aMoneda}`);
};

simularConversionDeMoneda();
