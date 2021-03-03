import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ManagerList from "./ManagerList";
import NewManagerModal from "./NewManagerModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    managers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getManagers = () => {
    axios.get(API_URL).then(res => this.setState({ managers: res.data }));
  };

  resetState = () => {
    this.getManagers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ManagerList
              managers={this.state.managers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewManagerModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
