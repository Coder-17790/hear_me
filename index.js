/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import flowLogin from './src/navigators/flowLogin';
import TabBottomHome from './src/navigators/bottomTabHome';
import Home from './src/screen/home';

AppRegistry.registerComponent(appName, () => flowLogin);
