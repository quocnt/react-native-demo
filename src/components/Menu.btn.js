import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { THEME } from '../constants';

const MenuBtn = () => {
    return (
        <Icon name="menu" size={30} color={THEME.DARK_PRI_BG}/>
    )
}
export default MenuBtn;