import React, { Component } from "react";
import Spinners from "./loading.gif";

export class Content extends Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <img
            src={Spinners}
            alt='Loading...'
            style={{ width: "300px", margin: "auto", display: "block" }}
          />
        ) : (
          <div>
            <h1 style={astyle1}>﷽</h1>
            {this.props.data.map(ayat => (
              <h2 style={astyle}>
                ({ayat.Id}) {ayat.Text}
              </h2>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const astyle1 = {
  marginTop: "0.4rem",
  direction: "rtl",
  fontSize: "2rem",
  color: "darkblue",
  fontWeight: "bolder",
  textAlign: "center",
  marginBottom: "4rem"
};
const astyle = {
  marginTop: "0.4rem",
  direction: "rtl",
  fontSize: "2rem"
};

export default Content;
