import React from 'react';
import UserImages from '../containers/UserImages';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    users: [],
    // loading: true
  }

  componentDidMount() {
    this.setState({
      users: this.props.users
    })
  }

  // //axios used to get APIs. Then we render it in the return below. 
  // componentDidMount() {//do it here because 
  //     // performing a GET request to '/api-end-point'
  //     axios.get('https://insta.nextacademy.com/api/v1/users')//when you get something it returns you a promise
  //         .then(result => {//.then can only be used on a promise which is something that is not known yet
  //             const users = result.data;//create a variable which yeilds the result data from the API
  //             // If successful, we do stuffs with 'result'
  //             this.setState({ users })//once the axios gets the users data, then it will set the loading to false & it will disappear 
  //             //{, loading: false} removed from the upper this setState
  //             setTimeout(() => { this.setState({ loading: false }) }, 2000)
  //         })
  //         .catch(error => {
  //             // If unsuccessful, we notify users what went wrong
  //             console.log('ERROR: ', error)
  //         })
  // }

  render() {
    // console.log(this.props)
    return (
      <>
        {<MyContent>
          <div className='body'>
            <div className='container' style={styles.container}>
              <ul>
                {
                  this.state.users.map(user =>
                    <li key={user.profileImage} style={styles.userList}> <Link to={`/users/${user.id}`} style={styles.userName}>{user.username}</Link> : <img src={user.profileImage} style={styles.profileImages} width='50px' radius='50px' alt='' />
                      <UserImages userId={user.id} />
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </MyContent>
        }
      </>
    )
  }
}

const MyContent = styled.div`
    background: white;

    .body {
        color: white;
    }
`;

const styles = {
  container: {
    marginLeft: '100px',
    backgroundColor: '',
    maxWidth: '90 %',
  },
  userList: {
    padding: '20px',
    fontFamily: 'Sree Krushnadevaraya',
    fontSize: '20px',
    display: 'inline-block',
  },
  profileImages: {
    borderRadius: '50%'
  },
  userName: {
    fontSize: '20px',
    color: 'black',
  }

}


export default HomePage;