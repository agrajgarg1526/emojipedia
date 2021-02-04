import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(card) {
  return (
    <Card
      key={card.id}
      name={card.name}
      emoji={card.emoji}
      meaning={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
