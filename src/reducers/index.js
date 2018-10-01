import { REC_ITEMS, REQUEST_ITEM, SELECTED_ITEM, SELECTED_TITLE, SELECTED_SCREEN } from '../constants';


const initialState = {
    isLoading: false,
    rss: {},
    selectedItem: null,
    selectedTitle: '',
    selectedScreen: 'index'
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REC_ITEMS:
            return {
                ...state,
                isLoading: false,
                rss: Object.assign({}, state.rss, action.payload)
            }
        case REQUEST_ITEM:
            return {
                ...state,
                isLoading: true
            }
        case SELECTED_ITEM:
            return {
                ...state,
                selectedItem: Object.assign({}, state.selectedItem, action.payload)
            }
        case SELECTED_TITLE:
            return {
                ...state,
                selectedTitle: action.payload
            }
        case SELECTED_SCREEN:
            return {
                ...state,
                selectedScreen: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;