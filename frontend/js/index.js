const tasasDeCambio = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    ARS: 98.50
};

const convertidorDeMoneda = (cantidad, deMoneda, aMoneda) => {
    // Condicional para verificar si las monedas son válidas
    if (!tasasDeCambio[deMoneda] || !tasasDeCambio[aMoneda]) {
        return "Moneda inválida";
    }
    // Conversión de moneda
    const cantidadConvertida = (cantidad / tasasDeCambio[deMoneda]) * tasasDeCambio[aMoneda];
    return cantidadConvertida.toFixed(2);
};

const simularConversionDeMoneda = () => {
    // Ciclo para permitir múltiples conversiones
    while (true) {
        const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));
        const deMoneda = prompt("Ingrese la moneda de origen (USD, EUR, GBP, JPY, ARS):").toUpperCase();
        const aMoneda = prompt("Ingrese la moneda de destino (USD, EUR, GBP, JPY, ARS):").toUpperCase();

        // Condicional para verificar si la cantidad es válida
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida.");
            continue;
        }

        const resultado = convertidorDeMoneda(cantidad, deMoneda, aMoneda);
        alert(`Cantidad convertida: ${resultado} ${aMoneda}`);

        // Preguntar al usuario si desea realizar otra conversión
        const otraConversion = prompt("¿Desea realizar otra conversión? (si/no)").toLowerCase();
        if (otraConversion !== 'si') {
            break;
        }
    }
};

simularConversionDeMoneda();
