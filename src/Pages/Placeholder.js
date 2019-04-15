import React, { Component } from "react";
import Image from "react-graceful-image";

class Placeholder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: true
        }
    }
    render() {
        return (
            <Image
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/cats-paw-b-16.jpg"
                width="500"
                height="400"
                style={{ padding: "20px" }}
                alt="My awesome image"
                retry={{ count: 10, delay: 2 }}
            />
        );
    }
}

export default Placeholder;