import React, { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";

export const Facebook = () => {
  const [facebookData, setFacebookData] = useState({
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
  });

  const componentClicked = () => {};

  const responseFacebook = (response) => {
    setFacebookData((prevState) => {
      return {
        ...prevState,
        isLoggedIn: true,
        userId: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      };
    });
  };

  const fbContent = !facebookData.isLoggedIn ? (
    <ReactFacebookLogin
      appId="***********"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  ) : (
      <div style={{
          width: "400px",
          margin: "auto",
          padding: "20px",
          background: "#f4f4f4"
      }}>
          <img src={facebookData.picture} alt={facebookData.name}/>
          <h2>Welcome {facebookData.name}</h2>
          Email: {facebookData.email}
      </div>
  );
  return <div>{fbContent}</div>;
};
