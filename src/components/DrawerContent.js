import React from 'react';
import { Image, View, Text, FlatList, StyleSheet } from 'react-native';
import DrawerItem from './DrawerItem';
import { MenuData } from '../routes';
import { THEME } from '../constants';

const DrawerContent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={require('../../images/img_logo_vne_web.gif')} style={styles.profileImg}></Image>
            </View>
            <FlatList 
                style={styles.flatList}
                data={MenuData}
                renderItem={({item}) => <DrawerItem navigation={navigation} label={item.label} icon={item.icon} screenName={item.screenName} key={item.key}></DrawerItem>}
            ></FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatList: {
        paddingLeft: 5,
        paddingRight: 5
    },
    profileContainer: {
        flexDirection: 'row',
        paddingBottom: 15,
        backgroundColor: THEME.TEXT
    },
    profileImg: {
        width: 150,
        height: 50,
        marginLeft: 10
    }
});

export default DrawerContent;