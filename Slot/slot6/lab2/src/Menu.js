// Import menu images from assets
import menu1 from "./assets/menu1.jpg";
import menu2 from "./assets/menu2.jpg";
import menu3 from "./assets/menu3.jpg";
import menu4 from "./assets/menu4.jpg";

// Import the external CSS
import "./Menu.css";

function Menu() {
  return (
    <div className="Menu">
      {/* Menu title section */}
      <div className="menu-title">
        <h1 className="text-center">Our Menu</h1>
      </div>

      {/* Menu items section */}
      <div className="menu-items">
        {/* Card for a menu item */}
        <div className="card card-sale">
          <span className="badge">SALE</span>
          <img
            src={menu1}
            className="card-img-top"
            alt="Delicious pepperoni pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Margherita Pizza</h5>
            <span className="card-text">
              <p className="text-decoration-line-through">$40.00</p>
              <p className="text-warning">$24.00</p>
            </span>
            <a href="/" className="btn bg-primary text-white w-100">
              Buy
            </a>
          </div>
        </div>

        {/*  */}
        <div className="card">
          <img
            src={menu2}
            className="card-img-top"
            alt="Delicious mushroom pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Mushroom Pizza</h5>
            <span className="card-text">
              <p className="text-dark">$24.00</p>
            </span>
            <a href="/" className="btn bg-primary text-white w-100">
              Buy
            </a>
          </div>
        </div>

        {/*  */}
        <div className="card card-new">
          <span className="badge">NEW</span>
          <img src={menu3} className="card-img-top" alt="Delicious pizza" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <span className="card-text">
              <p className="text-dark">$25.00</p>
            </span>
            <a href="/" className="btn bg-primary text-white w-100">
              Buy
            </a>
          </div>
        </div>

        {/*  */}
        <div className="card card-sale">
          <span className="badge">SALE</span>
          <img src={menu4} className="card-img-top" alt="Delicious pizza" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <span className="card-text">
              <p className="text-decoration-line-through">$40.00</p>
              <p className="text-warning">$30.00</p>
            </span>
            <a href="/" className="btn bg-primary text-white w-100">
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
