const tasasDeCambio = {
    usd: 1,
    eur: 0.85,
    ars: 98.50,
};

const convertidorDeMoneda = (cantidad, deMoneda, aMoneda) => {
    // Convertir las monedas a minúsculas
    deMoneda = deMoneda.toLowerCase();
    aMoneda = aMoneda.toLowerCase();

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
        if (isNaN(cantidad)) {
            alert("Por favor, ingrese una cantidad válida.");
            continue;
        }
        const deMoneda = prompt("Ingrese la moneda de origen (USD, EUR, ARS):");
        if (!deMoneda) {
            alert("Por favor, ingrese una moneda de origen válida.");
            continue;
        }
        const aMoneda = prompt("Ingrese la moneda de destino (USD, EUR, ARS):");
        if (!aMoneda) {
            alert("Por favor, ingrese una moneda de destino válida.");
            continue;
        }

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
// Función para inicializar el simulador
const iniciarSimulador = () => {
    alert("Bienvenido al convertidor de moneda.");
    simularConversionDeMoneda();
};
