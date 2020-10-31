import React, { Component } from "react";
import "../styles.css";

class Section extends Component {
  render() {
    return (
      <div className="article">
        <div className="box-title">
          <span
            className="decor"
            style={{
              border: "1px solid #79c7e8",
              margin: "2px 2px 2px 0px",
              padding: "0px 0.5px",
              backgroundColor: "#79c7e8"
            }}
          ></span>
          {this.props.title}
        </div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

export default Section;
