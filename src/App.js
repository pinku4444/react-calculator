import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Output from "./Output";
import Body from "./Body";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "0"
    };
  }
  manageInputHandler = evt => {
    this.setState({
      data: evt.target.value
    });
  };

  calculateHandler = () => {
    let result = this.state.data;
    result = eval(result);
    this.setState({
      data: result
    });
  };

  clearHandler = () => {
    this.setState({
      data: "0"
    });
  };
  inputHanlder = number => {
    let data = this.state.data;
    if (data == "0") {
      data = "";
    }
    if (number != "/" && number != "+" && number != "-" && number != "*") {
      number = parseInt(number, 10);
      number = number.toString();
    }
    data = data.concat(number);
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <Output
              data={this.state.data}
              manageInputHandler={this.manageInputHandler}
            />
            <Body
              inputHanlder={this.inputHanlder}
              clearHandler={this.clearHandler}
              calculateHandler={this.calculateHandler}
            />
          </Col>
          <Col md={4} />
        </Row>
      </div>
    );
  }
}

export default App;
