import React from 'react';
import If from '../If';
import { ElseIfProps } from './ElseIf.types';

function ElseIf<Data>(props: ElseIfProps<Data>) {
    return <If {...props}/>
}

export default ElseIf;