import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class ForgetPassword extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='horizontal'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Recover your Account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        
                  <Button color='teal' fluid size='large'>
                    Submit
                  </Button>
                </Segment>
              </Form>
              <Message>
                Don't remeber email? <a href='#'>Contact Us</a>
              </Message>
            </Grid.Column>
          </Grid>

        );
    }
}
