import React from 'react';
import Loader from 'react-loader-spinner';


// class Spinner extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     // loading: true
//         // }
//     }
//     render() {
//         if (this.props.loading) {
//             return (
//                 <div className='sweet-loading' style={styles.sweetLoading}>
//                     <Loader
//                         type="TailSpin"
//                         color="pink"
//                         height="100"
//                         width="100"
//                     />
//                 </div>
//             )
//         } else {
//             return null
//         }
//     }
// }

//passing in a property to see whether it will render or not
const Spinner = (props) => {
    if (props.loading) {
        return (
            <div className='sweet-loading' style={styles.sweetLoading}>
                <Loader
                    type="TailSpin"
                    color="pink"
                    height="100"
                    width="100"
                />
            </div>
        )
    } else {
        return null
    }
}

const styles = {
    sweetLoading: {
        marginLeft: '45%',
        marginTop: '20%'
    }
}

export default Spinner;
