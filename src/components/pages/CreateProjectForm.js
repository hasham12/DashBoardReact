// import { Form } from "semantic-ui-react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Message,
  Segment,
  Table,
  TextArea
} from "semantic-ui-react";

import React, { Component } from "react";

class CreateFrom extends Component {
  state = {
    fields: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    // whatever you want to do when user submits a form
  };

  render() {
    const { fields } = this.state;

    return (
      <Segment>
      <Header>Assigned Task Users</Header>
      <Table compact celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Task</Table.HeaderCell>
            <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body></Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan={5} />
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>,
    <Segment>
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Field>
            <label>Project Name</label>
            <Input
              type="text"
              name="name"
              // value={this.state.newUser.name}
              onChange={this.handleChange}
              placeholder="Enter name..."
            />
          </Form.Field>
          <Form.Field>
            <label>Project date</label>
            <Input
              type="date"
              name="email"
              // value={this.state.newUser.email}
              onChange={this.handleChange}
              placeholder="Project date..."
            />
          </Form.Field>
        </Form.Group>

        <Form.Group unstackable widths={2}>
          <Form.Field>
            <label>User Role</label>
            <Input
              type="text"
              onChange={this.handleChange}
              name="role"
              // value={this.state.newUser.role}
              placeholder="User Role..."
            />
          </Form.Field>
          <Form.Field>
          <label>Task Details</label>
          {/* <Input
            type="number"
            onChange={this.handleChange}
            name="Task"
            value={this.state.newUser.Task}
            placeholder="Select Calory Limit"
            fluid
          /> */}
          {/* <Input
            type="text"
            onChange={this.handleChange}
            name="Task"
            // value={this.state.newUser.Task}
            placeholder="Enter Task"
            fluid
          /> */}
            <TextArea 
             placeholder='Tell us more'
             type="text"
             onChange={this.handleChange}
             name="Task"
            //  value={this.state.newUser.Task}
             placeholder="Enter Task"
             fluid
              />
          </Form.Field>
        </Form.Group>
        <Button primary type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
        <Button onClick={this.clearUserForm}>Clear</Button>
      </Form>
    </Segment>
    );
  }
}

export default CreateFrom;