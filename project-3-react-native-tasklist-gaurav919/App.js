import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/Screens/IndexScreen';
import {Provider}from './src/context/todoContext';
import ShowScreens from './src/Screens/ShowScreens';
import CreateScreen from './src/Screens/CreateScreen';


const navigator=createStackNavigator({
Index:IndexScreen,
Show: ShowScreens,
Create: CreateScreen
},
{
initialRouteName:'Index',


});
const App = createAppContainer(navigator);
export default()=>{
return <Provider>
<App/>
</Provider>
};