import React, { Component } from "react";
import { GiFingerPrint } from "react-icons/gi";

class FingerPrintPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPrints: 0,
      prints: [],
      title: "Leave your print",
    };
  }

  addFingerPrint = (e) => {
    this.hideTitle(e);
    this.setState({
      numPrints: this.state.numPrints + 1,
    });

    let print = this.generatePrint(e.pageX, e.pageY);

    this.setState({ prints: this.state.prints.concat(print) });
  };

  generatePrint(x, y) {
    return (
      <GiFingerPrint
        key={this.state.numPrints}
        number={this.state.numPrints}
        style={{ left: x - 15, top: y - 15, position: "absolute" }}
        className="finger-print"
      />
    );
  }
  deletePrint = (e) => {
    this.setState({ prints: [] });
  };

  hideTitle = (e) => {
    this.setState({ title: "" });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.deletePrint} className="round">
          Clear
        </button>
        <div className="canvas-fingerprint" onClick={this.addFingerPrint}>
          {this.state.prints}
          <p
            style={{
              userSelect: "none",
              justifyItems: "center",
              margin: "5rem auto",
              textAlign: "center",
            }}
          >
            {this.state.title}
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default FingerPrintPanel;
