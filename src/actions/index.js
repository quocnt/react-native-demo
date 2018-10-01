import { REC_ITEMS, REQUEST_ITEM, SELECTED_ITEM, SELECTED_TITLE, SELECTED_SCREEN } from '../constants';
import * as rssParser from 'react-native-rss-parser';
import { MenuData } from '../routes';


const fetchItems = (page) => {
    return (dispatch, getState) => {
        dispatch(requestItem());
        let obj = MenuData.find(i => i.screenName === page);
        return fetch(obj.url)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                dispatch(receiveItems(rss));
            })
            .catch(error => console.log(error));
    }
}

export const getItems = (page, isUpdate) => {
    page = page || 'index';
    return (dispatch, getState) => {
        const { rss } = getState();
        dispatch(selectedScreen(page));
        dispatch(selectedTitle(page));
        if (!Object.keys(rss).length || isUpdate) {
            return dispatch(fetchItems(page))
        }
    }
}

const selectedScreen = page => {
    return {
        type: SELECTED_SCREEN,
        payload: page
    }
}

const selectedTitle = page => {
    return {
        type: SELECTED_TITLE,
        payload: page ? MenuData.find(i => i.screenName === page).label : 'index'
    }
}

const requestItem = () => {
    return {
        type: REQUEST_ITEM
    }
}

const receiveItems = obj => {
    if (obj.items.length) {
        obj.items = obj.items.filter(i => i.id);
    }
    return {
        type: REC_ITEMS,
        payload: obj
    }
}

export const selectedItem = (article) => {
    return {
        type: SELECTED_ITEM,
        payload: article
    }
}



