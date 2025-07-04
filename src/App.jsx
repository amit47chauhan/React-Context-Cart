

import Cart from "./components/Cart";
import Item from "./components/Item";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";


function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="items-section">
          <div className="items-title">Products</div>
          <ul className="items-list">
            <li><Item name={"Macbook Pro"} price={100000} /></li>
            <li><Item name={"Pen Drive"} price={4000} /></li>
            <li><Item name={"Smart Phone"} price={40000} /></li>
            <li><Item name={"PC"} price={250000} /></li>
          </ul>
        </div>
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default App;
