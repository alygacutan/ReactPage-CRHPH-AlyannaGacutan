import React, { Component } from "react";
import "../styles.css";
import { news } from "../assets/News";

class NewsList extends Component {
  render() {
    return (
      <div>
        <ul className="news">
          {news.map((item, index) => {
            return (
              <li className="newslist">
                <span className="newsdate">{item.date}</span>
                <span className="newscontent">{item.content}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NewsList;
