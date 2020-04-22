import React, { FunctionComponent } from 'react';
import { ElseProps } from './Else.types';

const Else: FunctionComponent<ElseProps> = ({
    children
}: ElseProps): JSX.Element => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    ); 
};

export default Else;