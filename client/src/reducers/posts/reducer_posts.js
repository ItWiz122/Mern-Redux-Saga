import { fromJS } from 'immutable';
import * as ActionTypes from '../../actions';
import { ROOT } from '../../routes';

const INITIAL_STATE = fromJS({
    all: [],
    post: null,
    navigateTo: null
});

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {

        case ActionTypes.INITIAL_POSTS:
            return INITIAL_STATE;

        case ActionTypes.FETCH_POSTS_SUCCESS:
            return state.set('all', action.posts);

        case ActionTypes.FETCH_POSTS_ERROR:
            return state.set('all', []);

        case ActionTypes.FETCH_POST_SUCCESS:
            return state.set('post', action.post);

        case ActionTypes.FETCH_POST_ERROR:
            return state.set('post', null);

        case ActionTypes.CREATE_POST_SUCCESS:
            return state.set('navigateTo', ROOT);

        case ActionTypes.CREATE_POST_ERROR:
            return state;

        case ActionTypes.DELETE_POST_SUCCESS:
            return state.set('navigateTo', ROOT);

        case ActionTypes.DELETE_POST_ERROR:
            return state;


        default:
            return state;

    }
}
