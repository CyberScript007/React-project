import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    pizzaName: "focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 14,
    photoName: "img/focaccia.jpg",
    soldOut: false,
  },
  {
    pizzaName: "pizza spinaci",
    ingredients: "Tomato, mozarella, spinach and ricotta cheese",
    price: 11,
    photoName: "img/spinaci.jpg",
    soldOut: false,
  },
  {
    pizzaName: "pizza salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 10,
    photoName: "img/salamino.jpg",
    soldOut: true,
  },
  {
    pizzaName: "pizza margherita",
    ingredients: "Tomato and mozarella",
    price: 5,
    photoName: "img/margherita.jpg",
    soldOut: false,
  },
  {
    pizzaName: "pizza funghi",
    ingredients: "Tomato, mozarella, mushrooms and onion",
    price: 18,
    photoName: "img/funghi.jpg",
    soldOut: false,
  },
  {
    pizzaName: "pizza prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrrata cheese",
    price: 25,
    photoName: "img/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="pizza">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header--1">
      <h1 className="heading--1 pizza__heading--1">fast react pizza co.</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="pizza__content">
      <header className="header--2">
        <h2 className="heading--2 pizza__title">our menu</h2>
      </header>
      <p className="paragraph pizza__paragraph">
        Authentic Italian cuisine, 6 creative dishes to choose from. All from
        our stone oven,all organic, all delicious.
      </p>
      <ul className="pizza__details">
        {pizzaData.map((pizza) => (
          <PizzaItem
            pizzaName={pizza.pizzaName}
            photoName={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
            ingredients={pizza.ingredients}
            key={pizza.pizzaName}
          />
        ))}
      </ul>
    </main>
  );
}

function PizzaItem({ photoName, pizzaName, soldOut, price, ingredients }) {
  return (
    <li className={`pizza__item-container ${soldOut ? "sold-out" : ""}`}>
      <figure className="pizza__item">
        <img className="pizza__image" src={photoName} alt={pizzaName} />
        <figcaption className="pizza__caption">
          <div className="pizza__caption-content">
            <h3 className="heading--3 pizza__name">{pizzaName}</h3>
            <p className="paragraph pizza__ingredients">{ingredients}</p>
          </div>
          <p className="paragraph pizza__price">
            {soldOut ? "SoldOut" : price}
          </p>
        </figcaption>
      </figure>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;

  return (
    <footer className="footer">
      {isOpen ? (
        <>
          <Order open={open} closed={closed} />
          <p className="paragraph">
            Design by{" "}
            <a href="dgdgd" className="paragraph footer__link">
              {" "}
              Busari Shakrullahi
            </a>
          </p>
        </>
      ) : (
        <>
          <p className="paragraph footer__paragraph">We're closed</p>
          <p className="paragraph">
            Design by{" "}
            <a href="dgdgd" className="paragraph footer__link">
              {" "}
              Busari Shakrullahi
            </a>
          </p>
        </>
      )}
    </footer>
  );
}

function Order({ open, closed }) {
  return (
    <div className="order">
      <p className="paragraph footer__paragraph">
        We're open from {open}:00 to {closed}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
