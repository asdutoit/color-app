import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = themes => ({
  picker: {
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
    marginTop: "2rem"
  }
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "teal"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "teal"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "purple"
      }
    }
  }
})(TextValidator);

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", newColorName: "" };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          width="100%"
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} ref="form">
          <CssTextField
            value={newColorName}
            className={classes.colorNameInput}
            variant="filled"
            name="newColorName"
            label="New Color Name"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!"
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={paletteIsFull}
            className={classes.addColor}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor
            }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default withStyles(styles)(ColorPickerForm);
