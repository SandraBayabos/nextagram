import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, ModalFooter } from 'reactstrap';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    isSignup: false,
    modal: false,
    isLoggedIn: false
  }

  handleUserNameChange = evt => {
    this.setState({ username: evt.target.value })
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value })
  }

  handlesecondPasswordChange = evt => {
    this.setState({ secondPassword: evt.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, password, secondPassword, username } = this.state;
    if (password !== secondPassword) {
      alert('Passwords do not match');
    } else {
      alert(`Signed up with username: ${username} email: ${email} password: ${password} second password ${secondPassword}`);
    }
    this.props.toggle()//passed down from modal
    axios.post('https://insta.nextacademy.com/api/v1/users/',
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        console.log(response)
        localStorage.setItem('jwt', response.data.auth_token)
        sessionStorage.setItem('clickCount', 10)
      })
      .catch(error => {
        console.log('ERROR: ', error)
      }
      )
  }

  render() {
    const { email, password, secondPassword, username } = this.state;
    const isEnabled = email.length > 0 && password.length > 0 && username.length > 0 && password === secondPassword;
    const { isSignup } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} >
        <FormGroup>
          <Label for="exampleEmail">Username:</Label>
          <Input type="rext" name="username" id="exampleUserName" placeholder="enter username" value={this.state.username} onChange={this.handleUserNameChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter email" value={this.state.email} onChange={this.handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password:</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="enter password" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password:</Label>
          <Input type="password" name="confirmPassword" id="examplePassword" placeholder="re-enter password" value={this.state.secondPassword} onChange={this.handlesecondPasswordChange} />
        </FormGroup>
        <ModalFooter>
          <Button disabled={!isEnabled} color="primary" onClick={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</Button>{' '}
        </ModalFooter>
      </Form >
    );
  }
}


export default SignUp;

