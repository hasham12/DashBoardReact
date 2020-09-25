import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class CreateProjectButton extends React.Component {
  // <div>
  //   <Button positive>Create Project</Button>
  // </div>
  constructor(){
    super()

  }
    
  render(){
    return(
      <Modal
      trigger={<Button>Show Modal</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
    )
}
}


