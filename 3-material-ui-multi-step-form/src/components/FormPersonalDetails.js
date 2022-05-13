import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export const FormPersonalDetails = ({
  nextStep,
  prevStep,
  handleChange,
  values,
}) => {
  const continueNext = (event) => {
    nextStep();
  };
  const goBack = (event) => {
    prevStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          styles={styles.button}
          onClick={goBack}
        />
        <RaisedButton
          label="Continue"
          primary={true}
          styles={styles.button}
          onClick={continueNext}
        />
      </>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};
