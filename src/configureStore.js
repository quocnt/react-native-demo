import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

export default configureStore = (initialState) => {

    if (__DEV__) {
        const createStoreWithMiddleware = composeWithDevTools(
            applyMiddleware(thunkMiddleware)
        )(createStore);

        const store = createStoreWithMiddleware(rootReducer, initialState);
        return store;
    } else {
        const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
        const store = createStoreWithMiddleware(rootReducer, initialState);
        return store;
    }
}