import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  return (
    <div className="itemDetail">
      <div className="imagenDetail">
        <img src={producto.imagen} alt="Imagen" />
      </div>
      <div className="texto">
        <h2 className="nombreDetail">{producto.nombre}</h2>
        <h3 className="descripcionDetail">{producto.descripcion}</h3>
        <h4 className="envioDetail">
          {producto.envioGratis ? "Envío Gratis" : ""}
        </h4>
        <h3 className="precioDetail">${producto.precio}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
