import { useState } from "react";
import "./Inputs.css";

const Inputs = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="firstname"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setMail(event.target.value)}
          value={mail}
        />
      </form>

      <p>Vorname: {firstname}</p>
      <p>Nachname: {lastname}</p>
      <p>Email: {mail}</p>
    </section>
  );
};

export default Inputs;
