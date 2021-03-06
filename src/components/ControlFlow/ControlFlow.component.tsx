import React from 'react';
import { ControlFlowComponent } from './ControlFlow.types';
import { getDecisionComponent } from './ControlFlow.utils';

/**
 * Evaluates a set of `If`, `ElseIf` or `Else` components.
 */
const ControlFlow: ControlFlowComponent = ({
    children
}): JSX.Element => {

    const element = getDecisionComponent(children);

    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    );
    
};

export default ControlFlow;