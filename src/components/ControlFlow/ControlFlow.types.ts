import { FunctionComponent } from "react";
import { TransitionProps } from 'react-transition-group/Transition';

export type ControlFlowProps = {
    /**
     * Children that consists of only `If`, `ElseIf` or `Else` components.
     */
    children: React.ReactNode; 
};

export type AnimatedControlFlowProps = ControlFlowProps & TransitionProps;

export type ControlFlowComponent = FunctionComponent<ControlFlowProps>;