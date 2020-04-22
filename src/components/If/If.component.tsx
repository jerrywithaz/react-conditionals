import getConditionResult from 'src/utils/getConditionResult';
import render from 'src/utils/render';
import { IfProps } from './If.types';

function If<Data>(props: IfProps<Data>): JSX.Element | null {

    const conditionResult = getConditionResult<Data>(props);
    
    return conditionResult ? render<Data>(props) : null;

}

export default If;