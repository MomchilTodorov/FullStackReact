import React, { Component } from "react";
import Image from "material-ui-image";
import { connect } from "react-redux";

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <span>Loading...</span>;
      case false:
        return (
          <span>
            Login and create a survey <br />
            to collect feedback from your users!
          </span>
        );
      default:
        return (
          <span>
            Welcome back! <br />
            Click on Surveys to continue!
          </span>
        );
    }
  }
  render() {
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
          {this.renderContent()}
        </p>
        <Image
          src="https://www.upvoty.com/wp-content/uploads/2020/01/best-ways-to-collect-user-feedback.png"
          aspectRatio="1/2"
          disableTransition="true"
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
