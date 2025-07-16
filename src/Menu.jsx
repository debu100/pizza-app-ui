import "./css/style.css";
import "./css/media.css";

import MenuList from "./MenuList";

const Menu = () => {
  return (
    //* <></> this is a react fragment - allows us to have more than just one element inside a piece of JSX
    <>
      <h2 className="menu-heading">our menu</h2>
      <p className="menu-para">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from{" "}
        <br />
        our stone oven, all organic, all delicious.
      </p>
        <MenuList></MenuList>
    </>
  );
};

export default Menu;
