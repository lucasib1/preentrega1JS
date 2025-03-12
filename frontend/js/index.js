
const tasasDeCambio = {
    usd: 1,
    eur: 0.85,
    ars: 98.50,
};


const convertidorDeMoneda = (cantidad, deMoneda, aMoneda) => {
    deMoneda = deMoneda.toLowerCase();
    aMoneda = aMoneda.toLowerCase();
    
    if (!tasasDeCambio[deMoneda] || !tasasDeCambio[aMoneda]) {
        return "Moneda inválida";
    }

    const cantidadConvertida = (cantidad / tasasDeCambio[deMoneda]) * tasasDeCambio[aMoneda];
    return cantidadConvertida.toFixed(2);
};


const cargarHistorial = () => {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    const historialElement = document.getElementById('conversionHistory');
    historialElement.innerHTML = '';

    historial.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.cantidad} ${item.deMoneda.toUpperCase()} = ${item.resultado} ${item.aMoneda.toUpperCase()}`;
        historialElement.appendChild(li);
    });
};


const guardarHistorial = (historial) => {
    localStorage.setItem('historial', JSON.stringify(historial));
};


document.getElementById('convertForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const deMoneda = document.getElementById('deMoneda').value;
    const aMoneda = document.getElementById('aMoneda').value;


    if (isNaN(cantidad) || cantidad <= 0) {
        const conversionResult = document.getElementById('conversionResult');
        conversionResult.textContent = 'Por favor, ingrese una cantidad válida.';
        return;
    }

    const resultado = convertidorDeMoneda(cantidad, deMoneda, aMoneda);
    
    const conversionResult = document.getElementById('conversionResult');
    conversionResult.textContent = `${cantidad} ${deMoneda.toUpperCase()} = ${resultado} ${aMoneda.toUpperCase()}`;
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
document.getElementById('borrarHistorial').addEventListener('click', () => {

    localStorage.removeItem('historial');

    cargarHistorial();
});



window.onload = cargarHistorial;