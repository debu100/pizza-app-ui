import "./css/style.css";
import "./css/media.css";

import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div>
      <h2 className="menu-heading">our menu</h2>
      <p className="menu-para">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from{" "}
        <br />
        our stone oven, all organic, all delicious.
      </p>
        <MenuList></MenuList>
    </div>
  );
};

export default Menu;
