import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

export default class CreateProjectButton extends React.Component {
  // <div>
  //   <Button positive>Create Project</Button>
  // </div>
  constructor(){
    super()

  }
    
  render(){
    return(
      <Form>
    <Form.Group widths='equal'>
        <Form.Input label='Activity Name' placeholder='eg. CIS 422' />
        <Form.Input label='Activity End Date' placeholder='Pick a Date' />
    </Form.Group>
    <Form.Group widths='equal'>
        <Form.Input label='Total Capacity' placeholder='eg. 30' />
        <Form.Input label='Team Capacity' placeholder='eg. 3' />
    </Form.Group>
</Form>
    )
}
}


