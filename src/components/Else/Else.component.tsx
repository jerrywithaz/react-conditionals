import React, { FunctionComponent } from 'react';
import { ElseProps } from './Else.types';

/**
 * Declarative control statement for `else`. Should only 
 * be rendered within a `ControlFlow` component.
 */
const Else: FunctionComponent<ElseProps> = ({
    children
}: ElseProps): JSX.Element => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    ); 
};

Else.displayName = "Else";

export default Else;