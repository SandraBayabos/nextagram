import React from 'react';
import axios from 'axios'

class UserImages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userImages: []
        }
    }

    componentDidMount() {
        const { userId } = this.props

        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
            .then(result => {
                const userImages = result.data;
                this.setState({ userImages: userImages })
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }

    render() {
        // console.log(this.state.userImages)
        return (
            <div>
                <p className='text-center'>{
                    this.state.userImages.map(userImage =>
                        <img key={userImage} style={styles.userImageList} src={userImage} alt='' />
                    )
                }
                </p>
            </div>

        )
    }
}

const styles = {
    userImageList: {
        width: '250px',
        height: '250px',
        borderRadius: '20px',
        padding: '10px',
        display: 'inline-block',
        textAlign: 'center'
    }
}

export default UserImages;
