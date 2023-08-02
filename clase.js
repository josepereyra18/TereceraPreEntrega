const vaciarCarrito = document.getElementById('vaciarCarrito')
const modalCarrito= document.getElementsByClassName('medio')[0]


vaciarCarrito.addEventListener("click", ()=>{
    Swal.fire({
        title: '<p class ="swalert" >Cuidado!</p>',
        html: '<p class ="swalert">¿Estas seguro que quieres vaciar el carrito?</p>',
        icon:'warning', 
        showCancelButton:true,
        confirmButtonColor:'#3b7a28',
        cancelButtonColor:'#7a282b',
        confirmButtonText:'Eliminar',
        cancelButtonText:'Cancelar', 
    }).then((result)=>{
        if (result.isConfirmed){
            Swal.fire({
                title:'<p class ="swalert">Eliminado</p>',
                html:'<p class ="swalert">El carito fue vaciado</p>',
                icon:'success',
                timer:2000,
                showCancelButton:false,
                showConfirmButton:false,
                timerProgressBar: true
            })
            vaciarCarrito2()
        }
    })
})




modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
    if(e.target.classList.contains('eliminar')){
        const id = e.target.value
        const encontrarProducto = productos.find(producto => producto.id == id)
        Swal.fire({
            title: '<p class ="swalert">Cuidado!</p>',
            html: `<p class ="swalert">¿Esta seguro que quiere eliminar el Producto <br>${encontrarProducto.nombre.toUpperCase()}?</p>`,
            icon:'warning', 
            showCancelButton:true,
            confirmButtonColor:'#3b7a28',
            cancelButtonColor:'#7a282b',
            confirmButtonText:'Eliminar',
            cancelButtonText:'Cancelar', 
        }).then((result)=>{
            if (result.isConfirmed){
                Swal.fire({
                    title:'<p class ="swalert" >Eliminado</p>',
                    html: `<p class ="swalert" > ${encontrarProducto.nombre.toUpperCase()}<br>fue eliminado exitosamente</p>`,
                    icon:'success',
                    timer:2000,
                    showCancelButton:false,
                    showConfirmButton:false,
                    timerProgressBar: true
                })
                eliminarProductoCarrito(e.target.value)

            }
        })
    }
    
})

