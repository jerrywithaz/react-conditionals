import getConditionResult from '../../utils/getConditionResult';
import render from '../../utils/render';
import { IfProps } from './If.types';

/**
 * Renders a component if certain conditions as defined
 * through the props are true or truthy.
 */
function If<Data = any>(
    props: IfProps<Data>
): JSX.Element | null {

    const conditionResult = getConditionResult<Data>(props);
    
    return conditionResult ? render<Data>(props) : null;

}

If.displayName = "If";

export default If;