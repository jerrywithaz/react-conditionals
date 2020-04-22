import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { IfProps } from './If.types';

/**
 * Determine if the condition is true or false.
 */
export function getConditionResult<Data = any>(props: IfProps<Data>) {

    if (props.condition !== undefined) {
        const conditionResult = !!((typeof props.condition === 'function')
            ? props.condition()
            : props.condition
        )

        return conditionResult;
    }
    else if (props.data) {
        return !isEmpty(props.data);
    }
    else {
        return false;
    }

}

/**
 * Renders the desired component.
 */
export function render<Data = any>(props: IfProps<Data>): JSX.Element | null {

    if (props.render && props.data) {
        return props.render(props.data);
    }
    else if (props.children) {
        if (typeof props.children === "function") {
            return <React.Fragment>{props.children()}</React.Fragment>;
        }
    
        return <React.Fragment>{props.children || null}</React.Fragment>;
    }
    else {
        return null;
    }

}