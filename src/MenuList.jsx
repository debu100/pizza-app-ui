import "./css/style.css";
import "./css/media.css";

import focaccia from "./images/focaccia.jpg";
import funghi from "./images/funghi.jpg";
import margherita from "./images/margherita.jpg";
import prosciutto from "./images/prosciutto.jpg";
import salamino from "./images/salamino.jpg";
import spinaci from "./images/spinaci.jpg";
import Timings from "./Timings";

const MenuList = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: focaccia,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: margherita,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: funghi,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: salamino,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: prosciutto,
      soldOut: false,
    },
  ];
  // making the work duration dynamic
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = openHour < hour && closeHour > hour;
  return (
    <div>
      <div className="item-box-parent">
        {pizzaData.map((item, index) => (
          <div key={index} className="item-box">
            <div className="img-box">
              <img
                src={item.photoName}
                alt="img"
                className={`item-img ${item.soldOut ? "soldOut" : ""}`}
              />
              {item.soldOut && <span className="soldOut-badge">Sold Out</span>}
            </div>
            <div className="content-box">
              <h2 className={`item-name ${item.soldOut ? "soldOutTxt" : ""}`}>
                {item.name}
              </h2>
              <p className={`item-para ${item.soldOut ? "soldOutTxt" : ""}`}>
                {item.ingredients}
              </p>
              <p className={`item-qty ${item.soldOut ? "soldOutTxt" : ""}`}>
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* //? conditional rendering using && */}

      {/* <div style={{ textAlign: "center" }}>
        {isOpen && (
          <div>
            <p style={{ textAlign: "center", margin: "2.5rem 0 1.5rem 0" }}>
              We're currently open. Our Timings - 10 am to 10 pm.
            </p>
            <button style={{ marginBottom: "1.5rem" }}>order now</button>
          </div>
        )}
      </div> */}

      {/* //? conditional rendering using Ternary Operator */}

      {/* <div style={{ textAlign: "center" }}>
        {isOpen ? (
          <div>
            <p style={{ textAlign: "center", margin: "2.5rem 0 1.5rem 0" }}>
              We're currently <strong>open</strong>. Our Timings - {openHour} am
              to {closeHour} pm.
            </p>
            <button style={{ marginBottom: "1.5rem" }}>order now</button>
          </div>
        ) : (
          <p style={{ textAlign: "center", margin: "2.5rem 0 1.5rem 0" }}>
            We're currently <strong>closed</strong>. Our Timings - {openHour} am
            to {closeHour} pm.
          </p>
        )}
      </div> */}

      {/* Extracted the above logic in another component */}

      <Timings openHour={openHour} closeHour={closeHour} isOpen={isOpen} />
    </div>
  );
};

export default MenuList;
