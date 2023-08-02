//! EN ESTE ARCHIVO MANEJAMOS EL COMPORTAMIENTO DEL CARRITO.

let contador = 0
let carrito =[]
let cont =1

const cantidad = document.getElementById('productos')
const productoContenedor = document.getElementById('productoContenedor')
const mensaje = document.getElementsByClassName('mensajeVacio')[0]

//! AGREGAR PRODUCTOS AL CARRITO 
productoContenedor.addEventListener("click", (e)=>{

    if(e.target.classList.contains('agregar')){
        const id = e.target.id
        const encontrarProducto = productos.find(producto => producto.id == id)// hace que solo pueda ver los id de los que tienen la calse "agregar" (botones)
        Toastify({
            text:`Se agrego ${encontrarProducto.nombre.toUpperCase()} a tu carrito`,
            duration:3000,
            gravity:'bottom',
            position:'right',
            className: 'swalert',
            style:{
                background:'linear-gradient(to right, #658E9C,#514663)'
            }
        }).showToast()
        contador ++
        actualizarContador()
        validarProducto(e.target.id)
        // console.log(e.target.id) // me obtiene el id de los botones
    }
    
})


//!ACTUALIZA EL CONTADOR DE EL CARRITO EN EL HEADER
const actualizarContador= ()=>{
    cantidad.innerHTML = contador
}

//ACTUALOZA EL CONTADOR DE CADA UNO DE LOS PRODUCTOS
const validarProducto= (id)=>{
    const repetido = carrito.some(producto => producto.id == id) // busco si hay un producto asi en el carrito

    if (!repetido){
        const producto = productos.find( producto => producto.id == id) // buscar el producto con ese id
        carrito.push(producto)
        pintarProductoCarrito (producto)
    }else{
        const producto = carrito.find(producto=> producto.id == id)
        const cantidad = document.getElementById(`cantidad${producto.id}`)
        producto.cantidad++ // aumentar la cantidad de ese producto en una unidad. 
        cantidad.innerText=`${producto.cantidad}`

        const precio = document.getElementsByClassName(`carritoPrecio${producto.id}`)[0]

        precio.innerText =`$ ${producto.precio*producto.cantidad}` // actualiza el precio del carrito
        
        
        mensajeVacio()
    }
}


//! si el carrito esta vacio, muestra una leyenda. de lo contrario muetsra el total del carrito 

const mensajeVacio = ()=>{
    if (carrito.length ===0){
        mensaje.textContent = " Tu carrito esta vacio "
    }else{
        let precioTotal=0
        carrito.forEach(producto => {
            precioTotal+=(producto.precio* producto.cantidad)
        })
        mensaje.textContent = `TOTAL :$ ${precioTotal}` // actualiza el precio total
        guardarCarritoStorage(carrito)
    }
}


//MUESTRA MENSAJEVACIO() CADA VEZ QUE SE REINICIA LA PAGINA 
document.addEventListener('DOMContentLoaded', () => {
    mensajeVacio();
});

//! Elimina los productos del carrito 
const eliminarProductoCarrito = (id) =>{
    const productoIndex = carrito.findIndex(producto => producto.id== id)//devuelve el indice del objeto dentrodel array
    const encontrarProducto = carrito.find(producto => producto.id == id)
    encontrarProducto.cantidad = 1
    carrito.splice(productoIndex,1)
    guardarCarritoStorage(carrito)
    contador = carrito.length
    actualizarContador()
    pintarCarrito(carrito)
}

//!Vaciar Carrito
const vaciarCarrito2=()=>{
    carrito.forEach(producto =>{
        carrito.splice(producto)
        producto.cantidad = 1
        pintarCarrito(carrito)
    })
    contador = 0
    actualizarContador()
    localStorage.clear()
}

//!
const pagar = document.getElementById("boton1")

pagar.addEventListener("click", ()=>{
    alert ("gracias por si compra :D")
})