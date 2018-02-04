import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/home';
import HelloScreen from './components/hello-screen';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>

                <Scene key='home' component={Home} title='Home' initial />
                <Scene key='hello' component={HelloScreen} title='Hello' />

            </Scene>

        </Router>
    )
}

export default RouterComponent; 