import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class SignUp extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' color='teal' textAlign='center'>
                <Image src='/logo.png' /> 
                Try TeMajo for free
              </Header>
              <p style={{color:'teal', fontSize: 16}}>
                  Please use your work email address so we can connect you with your team in TeMajo.
              </p>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        
                  <Button color='teal' fluid size='large'>
                    Try For Free
                  </Button>
                </Segment>
              </Form>
              {/* <Message>
                New to us? <a href='#'>Sign Up</a> or <a href="#">Forget Password</a>
              </Message> */}
            </Grid.Column>
          </Grid>

        );
    }
}
