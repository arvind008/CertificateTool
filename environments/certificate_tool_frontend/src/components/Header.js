import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://www.freeiconspng.com/uploads/certificate-icon-10.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        
        <h1>Certificate ToolKit</h1>
      </div>
    );
  }
}

export default Header;
