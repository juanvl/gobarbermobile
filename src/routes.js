import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Routes = createAppContainer(createSwitchNavigator({SignIn, SignUp}));

export default Routes;
