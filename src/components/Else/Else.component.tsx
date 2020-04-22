import React from 'react';
import { ElseProps } from './Else.types';

function Else({ children }: ElseProps) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    ); 
}

export default Else;