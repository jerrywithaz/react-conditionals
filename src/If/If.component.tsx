import { IfProps } from './If.types';
import { render, getConditionResult } from './If.utils';

function If<Data>(props: IfProps<Data>) {

    const conditionResult = getConditionResult<Data>(props);
    
    return conditionResult ? render<Data>(props) : null;

}

export default If;