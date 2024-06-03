function calcularTotal() {
    const cantidades = [
        parseInt(document.getElementById("cantidad_hojas_cuadriculadasx100").value),
        parseInt(document.getElementById("cantidad_hojas_rayadasx100").value),
        parseInt(document.getElementById("cantidad_carpetas").value),
        parseInt(document.getElementById("cantidad_lapices").value),
        parseInt(document.getElementById("cantidad_cuadernos").value),
        parseInt(document.getElementById("cantidad_lapiceras").value)
    ];

    const precios = {
        hojasCuadriculadas: 1750,
        hojasRayadas: 1750,
        carpetas: 1250,
        lapices: 500,
        cuadernos: 1500,
        lapiceras: 1000
    };

    const subtotal = cantidades.reduce((acc, cantidad, index) => {
        return acc + cantidad * Object.values(precios)[index];
    }, 0);

    const descuento = subtotal > 10000 ? subtotal * 0.10 : 0;

    const totalCompra = subtotal - descuento;

    mostrarResultado(subtotal, descuento, totalCompra);
}

function mostrarResultado(subtotal, descuento, total) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Descuento: $${descuento.toFixed(2)}</p>
        <p>Total de la compra: $${total.toFixed(2)}</p>
    `;
}

document.getElementById("calcular-total").addEventListener("click", calcularTotal);
document.getElementById("comprar").addEventListener("click", comprar);
