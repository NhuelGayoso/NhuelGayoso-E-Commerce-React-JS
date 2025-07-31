import reel from "./img/REEL-GAMMA-BLOOD-LIFE-STYLE-3.jpg";
import cana from "./img/8696-detalle-armed-XBR-LC-heavy-hybrid-scaled.jpg";
import caja from "./img/caja-organizadora-de-accesorios-anzuelos-pesca-plano-7771-10490-MLV20029037592_012014-F.jpg";
import { resta, suma } from "../CartWidget/index";
import "./index.css";

const ItemListContainer = () => {
  return (
    <>
      <div className="articulos">
        <div className="card">
          <h2>Reel</h2>
          <div className="card-img">
            <img src={reel} alt="reel" />
          </div>
          <div>
            <p>
              Es el tipo de reel más usado del mundo, y posee una bobina que
              gira en torno a la línea sobre un eje fijo, y un freno, tanto
              trasero como delantero, según el tipo, que regula el arrastre para
              no sobre cargar la caña.
            </p>
          </div>
          <div className="boton">
            <button onClick={resta}>-</button>
            <button>Catalogo</button>
            <button onClick={suma}>+</button>
          </div>
        </div>
        <div className="card">
          <h2>Cañas</h2>
          <div className="card-img">
            <img src={cana} alt="cana" />
          </div>
          <div>
            <p>
              Es el tipo de reel más usado del mundo, y posee una bobina que
              gira en torno a la línea sobre un eje fijo, y un freno, tanto
              trasero como delantero, según el tipo, que regula el arrastre para
              no sobre cargar la caña.
            </p>
          </div>
          <div className="boton">
            <button onClick={resta}>-</button>
            <button>Catalogo</button>
            <button onClick={suma}>+</button>
          </div>
        </div>
        <div className="card">
          <h2>Articulos de Pesca</h2>
          <div className="card-img">
            <img src={caja} alt="caja" />
          </div>
          <div>
            <p>
              Es el tipo de reel más usado del mundo, y posee una bobina que
              gira en torno a la línea sobre un eje fijo, y un freno, tanto
              trasero como delantero, según el tipo, que regula el arrastre para
              no sobre cargar la caña.
            </p>
          </div>
          <div className="boton">
            <button onClick={resta}>-</button>
            <button>Catalogo</button>
            <button onClick={suma}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
