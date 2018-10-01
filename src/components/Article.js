import React, { PureComponent } from 'react';
import { Text, TouchableOpacity , View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import { THEME } from '../constants';

class Article extends PureComponent {
    _parseHtml = html => {
        let content, imgUrl;
        try {
            content = /\<\/br\>(.+)$/.exec(html)[1];
            imgUrl = /src=\"(.+)"/.exec(html)[1];
        } catch (e) {
            console.log(e);
        }
        
        return { content, imgUrl }
    }

    _onPress = () => {
        let article = this.props.article;
        this.props.onPressItem(article);
    }

    render() {
        let article = this.props.article;
        let parsedHtml = this._parseHtml(article.description);
        return (
            <TouchableOpacity style={styles.container} key={article.id} onPress={this._onPress}>
                <Avatar size={50} src={parsedHtml.imgUrl} style={styles.avatar} />
                <View style={styles.infoContainer}>
                    <Text numberOfLines={1} style={styles.title}>{article.title}</Text>
                    <Text numberOfLines={2} style={styles.description}>{parsedHtml.content}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        padding: 12,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: THEME.BORDER
      },
      infoContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12
      },
      title: {
        fontSize: 14,
        color: THEME.PRI_TEXT
      },
      description: {
        fontSize: 13,
        color: THEME.SECOND_TEXT
      }
})

export default Article;