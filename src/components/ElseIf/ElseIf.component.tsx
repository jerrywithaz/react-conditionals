import React from 'react';
import If from '../If';
import { ElseIfProps } from './ElseIf.types';

/**
 * Declarative control statement for `elseif`. Should only 
 * be rendered within a `ControlFlow` component.
 */
function ElseIf<Data = any> (
    props: ElseIfProps<Data>
): JSX.Element {
    return <If<Data> {...props}/>
}

export default ElseIf;