import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import HTMLView from 'react-native-htmlview';
import { THEME } from '../constants';

class Detail extends Component {

    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
       this.props.navigation.setParams({title: this.props.article.title});
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: `${params.title}`,
        }
    }

    render() {
        let article = this.props.article;
        return (
          <ScrollView style={styles.container}>
              <Text style={styles.published}>{article.published}</Text>
              <Text style={styles.title}>{article.title}</Text>
              <HTMLView value={article.description} />
          </ScrollView>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: THEME.TEXT,

    },
    published: {
        fontSize: 10,
        color: THEME.SECOND_TEXT
    },
    title: {
        fontSize: 16,
        fontWeight: '500'
    }
})


const mapStateToProps = state => {
    return {
        article: state.selectedItem
    }
}
export default connect(mapStateToProps)(Detail);