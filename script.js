let productosVisibles = [];

function mostrarProducto(categoria) {
    const productoSeleccionado = document.getElementById("producto-seleccionado");
    let contenido;

    if (productosVisibles.includes(categoria)) {
        const index = productosVisibles.indexOf(categoria);
        productosVisibles.splice(index, 1);
    } else {
        productosVisibles.push(categoria);
    }

    contenido = productosVisibles.map(cat => {
        switch (cat) {
            case "Frutas y Verduras":
                return "<h3>Frutas y Verduras</h3><p>Tenemos una amplia variedad de frutas y verduras frescas.</p><ul><li>Manzanas frescas</li><li>Naranjas jugosas</li><li>Tomates maduros</li><li>Lechugas crujientes</li><li>Zanahorias recién cosechadas</li><li>Y muchas otras frutas y verduras de temporada</li></ul><img src='frutas-verduras.jpg' alt='Frutas y Verduras'>";
            case "Lácteos":
                return "<h3>Lácteos</h3><p>Ofrecemos productos lácteos de la más alta calidad.</p><ul><li>Leche entera y descremada</li><li>Quesos artesanales</li><li>Yogures naturales</li><li>Mantequilla fresca</li><li>Crema de leche</li></ul><img src='lacteos.jpg' alt='Lácteos'>";
            case "Carnes":
                return "<h3>Carnes</h3><p>Contamos con una selección de carnes frescas y de primera calidad.</p><ul><li>Cortes de res de primera calidad</li><li>Pollo criado en granjas locales</li><li>Chuletas de cerdo jugosas</li><li>Embutidos caseros</li><li>Pescados y mariscos frescos</li></ul><img src='carnes.jpg' alt='Carnes'>";
            case "Abarrotes":
                return "<h3>Abarrotes</h3><p>Encontrarás una gran variedad de abarrotes para satisfacer todas tus necesidades.</p><ul><li>Pastas artesanales</li><li>Aceites de oliva virgen extra</li><li>Conservas caseras</li><li>Panes recién horneados</li><li>Dulces típicos de la región</li></ul><img src='abarrotes.jpg' alt='Abarrotes'>";
        }
    }).join("");

    productoSeleccionado.innerHTML = contenido;
}

function mostrarTodos() {
    mostrarProducto("Frutas y Verduras");
    mostrarProducto("Lácteos");
    mostrarProducto("Carnes");
    mostrarProducto("Abarrotes");
}

function interactuar() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if (nombre && correo) {
        let pregunta = prompt(`¡Hola ${nombre}! ¿Qué tipo de productos te interesan? (Frutas y Verduras, Lácteos, Carnes, Abarrotes)`);

        if (pregunta) {
            mostrarProducto(pregunta);
            alert(`¡Gracias por tu interés en ${pregunta}! Te responderemos a ${correo} con más información.`);
        } else {
            alert("Por favor, selecciona una categoría válida.");
        }
    } else {
        alert("Por favor, ingresa tu nombre y correo electrónico.");
    }
}

function iniciarCompra() {
    const quiereComprar = confirm("¿Quieres comprar algo?");

    if (quiereComprar) {
        const nombre = prompt("Por favor, ingresa tu nombre:");
        const productos = prompt(`¡Hola ${nombre}! ¿Qué productos deseas llevar? (Frutas y Verduras, Lácteos, Carnes, Abarrotes)`);
        const cantidad = prompt(`¿Cuántas unidades de ${productos} deseas llevar?`);

        if (nombre && productos && cantidad) {
            alert(`¡Gracias ${nombre}! Tu pedido de ${cantidad} ${productos} ha sido registrado.`);
        } else {
            alert("Por favor, ingresa la información solicitada.");
        }
    } else {
        alert("¡Esperamos verte pronto!");
    }
}