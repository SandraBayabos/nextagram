import React from "react";
import UserImages from '../containers/UserImages';
import user from '../Pages/HomePage';

class UserProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    render() {
        console.log(user)
        const { id } = this.props.match.params;
        const currentUser = this.props.users.find(user =>
            user.id == id)

        return (

            <div className='container'>
                <div style={styles.userName}>
                    <img style={styles.profileImage} src={currentUser && currentUser.profileImage} alt='' />  {currentUser && currentUser.username}</div><hr />
                <div className='container-fluid' style={styles.images}><UserImages userId={id} /></div>
            </div>

        )
    }
}

const styles = {
    container: {
        paddingTop: '10px',
        display: 'block',
        margin: '0 auto',
        width: '75vw',
        maxWidth: '90vw'

    },
    userName: {
        fontFamily: 'Lobster',
        fontSize: '50px',
        textAlign: 'center'
    },
    profileImage: {
        maxWidth: '200px',
        maxHeight: '200px',
        borderRadius: '100px',
        align: 'center'
    },
}

export default UserProfilePage