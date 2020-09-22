import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
class Login extends Component {
  render() {
    return (
      <div className='login-form'>
        {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              {/* <Image src={logo} /> Log-in to your account */}
              관리자 로그인
            </Header>
            <Form size='large'>
              <Segment raised>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='blue' fluid size='large'>
                  로그인
                </Button>
              </Segment>
            </Form>
            {/* <Message>
              Join or Create your Project!<br />
              <Link to="/signup">Sign Up</Link>
            </Message> */}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Login;