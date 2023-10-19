import { useState } from "react";
import "./DayNight.css";

const DayNight = () => {
  const [color, setColor] = useState(true);

  const change = () => {
    console.log(color);
    setColor((color) => !color);
  };

  return (
    <section className={color ? "" : "dark"}>
      <h1>{color ? "Day" : "Night"}</h1>
      <button onClick={change}>Change to {color ? "Night" : "Day"}</button>
    </section>
  );
};

export default DayNight;
