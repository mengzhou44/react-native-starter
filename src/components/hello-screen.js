import React from 'react';

import { View, Text } from 'react-native';

import colors from './common/_colors';


const HelloScreen = () => {
    const { containerStyle, textStyle } = styles;
    return (
        <View style={containerStyle} >
            <Text style={textStyle}> Hello </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 18,
        color: colors.red,
        alignSelf: 'center'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center'
    }
};

export default HelloScreen; 
