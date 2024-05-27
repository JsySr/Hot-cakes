function registrarCliente() {
    const nombre = document.getElementById('nombreCliente').value;
    const email = document.getElementById('emailCliente').value;
    const telefono = document.getElementById('telefonoCliente').value;

    // Ejemplo: Enviar datos a un servidor (simulado)
    console.log(`Cliente registrado - Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);
    // Aquí podrías agregar código para enviar estos datos a tu servidor mediante una solicitud AJAX, por ejemplo.
}

function registrarProducto() {
    const nombre = document.getElementById('nombreProducto').value;
    const descripcion = document.getElementById('descripcionProducto').value;
    const precio = parseFloat(document.getElementById('precioProducto').value);

    // Ejemplo: Enviar datos a un servidor (simulado)
    console.log(`Producto registrado - Nombre: ${nombre}, Descripción: ${descripcion}, Precio: ${precio}`);
    // Aquí podrías agregar código para enviar estos datos a tu servidor mediante una solicitud AJAX, por ejemplo.
}
