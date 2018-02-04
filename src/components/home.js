import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { Text } from 'react-native';

import { Card, Button, CardSection } from './common';

class Home extends Component {

    render() {
        return (
            <Card style={styles.containerStyle} >

                <CardSection style={styles.welcomeStyle}>
                    <Text style={styles.textStyle}> Welcome to React Native </Text>
                </CardSection>

                <CardSection>
                    <Button
                        onPress={() => Actions.hello()}
                    > Click Me</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'space-between'
    },
    welcomeStyle: {
        flex: 1,
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 18,
        alignSelf: 'center'
    }
};

export default Home; 
