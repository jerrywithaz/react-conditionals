import React from 'react';
import If from '../If';
import { ElseIfProps } from './ElseIf.types';

function ElseIf<Data>(props: ElseIfProps<Data>): JSX.Element {
    return <If {...props}/>
}

export default ElseIf;