import React, { FunctionComponent } from 'react';
import { ControlFlowProps } from './ControlFlow.types';
import { getDecisionComponent } from './ControlFlow.utils';

/**
 * Evaluates a set of `If`, `ElseIf` or `Else` components.
 */
const ControlFlow: FunctionComponent<ControlFlowProps> = ({
    children
}): JSX.Element => {

    const decision = getDecisionComponent(children);

    return (
        <React.Fragment>
            {decision}
        </React.Fragment>
    );
    
};

export { ControlFlow };
export default ControlFlow;