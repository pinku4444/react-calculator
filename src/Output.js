import React from 'react';
import {CustomInput} from './styledcomponent'

const Output = (props) => {
    return (
        <div>
            <CustomInput type="text" value={props.data} onChange={props.manageInputHandler} />
        </div>
    );
};

export default Output;