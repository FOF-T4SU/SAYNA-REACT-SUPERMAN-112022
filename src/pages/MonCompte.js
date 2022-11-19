import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/compte.scss";

function MonCompte() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  const deconnecter = async () => {
    try {
      await logOut();
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section id="hero_compte">
        <div class="container">
          <h2>
            Seriez-vous krypton? <br /> dites nous en plus
          </h2>
        </div>
      </section>
      <section class="container details">
        <div>
          <Link>Mes informations</Link>
          <Link>Historique des commandes</Link>
          <Link>Mes avis</Link>
          <Link>Mes favoris</Link>
          <button onClick={deconnecter}>Deconnecter</button>
        </div>
        <div>
          <div>
            <h3>Informations Personnelles</h3>
            <hr />
            <p>nom :</p>
            <p>prenom : </p>
            <p>email : {user.email}</p>
            <p>mot de passe : {user.password}</p>
            <p>Numero de telephone : </p>
            <p>Adresse de livraison : </p>
            <p>Adresse de facturation : </p>
            <button>Modifier</button>
          </div>
          <br />
          <div>
            <h3>Newsletter</h3>
            <hr />
            <p>
              Abonnez vous a la Newsletter! ne rater pas nos offres
              exceptionnels sur votre article prefere!
            </p>
            <form>
              <input type="radio" name="choix" id="o" checked />{" "}
              <label for="o">OUI</label>
              <br />
              <input type="radio" name="choix" id="n" />{" "}
              <label for="n">NON</label>
              <br />
              <button type="submit">Enregistrer</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default MonCompte;
