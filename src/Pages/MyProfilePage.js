import React from 'react';
import axios from 'axios';

class MyProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myImages: [],
      myUserName: [],
      myProfileImage: [],
      myProfile: []
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt')
    const myUserName = localStorage.getItem('myUserName')
    const myProfileImage = localStorage.getItem('myProfileImage')
    const myProfile = localStorage.getItem('myProfile')

    axios({
      method: 'get',
      url: `https://insta.nextacademy.com/api/v1/images/me`,
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(result => {
        const myImages = result.data;
        this.setState({
          myImages: myImages,
          myUserName: myUserName,
          myProfileImage: myProfileImage,
        })
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })

  }
  render() {
    // const { id } = this.props.match.params;
    // // const { currentUser } = this.props.users.find(user =>
    // // user.id == id)
    return (
      <>
        <div className='container'>
          <div style={styles.myUserName}>{this.state.myUserName}</div> <div className='text-center'><img style={styles.myProfileImage} src={`http://next-curriculum-instagram.s3.amazonaws.com/${this.state.myProfileImage}`} alt='' /></div><hr />
          <div className='text-center'>
            {
              this.state.myImages.map(myImage =>
                <img style={styles.myImages} key={myImage} src={myImage} alt='' />
              )
            }
          </div>
        </div>
      </>
    )
  }
}

const styles = {
  container: {
    paddingTop: '10px',
    display: 'inline-block',
    margin: '0 auto',
    width: '75vw',
    maxWidth: '90vw',
    align: 'center'
  },
  myUserName: {
    fontFamily: 'Lobster',
    fontSize: '50px',
    textAlign: 'center'
  },
  myImages: {
    width: '250px',
    height: '250px',
    borderRadius: '20px',
    margin: '0 auto',
    padding: '10px',

  },
  myProfileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    textAlign: 'center',
    margin: '0 auto'
  }
}

export default MyProfile;