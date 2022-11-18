import { React, useState } from "react";
import "../styles/signup.scss";

function SignUp() {
  const [nom, setNom] = useState("");
  const [prenoms, setPrenoms] = useState(""); //Decomposition
  const [email, setEmail] = useState(""); //Decomposition
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nom);
    console.log(prenoms);
    console.log(email);
    console.log(password);
    console.log(repassword);
  };
  return (
    <section id="hero_sign-up">
      <div class="container">
        <form onSubmit={onSubmit}>
          <label>Nom</label>
          <input
            type="text"
            placeholder="Nom"
            id="nom"
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
          <label>Prenoms</label>
          <input
            type="text"
            placeholder="Prenoms"
            id="prenoms"
            value={prenoms}
            onChange={(e) => {
              setPrenoms(e.target.value);
            }}
          />
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
          <label>Conirmer votre mot de passe</label>
          <input
            type="password"
            placeholder="Conirmation du mot de passe"
            id="repassword"
            value={repassword}
            onChange={(e) => {
              setRepassword(e.target.value);
            }}
          />
          <button type="submit">VALIDER</button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
