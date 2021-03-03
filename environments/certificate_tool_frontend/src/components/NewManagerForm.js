import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewManagerForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    phone: "",
    no_of_spot_awards: 0
  };

  componentDidMount() {
    if (this.props.manager) {
      const { pk, name, email, phone, no_of_spot_awards } = this.props.manager;
      this.setState({ pk, name, email, phone, no_of_spot_awards });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createManager = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editManager = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.manager ? this.editManager : this.createManager}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
	<FormGroup>
          <Label for="no_of_spot_awards">Number Of Spot Awards:</Label>
          <Input
            type="number"
            name="no_of_spot_awards"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewManagerForm;
