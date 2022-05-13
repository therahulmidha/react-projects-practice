import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export const Confirm = ({ nextStep, prevStep, values }) => {
  const continueNext = (event) => {
    // process form, call API, wait and then call nextStep
    nextStep();
  };
  const goBack = (event) => {
    prevStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm Your Details" />
        <List>
            <ListItem 
                primaryText="First Name"
                secondaryText={values.firstName}
            />
            <ListItem 
                primaryText="Last Name"
                secondaryText={values.lastName}
            />
            <ListItem 
                primaryText="Email"
                secondaryText={values.email}
            />
            <ListItem 
                primaryText="Occupation"
                secondaryText={values.occupation}
            />
            <ListItem 
                primaryText="City"
                secondaryText={values.city}
            />
            <ListItem 
                primaryText="Bio"
                secondaryText={values.bio}
            />
        </List>
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          styles={styles.button}
          onClick={goBack}
        />
        <RaisedButton
          label="Confirm & Continue"
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
