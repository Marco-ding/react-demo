import React from "react";
class Try extends React.Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <div onClick={this.addNumber.bind(this)}>数字：{this.state.number}</div>
    );
  } 
  addNumber() {
    this.setState({ number: (this.state.number += 1) });
  }
}

export default Try