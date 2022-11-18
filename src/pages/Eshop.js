import React from "react";
import Products from "../components/Products";
import "../styles/eshop.scss";

function Eshop() {
  return (
    <>
      <section id="hero_e-shop">
        <div class="container">
          <h2>envie d'un slip jaune!</h2>
        </div>
      </section>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h3>Filtres</h3>
          </div>
          <div className="col-md-9">
            <Products>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos numquam nulla inventore? Tenetur quas facere magnam
                harum molestias sed velit consequuntur eum ipsam veritatis.
                Inventore minima totam et exercitationem dolore.
              </p>
              <h4>Prix: 45 $</h4>
            </Products>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eshop;
