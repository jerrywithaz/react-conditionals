import getConditionResult from '../../utils/getConditionResult';
import render from '../../utils/render';
import { IfProps } from './If.types';

function If<Data = any>(
    props: IfProps<Data>
): JSX.Element | null {

    const conditionResult = getConditionResult<Data>(props);
    
    return conditionResult ? render<Data>(props) : null;

}

export default If;