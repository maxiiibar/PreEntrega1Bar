const ItemDetail = ( {producto} ) => {
  return (
    <div className="itemDetail">
            <img src={producto.imagen} alt="Imagen" />
        <div className="texto">
          <h2 className="nombreProducto">{producto.nombre}</h2>
          <h3 className="descripcion">{producto.descripcion}</h3>
          <h4 className="envioProducto">{(producto.envioGratis) ? "Envío Gratis" : ""}</h4>
          <h3>${producto.precio}</h3>
        </div>
    </div>
  )
}

export default ItemDetail