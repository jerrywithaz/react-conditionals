import React from 'react';
import If from '../If';
import { ElseIfProps } from './ElseIf.types';

function ElseIf<Data = any> (
    props: ElseIfProps<Data>
): JSX.Element {
    return <If<Data> {...props}/>
}

export default ElseIf;