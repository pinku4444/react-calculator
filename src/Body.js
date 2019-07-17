import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CustomButton } from "./styledcomponent";

const Body = (props) => {
  return (
    <div>
      <Row>
        <Col md={9}>
          <CustomButton onClick={props.clearHandler} variant="outline-secondary">Clear</CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('/')} variant="outline-secondary"> / </CustomButton>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('7')} variant="outline-secondary">7</CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('8')} variant="outline-secondary"> 8 </CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('9')} variant="outline-secondary"> 9 </CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('-')} variant="outline-secondary">- </CustomButton>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('4')} variant="outline-secondary">4</CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('5')} variant="outline-secondary"> 5 </CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('6')} variant="outline-secondary"> 6 </CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('+')} variant="outline-secondary"> + </CustomButton>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('1')} variant="outline-secondary">1</CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('2')} variant="outline-secondary"> 2 </CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton onClick={() => props.inputHanlder('3')} variant="outline-secondary"> 3 </CustomButton>
        </Col>
        <Col md={3}>
          <CustomButton variant="outline-secondary" onClick={props.calculateHandler}> = </CustomButton>
        </Col>
      </Row>
    </div>
  );
};

export default Body;
