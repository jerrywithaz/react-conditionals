export type ConditionalResult = boolean;

export type ConditionalFunction = () => ConditionalResult;

export type IfProps<Data = any> = {
    /**
     * React Children to be rendered if the `condition`
     * prop is true.
     */
    children?: React.ReactNode;
    /**
     * A boolean conditional to be used in combination with
     * the `children` prop.
     */
    condition?:  ConditionalFunction | ConditionalResult;
    /**
     * A data prop to be used in combination with `render`.
     * The component will be rendered if `data` is not empty
     * as defined by lodash's `isEmpty` utility.
     */
    data?: Data;
    /**
     * The `JSX.Element` to be rendered if the `data` prop is 
     * not empty. The function will recieve the `data` prop
     * as an argument.
     */
    render?: (data: Data) => JSX.Element;
};