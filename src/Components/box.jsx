import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="container fluid mt-2">
        <h5>Product {this.props.id}.</h5>
        <hr />
        <div className="d-flex justify-content-center">
          <div className="p-2 bd-highlight">
            <button
              className="btn btn-info btn-sm"
              onClick={() => this.props.onDecrement(this.props.boxes)}
            >
              Decrease
            </button>
          </div>
          <div className="p-2 bd-highlight">
            <span className={this.getClassBadge()}>{this.formatCount()}</span>
          </div>

          <div className="p-2 bd-highlight">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.props.onIncrecement(this.props.boxes)}
            >
              Increase
            </button>
          </div>

          <div className="p-2 bd-highlight">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.boxes.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount = () => {
    const { value } = this.props.boxes;
    return value === 0 ? "Empty" : value;
  };

  getClassBadge = () => {
    let className = "badge bg-";
    className += this.props.boxes.value === 0 ? "warning" : "primary";
    return className;
  };
}

export default Box;
