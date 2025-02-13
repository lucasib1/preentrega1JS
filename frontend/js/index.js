// Definición de tasas de cambio
const tasasDeCambio = {
    usd: 1,
    eur: 0.85,
    ars: 98.50,
};

// Función para convertir las monedas
const convertidorDeMoneda = (cantidad, deMoneda, aMoneda) => {
    deMoneda = deMoneda.toLowerCase();
    aMoneda = aMoneda.toLowerCase();

    // Verificar si las monedas son válidas
    if (!tasasDeCambio[deMoneda] || !tasasDeCambio[aMoneda]) {
        return "Moneda inválida";
    }

    const cantidadConvertida = (cantidad / tasasDeCambio[deMoneda]) * tasasDeCambio[aMoneda];
    return cantidadConvertida.toFixed(2);
};

// Cargar historial de conversiones desde localStorage
const cargarHistorial = () => {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    const historialElement = document.getElementById('conversionHistory');
    historialElement.innerHTML = '';

    historial.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${item.cantidad} ${item.deMoneda.toUpperCase()} = ${item.resultado} ${item.aMoneda.toUpperCase()};
        historialElement.appendChild(li);
    });
};

// Guardar historial en localStorage
const guardarHistorial = (historial) => {
    localStorage.setItem('historial', JSON.stringify(historial));
};

// Manejo de eventos de formulario
document.getElementById('convertForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const deMoneda = document.getElementById('deMoneda').value;
    const aMoneda = document.getElementById('aMoneda').value;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    const resultado = convertidorDeMoneda(cantidad, deMoneda, aMoneda);
    
    // Mostrar el resultado en la página
    const conversionResult = document.getElementById('conversionResult');
    conversionResult.textContent = Resultado: ${cantidad} ${deMoneda.toUpperCase()} = ${resultado} ${aMoneda.toUpperCase()};

    // Guardar en historial
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push({
        cantidad,
        deMoneda,
        aMoneda,
        resultado,
    });

    guardarHistorial(historial);
    cargarHistorial();
});

// Cargar historial al iniciar la página
window.onload = cargarHistorial;
