import React from "react";
import Image from "material-ui-image";

const Landing = () => {
  return (
    <div className="container" style={{ backgroundColor: "#62b8ea" }}>
      <p
        className="center-align flow-text"
        style={{
          fontWeight: "bold",
          color: "#263238",
          paddingTop: "50px",
        }}
      >
        Login and create a survey <br />
        to collect feedback from your users!
      </p>
      <Image
        src="https://www.upvoty.com/wp-content/uploads/2020/01/best-ways-to-collect-user-feedback.png"
        aspectRatio="1/2"
        disableTransition="true"
      />
    </div>
  );
};

export default Landing;
