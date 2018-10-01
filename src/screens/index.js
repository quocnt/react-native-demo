import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';
import DrawerContent from '../components/DrawerContent';
import { THEME } from '../constants';

const HomeStack = createStackNavigator(
    {
        Home: Home,
        Detail: Detail
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTitleStyle: {
                color: '#C2185B'
            },
            headerTintColor: '#3d3d3d'
        }
    }
);

export const HomeScreen = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack
        }
    }, {
        drawerBackgroundColor: THEME.DARK_PRI_BG,
        contentOptions : {
            activeTintColor: THEME.TEXT
        },
        contentComponent : DrawerContent
    }
);

