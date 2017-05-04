import * as ActionTypes from '../../../../actions';

export function navigateTo(path) {
    return {
        type: ActionTypes.NAVIGATE_TO,
        payload: path
    }
}

export function resetNavigateTo() {
    return {
        type: ActionTypes.RESET_NAVIGATE_TO,
        payload: null
    }
}