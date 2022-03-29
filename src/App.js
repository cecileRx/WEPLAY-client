
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
        <h1>WePlay</h1>
        <label htmlFor="User Name"></label>
        <input type="text"  />
        <label htmlFor="Bio"></label>
        <input type="text"  />
        <label htmlFor="Select your Level"></label>
        <input
          type="checkbox"
          id="level"
          name="level"
          value="beginner"

        />

        <label htmlFor="In What Spirit do you play?"></label>
        <input
          type="checkbox"
          id="spirit"
          name="spirit"
          value="fun"

        />
        <label htmlFor="Prefered Places"></label>
        <input type="text"  />
        <label htmlFor="Material"></label>
        <input type="text"  />
    </div>
  );
}

export default App;
