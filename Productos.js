// pintarproducto en el MAIN
const pintarProductos = ()=>{
    const contenedor = document.getElementById('productoContenedor')
    
    productos.forEach(producto =>{
        const div = document.createElement('div')
        div.className = 'card'
        div.innerHTML =`
        <img class= "imagen" src="${producto.img}">
        <p class="titulo">${producto.nombre}</p>
        <p class="precio">$ ${producto.precio}</p>
        <button class="agregar" id="${producto.id}" >Agregar</button>`
        contenedor.appendChild(div)
    })
}

pintarProductos ()

// pintarproducto en el carrito 
const pintarProductoCarrito = (producto) => {
    const contenedor = document.getElementsByClassName('medio')[0]

    const div2 = document.createElement('div')

    div2.classList.add('producto')

    div2.innerHTML = `
                <img class="carritoImagen"  src="${producto.img}" alt="">
                <p class="carritoNombre">${producto.nombre}</p>
                <div class = "carritoCantidad" id="${producto.id}">
                    <p id= "cantidad${producto.id}" class="cantidad">${producto.cantidad}</p>             
                </div>
                <p class="carritoPrecio${producto.id}">$ ${producto.precio}</p>
                <button id ="boton" class="eliminar" value ="${producto.id}" > Eliminar </button>
    `
    contenedor.appendChild(div2)
    mensajeVacio()
}


const pintarCarrito = (carrito) => {
    const contenedor = document.getElementsByClassName('medio')[0]

    contenedor.innerHTML=''

    carrito.forEach(producto =>{
        const div2 = document.createElement('div')

        div2.classList.add('producto')

        div2.innerHTML = `
                    <img class="carritoImagen"  src="${producto.img}" alt="">
                    <p class="carritoNombre">${producto.nombre}</p>
                    <div class = "carritoCantidad" id="${producto.id}">
                        <p id= "cantidad${producto.id}" class="cantidad">${producto.cantidad}</p>             
                    </div>
                    <p class="carritoPrecio${producto.id}">$ ${producto.precio * producto.cantidad}</p>
                    <button id ="boton" class="eliminar" value ="${producto.id}" > Eliminar </button>
        `
        // validarProducto(producto.id)
        contenedor.appendChild(div2)
    })
    mensajeVacio()
}

const vaciarCarrito1=()=>{
    const contenedor = document.getElementsByClassName('medio')[0]
    contenedor.innerHTML=''
    vaciarCarrito2()
    mensajeVacio()
}