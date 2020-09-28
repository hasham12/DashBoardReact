import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CreateForm from "./CreateProjectForm";
// import PMForm from './ProjectManagement' ;

export default class CreateProjectButton extends React.Component {
  // <div>
  //   <Button positive>Create Project</Button>
  // </div>
  state = {
    modalOpen: false,
  };
    
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render(){
    return(
      <div>
      {/* <Modal
      style={{ height: '100%', marginTop: '10px', }}
      trigger={<Button>Show Modal</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    /> */}

<Button onClick={this.handleOpen}>Create Project</Button>

          <Modal
          style={{ height: '50%', marginTop: '10%',  marginLeft: '20%', }}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
          >
            <Modal.Header>Create Project</Modal.Header>
            <Modal.Content>
              <CreateForm handleClose={this.handleClose} />
            </Modal.Content>
          </Modal>

    </div>
    )
}
}


