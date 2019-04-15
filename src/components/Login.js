import React from 'react';
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import { Button, ModalFooter } from 'reactstrap';
import axios from 'axios';

// class Login extends React.Component {
//   render() {
//     return (
//       <Form>
//         <FormGroup>
//           <Label for="exampleEmail">Email</Label>
//           <Input type="email" name="email" id="exampleEmail" placeholder="enter email" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
//         </FormGroup>
//       </Form>
//     );
//   }
// }

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isSignup: false,
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
    this.props.toggle()//passed down from modal
    axios.post('https://insta.nextacademy.com/api/v1/login',
      {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        console.log(response)
        localStorage.setItem('jwt', response.data.auth_token)
        localStorage.setItem('myProfile', response.data.user.id)
        localStorage.setItem('myUserName', response.data.user.username)
        localStorage.setItem('myProfileImage', response.data.user.profile_picture)
        sessionStorage.setItem('clickCount', 10)
        this.props.setUser()
      })
      .catch(error => {
        console.log('ERROR: ', error)
      }
      )

  }

  handleInput = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;
    const { isSignup } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter email" value={this.state.email} onChange={this.handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password:</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="enter password" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormGroup>
        <ModalFooter>
          <Button disabled={!isEnabled} color="primary" onClick={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</Button>{' '}
        </ModalFooter>
      </Form>
    )
  }
}


export default Login;