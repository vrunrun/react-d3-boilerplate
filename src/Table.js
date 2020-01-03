import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";

export default class Table extends Component {
  renderRows() {
    return this.props.data.map(student => {
      return (
        <Row key={student.name} style={{ marginTop: "10px" }}>
          <Col xs={3}>{student.name}</Col>
          <Col xs={3}>{student.height}</Col>
          <Col xs={3}>{student.age}</Col>
          <Col xs={3}>
            <Button
              variant={"danger"}
              type={"button"}
              style={{ width: "100%" }}
              name={student.name}
            >
              Remove
            </Button>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <div>
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
            <Button
              variant={"primary"}
              type={"button"}
              style={{ width: "100%" }}
            >
              Add
            </Button>
          </Col>
        </Row>
        {this.renderRows()}
      </div>
    );
  }
}
