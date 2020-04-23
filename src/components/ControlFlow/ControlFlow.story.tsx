import React, { useState, FunctionComponent } from 'react';
import randomNumber from 'lodash/random';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ControlFlow from '.';
import If from '../If';
import ElseIf from '../ElseIf';
import Else from '../Else';

export default {
    title: "ControlFlow",
    component: ControlFlow
};

function useRandomNumberData() {

    const [number, setNumber] = useState<number>(randomNumber(0, 100));

    const data = number > 50 ? {
        number: number
    } : null;

    function regenerateNumber() {
        setNumber(randomNumber(0, 100));
    }
    return { data, regenerateNumber, number };

}

export const withBooleanConditions = (): JSX.Element => {

    const { number, regenerateNumber } = useRandomNumberData();

    return (
        <React.Fragment>
            <button onClick={regenerateNumber}>Regenerate Number ({number})</button>
            <ControlFlow>
                <If condition={number == 0}>
                    <div>Number was 0</div>
                </If>
                <ElseIf condition={number > 0 && number <= 30}>
                    <div>Number was greater than 0 and less than or equal to 30</div>
                </ElseIf>
                <ElseIf condition={number > 30 && number <= 60}>
                    <div>Number was greater than 30 and less than or equal to 60</div>
                </ElseIf>
                <ElseIf condition={number > 60 && number < 100}>
                    <div>Number was greater than 60 and less than 100</div>
                </ElseIf>
                <Else>
                    <div>Number was 100.</div>
                </Else>
            </ControlFlow>
        </React.Fragment>
    );
}

export const withOpionalData = (): JSX.Element => {

    const { data, regenerateNumber, number } = useRandomNumberData();

    return (
        <React.Fragment>
            <button onClick={regenerateNumber}>Regenerate Number ({number})</button>
            <ControlFlow>
                <If data={data} render={data => (
                    <div>Number was {data.number}</div>
                )} />
                <Else>
                    <div>Number was greater than 50</div>
                </Else>
            </ControlFlow>
        </React.Fragment>

    );
}

const FadeTransitionGroup = styled(TransitionGroup)`
    .fade-appear, 
    .fade-enter {
        opacity: 0;
        z-index: 1;
    }
    .fade-appear.fade-appear-active,
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 250ms ease-in;
    }
    .fade-exit {
        opacity: 0;
    }
`;

const Fade: FunctionComponent = ({
    children
}) => {
    return (
        <FadeTransitionGroup>
            <CSSTransition
                appear
                key={uuidv4()}
                timeout={250}
                classNames="fade"
                addEndListener={() => { }}>
                {children}
            </CSSTransition>
        </FadeTransitionGroup>
    );
};

export const withAnimation = (): JSX.Element => {

    const { data, regenerateNumber, number } = useRandomNumberData();

    return (
        <React.Fragment>
            <button onClick={regenerateNumber}>Regenerate Number ({number})</button>
            <Fade>
                <ControlFlow>
                    <If data={data} render={data => (
                        <div>Number was {data.number}</div>
                    )} />
                    <Else>
                        <div>Number was greater than 50</div>
                    </Else>
                </ControlFlow>
            </Fade>
        </React.Fragment>
    );
}