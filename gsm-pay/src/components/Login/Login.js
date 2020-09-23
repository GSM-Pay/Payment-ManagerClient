import React from 'react'

import { Form, Grid, Header, Segment } from 'semantic-ui-react'

import { useHistory } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation Login($id: String!, $pw: String!) {
    Login(id: $id, pw: $pw) {
      data
    }
  }
`

function Login() {
  let history = useHistory()
  let id, pw
  const [login] = useMutation(LOGIN)

  if (localStorage.getItem('session')) history.replace('/')

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
      <Grid textAlign='center' spacing={0} justify="center" style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 300 }}>
          <Header as='h2' color='blue' textAlign='center'>
            관리자 로그인
            </Header>
          <Form size='large' >
            <Segment raised>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='아이디' onChange={(e) => {
                id = e.target.value
              }} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='비밀번호'
                type='password'
                onChange={(e) => {
                  pw = e.target.value
                }}
              />

              <Form.Button color='blue' fluid size='large' onClick={() => {
                login({
                  variables: {
                    id: id,
                    pw: pw,
                  }
                }).then(result => {
                  let session = result.data.Login.data
                  if (session) {
                    localStorage.setItem('session', session)

                    history.push('/')
                  }
                }).catch(err => {
                  console.log(err)
                })
              }}>
                로그인
              </Form.Button>
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

export default Login;