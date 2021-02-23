import React from 'react';
import Photo from './Photo';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idk: 'bler'
        }
    }

    render() {
        return (
            <div className='photo-container'>
                <h1>Results</h1>
                <ul>
                    <Photo></Photo>
                </ul>
            </div>
        );
    }
}

export default Gallery;