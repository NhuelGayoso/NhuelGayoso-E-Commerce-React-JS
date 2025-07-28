import reel from "./img/REEL-GAMMA-BLOOD-LIFE-STYLE-3.jpg";
import "./index.css";

const ItemListContainer = () => {
  return (
    <>
      <div className="articulos">
        <div className="card">
          <h2>Reel</h2>
          <div className="card-img">
            <img src={reel} />
          </div>
          <div>
            <p>
              Es el tipo de reel más usado del mundo, y posee una bobina que
              gira en torno a la línea sobre un eje fijo, y un freno, tanto
              trasero como delantero, según el tipo, que regula el arrastre para
              no sobre cargar la caña.
            </p>
          </div>
          <button>Catalogo</button>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
