
const modalContenedor = document.getElementsByClassName('contenedor')[0]
const abrirCarrito = document.getElementsByClassName('carritoContador')[0]
const cerrarCarrito = document.getElementById('cerrarCarrito')




abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});






