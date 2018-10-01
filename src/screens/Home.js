import React, { Component } from 'react';
import { FlatList, RefreshControl, View, TouchableOpacity, StyleSheet, ActivityIndicator, Image, Button, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux';
import Article from '../components/Article';
import { getItems, selectedItem } from '../actions';
import MenuBtn from '../components/Menu.btn';
import { THEME } from '../constants';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'VnExpress RSS',
            headerLeft: (
                <TouchableOpacity onPress={ () => { navigation.openDrawer(); } } style={{marginLeft: 10}}>
                    <MenuBtn />
                </TouchableOpacity>
            )
        }
    }

    _keyExtractor = (item, index) => item.id;


    _onPressItem = (article) => {
        this.props.dispatch(selectedItem(article));
        this.props.navigation.navigate("Detail", {article: article});
    }

    _renderItem =  ({item}) => (
        <Article article={item} onPressItem={this._onPressItem}/>
    )

    _onRefresh = () => {
        this.props.dispatch(getItems(this.props.screen, true));
    }

    render() {
        let rss = this.props.rss;
        let isLoading = this.props.isLoading;
        return (
            <View style={styles.container}>
                { isLoading ? (
                    <View>
                        <ActivityIndicator size="large" color={THEME.INDICATOR}/>
                    </View>
                ) : (
                    <FlatList
                        data={rss.items}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        refreshControl={
                            <RefreshControl 
                                refreshing={isLoading}
                                onRefresh={this._onRefresh}
                            />
                        }
                    />
                    )    
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: THEME.TEXT,
      fontSize: 18,
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  

const mapStateToProps = state => {
    return {
        rss : state.rss,
        isLoading: state.isLoading,
        title: state.selectedTitle,
        screen: state.selectedScreen
    };
};

export default connect(
    mapStateToProps
)(Home);