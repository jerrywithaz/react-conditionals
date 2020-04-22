import React from 'react';
import { RenderProps } from './render.types';

/**
 * Renders the desired component.
 */
function render<Data>(props: RenderProps<Data>): JSX.Element | null {

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

export default render;