import React from 'react';
import { Image } from 'react-native';

const Avatar = ({src, size}) => {
    return (
        <Image style={{
                width: size,
                height: size,
                borderRadius: size / 10,
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 0.1
            }}
            source={{uri: src}}
        />
    )
}

export default Avatar;