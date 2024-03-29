import React from "react";
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div>
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(PaletteFooter);
