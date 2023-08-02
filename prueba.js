function guardarCarritoStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

document.addEventListener('DOMContentLoaded', () => {
    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
    contador = carrito.length;
    actualizarContador();
    pintarCarrito(carrito);
    }
    mensajeVacio();
});
