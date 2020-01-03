import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";

export default class Table extends Component {
  render() {
    return (
      <Row>
        <Col xs={3}>
          <FormControl placeholder={"Name"} name={"name"} />
        </Col>
        <Col xs={3}>
          <FormControl placeholder={"Height"} name={"height"} />
        </Col>
        <Col xs={3}>
          <FormControl placeholder={"Age"} name={"age"} />
        </Col>
        <Col>
          <Button variant={"primary"} type={"button"} style={{ width: "100%" }}>
            Add
          </Button>
        </Col>
      </Row>
    );
  }
}
