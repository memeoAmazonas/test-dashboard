import React from 'react';

import {PulseLoader} from 'halogenium';

let styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginToop: '-50px',
    marginLeft: '-100px',
};
const Loading = () => (
    <div className='sweet-loading' style={styles}>
        <PulseLoader color="#26A65B" size="20px" margin="4px"/>
    </div>
);
export default Loading;
