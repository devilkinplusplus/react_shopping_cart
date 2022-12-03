import React, { Component } from "react";
import Box from "./box";

class BoxList extends Component {
  state = {
    boxes: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  render() {
    return (
      <div className="container fluid">
        <div className="continer">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm m-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
          <h6 className="lead d-inline">Total : </h6>
          <span className="badge rounded-pill bg-danger">
            {this.state.boxes.filter((x) => x.value !== 0).length}
          </span>
        </div>
        {this.state.boxes.length === 0 && this.noItemFormat()}
        {this.state.boxes.map((box) => {
          return (
            <Box
              key={box.id}
              id={box.id}
              value={box.value}
              onIncrecement={this.handleIncrecement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              boxes={box}
            />
          );
        })}
      </div>
    );
  }

  noItemFormat = () => {
    return (
      <div className="container fluid">
        <h3 className="lead">No item found</h3>
      </div>
    );
  };

  handleIncrecement = (box) => {
    const boxes = [...this.state.boxes];
    const index = boxes.indexOf(box);
    boxes[index].value++;
    this.setState({ boxes });
  };

  handleDecrement = (box) => {
    const boxes = [...this.state.boxes];
    const index = boxes.indexOf(box);
    if (boxes[index].value === 0) {
      return;
    }
    boxes[index].value--;
    this.setState({ boxes });
  };

  handleDelete = (boxId) => {
    const boxes = this.state.boxes.filter((x) => x.id !== boxId);
    this.setState({ boxes });
  };

  handleReset = () => {
    const boxes = this.state.boxes.map((x) => {
      x.value = 0;
      return x;
    });
    this.setState({ boxes });
  };
}

export default BoxList;
