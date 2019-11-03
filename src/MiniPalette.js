import React from "react";
import styles from "./styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends React.Component {
  constructor(props) {
    super(props);
    this.deletePalatte = this.deletePalatte.bind(this);
  }

  deletePalatte(e) {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={this.props.handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.1s ease-in-out" }}
          onClick={this.deletePalatte}
        />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
