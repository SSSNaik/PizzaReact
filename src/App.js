import logo from './logo.svg';
import './App.css';
import React from 'react';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (<div>
    <Header/>
    <Menu/>
    <Footer/>
    </div>);
}

function Header()
{
  return <h1>Fast Pizza Co.</h1>
}

function Menu()
{
  return(
    <div>
    <h3>Our Menu</h3>
    <Pizza/>
    <Pizza/>
    <Pizza/>
    </div>
    
  );
}



function Pizza(){
 return(<div>
  <img src="pizzas/spinaci.jpg"/>
  <h1>pizza</h1>
  <p>Tomato, mozarella, spinach, and ricotta cheese</p>
 </div>);
   
}

function Footer()
{
  //return React.createElement("footer",null,"We're Currently Open");

  //logic
  const cHour =new Date().getHours();
  const openHour = 24;
  const closeHour = 12;
  const isOpen = cHour >= openHour && cHour<= closeHour

  console.log(isOpen);

  return(<footer>{new Date().toLocaleTimeString()}. We're Currently Open </footer>);
}
export default App;
