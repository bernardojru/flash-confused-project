// icons img
import Food from "../assets/menu.png";
import Landmark from "../assets/placeholder.png";
import Shop from "../assets/shop.png";
import Praia from "../assets/praia.jpg";
import FoodMenu from "../assets/Food.jpg";
import Torre from "../assets/Torre.jpg";
import Paisagem from "../assets/silvia-trigo-2675266.jpg";

import { MainConst } from "../styles/Main";

export function ContainerMain() {
  return (
    <MainConst>
      <div className="icon-menu">
        <div className="icon">
          <img src={Food} alt="" />
          <p>Food</p>
        </div>
        <div className="icon">
          <img src={Landmark} alt="" />
          <p>Landmark</p>
        </div>
        <div className="icon">
          <img src={Shop} alt="" />
          <p>Food</p>
        </div>
      </div>
      <div className="start-button">START YOUR ITINERARY</div>
      <div className="destaques">Popular</div>
      <div className="container-img">
        <img src={Paisagem} alt="Praia" />
        <img src={FoodMenu} alt="FoodMenu" />
        <img src={Torre} alt="Torre" />
        <img src={Praia} alt="" />
      </div>
    </MainConst>
  );
}
