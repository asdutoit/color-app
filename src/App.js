import React from "react";
import Palette from "./Palette";
import seedColors from "./seedcolors";
import { generatePalette } from "./ColorHelpers";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
