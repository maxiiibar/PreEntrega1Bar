import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({producto}) => {
  return (
    <div className="item">
        <div className="imagen">
            <img src={producto.imagen} alt="Imagen" />
        </div>
        <p className="nombreProducto">{producto.nombre}</p>
        <p className="precioProducto">${producto.precio}</p>
        <p className="envioProducto">{(producto.envioGratis) ? "Envío Gratis" : ""}</p>
        <Link to={`/detalle/${producto.id}`} className="link" >Ver detalles</Link>
    </div>
  )
}

export default Item