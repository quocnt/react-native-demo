import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { getItems } from './actions';

import { HomeScreen } from './screens';

const store = configureStore(/* initState */);
const init = () => {
    // set init State if needed
    store.dispatch(getItems());
}

const RootApp = () => (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
)

init();

export default RootApp;