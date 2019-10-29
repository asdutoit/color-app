import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedcolors";
import { generatePalette } from "./ColorHelpers";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h2>Palette list goes here</h2>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h2>Individual Palette goes here</h2>}
        />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[1])} />
      // </div>
    );
  }
}

export default App;
