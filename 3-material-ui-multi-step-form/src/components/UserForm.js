import React, { useState } from "react";
import { Confirm } from "./Confirm";
import { FormPersonalDetails } from "./FormPersonalDetails";
import { FormUserDetails } from "./FormUserDetails";
import { Success } from "./Success";

export const UserForm = () => {
  const [userFormData, setUserFormData] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  // proceed to the next step
  const nextStep = () => {
    setUserFormData((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  // proceed to the prev step
  const prevStep = () => {
    setUserFormData((prevState) => {
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  // handle fields change
  const handleChange = (input) => (e) => {
    setUserFormData((prevState) => {
      return {
        ...prevState,
        [input]: e.target.value,
      };
    });
  };

  switch (userFormData.step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userFormData}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={userFormData}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={userFormData}
        />
      );
    case 4:
      return <Success />;
  }
};
