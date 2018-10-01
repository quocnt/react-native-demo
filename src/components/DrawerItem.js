import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import { THEME } from '../constants';

class DrawerItem extends Component {
    
    _onPress = () => {
        this.props.dispatch(getItems(this.props.screenName, true));
        this.props.navigation.toggleDrawer();
     }
    
    render() {
        const { icon, label } = this.props;
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={this._onPress}>
                <Icon name={icon} size={25} color={THEME.TEXT}></Icon>
                <Text style={styles.item}>{label}</Text>
            </TouchableOpacity>
        )
    }
} 

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: THEME.SHADOW_DARK_BORDER,
        borderStyle: 'dotted',
    },
    item: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 15,
        color: THEME.TEXT
    }
});

const mapStateToProps = (state) => {
    return {
        title: state.selectedTitle
    }
}

export default connect(mapStateToProps)(DrawerItem);