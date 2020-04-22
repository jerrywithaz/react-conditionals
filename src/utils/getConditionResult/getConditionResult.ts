import isEmpty from 'lodash/isEmpty';
import { ConditionalOptions } from '../../types';

/**
 * Determine if the condition is true or false or if
 * the data passed is not empty.
 */
function getConditionResult<Data = any>(options: ConditionalOptions<Data>): boolean {

    if (options.condition !== undefined) {
        const conditionResult = !!((typeof options.condition === 'function')
            ? options.condition()
            : options.condition
        )

        return conditionResult;
    }
    else if (options.data) {
        return !isEmpty(options.data);
    }
    else {
        return false;
    }

}

export default getConditionResult;