import React from 'react';
import { RenderProps } from './render.types';

/**
 * Renders the desired component.
 */
function render<Data>(props: RenderProps<Data>): JSX.Element | null {

    if (props.render && props.data !== null && props.data !== undefined) {
        return props.render(props.data as NonNullable<Data>);
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

export default render;