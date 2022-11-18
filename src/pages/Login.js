import { React, useState } from "react";
import "../styles/login.scss";

function Login() {
  const [email, setEmail] = useState(""); //Decomposition
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <section id="hero_login">
      <div class="container">
        <form onSubmit={onSubmit}>
          <label>Identiiant</label>
          <input
            type="email"
            placeholder="e-mail"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">VALIDER</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
