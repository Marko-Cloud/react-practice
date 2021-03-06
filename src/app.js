import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// git add -A && git commit -m "Your Message"
// git push origin master

const App = () => {
  //   return React.createElement(
  //     "div",
  //     {
  //       id: "something-important"
  //     },
  //     [
  //       React.createElement("h1", {}, "Adopt me!"),
  //       React.createElement(Pet, {
  //         name: "Luna",
  //         animal: "Dog",
  //         breed: "Havanese"
  //       }),
  //       React.createElement(Pet, {
  //         name: "Pepper",
  //         animal: "Bird",
  //         breed: "Cockatiel"
  //       }),
  //       React.createElement(Pet, {
  //         name: "Doink",
  //         animal: "Cat",
  //         breed: "Mixed"
  //       })
  //     ]
  //   );
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
