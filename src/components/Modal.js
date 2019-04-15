import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Login from './Login';
import SignUp from './SignUp'

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isSignup: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !this.state.modal,

    }));
  }

  toggleSignup = () => {
    this.setState({
      isSignup: !this.state.isSignup,

    })
  }

  render() {
    const { isSignup } = this.state;
    return (
      <div>
        <Button color="" onClick={this.toggle}>{this.props.buttonLabel}{this.props.currentUser ? 'Log Out' : 'Log In'}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</ModalHeader>
          <ModalBody>
            {isSignup
              ? <SignUp setUser={this.props.setUser} toggle={this.toggle} />
              : <Login setUser={this.props.setUser} toggle={this.toggle} />
            }
          </ModalBody>
          <p style={styles.Paragraph}>{isSignup ? 'Already Member?' : 'Not a member?'} <Button color="dark" onClick={this.toggleSignup}>{this.props.buttonLabel}{isSignup ? 'Log In' : 'Sign Up'}</Button></p>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </Modal>
      </div >
    );
  }
}

const styles = {
  Paragraph: {
    paddingLeft: '15px'
  }
}

export default ModalForm;