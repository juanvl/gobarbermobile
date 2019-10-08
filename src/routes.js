import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';
import Dashboard from '~/screens/Dashboard';

const Routes = (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({SignIn, SignUp}),
        App: createBottomTabNavigator({Dashboard}),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );

export default Routes;
